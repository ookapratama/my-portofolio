import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Returns false on the server and during the first client render, then true
// after hydration. Use to gate client-only UI without setState-in-effect.
export function useIsHydrated(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
