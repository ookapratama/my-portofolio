import { useEffect, useRef } from "react";

const useClickOutside = (handler : () => void) => {
  const domNode = useRef(null);

  useEffect(() => {
    const maybeHandler = (event : Event) => {
      // @ts-ignore
      if (domNode.current && !domNode?.current?.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, [handler]);

  return domNode;
};

export default useClickOutside;
