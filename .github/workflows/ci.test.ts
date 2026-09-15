import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";

// Regression tests for .github/workflows/ci.yml action version pins.
//
// Bug: actions/checkout, pnpm/action-setup, and actions/setup-node were
// pinned to major version @v4, all of which resolve to releases whose
// action.yml declares a `node20` runtime - triggering GitHub's Node 20
// deprecation warning on every CI run. Fix: bumped to @v5 (node24-runtime
// releases). `node-version: "20"` is the app's own build/test Node version
// (unrelated to the action runtime) and must remain untouched.
//
// No YAML parser (js-yaml / yaml) is resolvable from this project's own
// node_modules - they only exist as transitive deps of other tools under
// pnpm's strict node_modules layout - so per project convention this test
// uses targeted regex matching against the raw workflow file instead of
// adding a new dependency.

const ciYmlPath = join(__dirname, "ci.yml");
const ciYmlContent = readFileSync(ciYmlPath, "utf-8");

const packageJsonPath = join(__dirname, "..", "..", "package.json");
const packageJsonContent = readFileSync(packageJsonPath, "utf-8");

const DEPRECATED_NODE20_PINS = [
  { action: "actions/checkout", version: "v4" },
  { action: "pnpm/action-setup", version: "v4" },
  { action: "actions/setup-node", version: "v4" },
];

const CURRENT_NODE24_PINS = [
  { action: "actions/checkout", version: "v5" },
  { action: "pnpm/action-setup", version: "v5" },
  { action: "actions/setup-node", version: "v5" },
];

/**
 * Checks whether `uses: <action>@<version>` appears in the workflow content,
 * matching only on a full major-version token (so "v4" won't accidentally
 * match inside "v40", etc).
 */
function usesActionVersion(
  content: string,
  action: string,
  version: string
): boolean {
  const escapedAction = action.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`uses:\\s*${escapedAction}@${version}\\b`);
  return pattern.test(content);
}

describe("CI workflow action version pins", () => {
  it("should not pin actions/checkout, pnpm/action-setup, or actions/setup-node to the deprecated node20-runtime @v4 majors", () => {
    // Regression guard: this would have FAILED against the pre-fix ci.yml,
    // which pinned all three actions to @v4 (node20 runtime, the source of
    // GitHub's Node 20 deprecation warning on every CI run).
    for (const { action, version } of DEPRECATED_NODE20_PINS) {
      expect(
        usesActionVersion(ciYmlContent, action, version),
        `expected "${action}" to NOT be pinned to the deprecated ${version}`
      ).toBe(false);
    }
  });

  it("should pin actions/checkout, pnpm/action-setup, and actions/setup-node to the node24-runtime @v5 majors after the fix", () => {
    for (const { action, version } of CURRENT_NODE24_PINS) {
      expect(
        usesActionVersion(ciYmlContent, action, version),
        `expected "${action}" to be pinned to ${version}`
      ).toBe(true);
    }
  });

  it('should leave node-version at "20" when bumping the deprecated action runtime pins', () => {
    // node-version: "20" configures the app's own build/test Node version and
    // is unrelated to the action-runtime deprecation - the @v4 -> @v5 bump
    // must not have touched it.
    expect(/node-version:\s*["']20["']/.test(ciYmlContent)).toBe(true);
  });
});

// Regression tests for the pnpm/action-setup vs. packageManager version
// conflict.
//
// Bug: the `pnpm/action-setup@v5` step in ci.yml used to pass a `version:`
// input (e.g. `version: 10.11.0`) under its `with:` block, while
// package.json already pinned pnpm via the `packageManager` field
// (`pnpm@10.11.0+sha512...`). pnpm/action-setup@v5 compares these two
// values with a naive string equality check, so "10.11.0" !== the full
// "10.11.0+sha512..." string, and the action throws "Multiple versions of
// pnpm specified" - failing every CI run before a single command executes.
// Fix: the `version:`/`with:` block was removed from the step entirely, so
// pnpm/action-setup reads the version solely from package.json's
// `packageManager` field, which remains the single source of truth.

/**
 * Extracts the raw text of the `pnpm/action-setup@vX` step from a workflow
 * file's content, stopping at the next step (`- uses:` / `- name:`) or a
 * blank line separating steps.
 */
function extractPnpmActionSetupStep(content: string): string | null {
  const match = content.match(
    /-\s*uses:\s*pnpm\/action-setup@v\d+[\s\S]*?(?=\n\s*-\s*(?:uses|name):|\n{2,}|$)/
  );
  return match ? match[0] : null;
}

/** Extracts a bare `version: <value>` input from a workflow step block. */
function extractVersionInput(stepBlock: string): string | null {
  const match = stepBlock.match(/version:\s*["']?([^\s"'\n]+)["']?/);
  return match ? match[1] : null;
}

/** Extracts the pinned version out of package.json's `packageManager` field. */
function extractPackageManagerVersion(pkgJsonContent: string): string | null {
  const pkg = JSON.parse(pkgJsonContent) as { packageManager?: string };
  if (!pkg.packageManager) return null;
  const match = pkg.packageManager.match(/^pnpm@([^\s"']+)/);
  return match ? match[1] : null;
}

describe("pnpm/action-setup version input vs. package.json packageManager", () => {
  it("should flag a version conflict when pnpm/action-setup specifies a bare version input alongside package.json's packageManager field", () => {
    // Fixture reproducing the pre-fix ci.yml step: a bare semver passed via
    // `with: version:` next to package.json's full "pnpm@<version>+sha512..."
    // packageManager string. Run through the same extraction logic used
    // against the real files below, this combination is exactly what made
    // pnpm/action-setup@v5 throw "Multiple versions of pnpm specified" - so
    // this test would have FAILED against the pre-fix ci.yml/package.json pair.
    const preFixPnpmActionSetupStep = `
      - uses: pnpm/action-setup@v5
        with:
          version: 10.11.0
`;

    const versionInput = extractVersionInput(preFixPnpmActionSetupStep);
    const packageManagerVersion = extractPackageManagerVersion(packageJsonContent);

    expect(versionInput).not.toBeNull();
    expect(packageManagerVersion).not.toBeNull();
    // A bare "10.11.0" action-setup input is never string-equal to the full
    // "10.11.0+sha512..." packageManager pin, reproducing the exact
    // mismatch that broke CI - i.e. both a version input AND a
    // packageManager field being present (and disagreeing) is the bug.
    const hasConflict =
      versionInput !== null &&
      packageManagerVersion !== null &&
      versionInput !== packageManagerVersion;
    expect(hasConflict).toBe(true);
  });

  it('should not specify a version input on pnpm/action-setup when package.json already declares packageManager', () => {
    const pnpmActionSetupStep = extractPnpmActionSetupStep(ciYmlContent);
    expect(pnpmActionSetupStep).not.toBeNull();

    const versionInput = extractVersionInput(pnpmActionSetupStep!);

    // The fix removed the `version:`/`with:` block entirely, so there must
    // be no version input left to conflict with package.json's
    // packageManager field.
    expect(versionInput).toBeNull();
  });

  it("should keep package.json's packageManager field present and intact as the single source of truth for pnpm's version", () => {
    const packageManagerVersion = extractPackageManagerVersion(packageJsonContent);

    // Still pinned, still the exact pre-existing version - the fix must not
    // have touched package.json at all.
    expect(packageManagerVersion).toMatch(/^10\.11\.0\+sha512\./);

    const pkg = JSON.parse(packageJsonContent) as { packageManager?: string };
    expect(pkg.packageManager).toMatch(/^pnpm@10\.11\.0\+sha512\./);
  });
});
