"use client";

import { CustomModal } from "@/components/modals/custom-modal";
import { useIsHydrated } from "@/hooks/use-is-hydrated";

// Renders only after hydration, keeping the modal client-only.
export const ModalProvider = () => {
  const isHydrated = useIsHydrated();

  if (!isHydrated) {
    return null;
  }

  return <CustomModal />;
};
