import { useEffect, useState, useRef, useDebugValue } from "react";

export default function useMountSSR(): boolean {
  const [isMounted, setIsMounted] = useState(false);
  const isMountedRef = useRef(false);
  const isDOM = typeof window !== "undefined" && window.document && window.document.documentElement;

  useDebugValue(isMounted ? "Mounted" : "Not Mounted");

  useEffect(() => {
    if (isDOM) {
      isMountedRef.current = true;
      setIsMounted(true);
    }

    return (): void => {
      isMountedRef.current = false;
    };
  }, []);

  return isMountedRef.current && isMounted;
}
