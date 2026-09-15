"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-xl font-heading">Something went wrong</h2>
      <p className="max-w-md text-sm dark:text-neutral-400">
        An unexpected error occurred while loading this page. Please try
        again.
      </p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
