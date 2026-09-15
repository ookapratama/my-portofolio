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
