import { useEffect, useState } from "react";

import { breakpoints } from "../stitches.config";

type Breakpoint = "micro" | "phoneX" | "tabletX" | "laptopX" | "desktopX" | "wide" | undefined;

const getBreakpoint = (): Breakpoint => {
  if (window.matchMedia(breakpoints.special.micro).matches) {
    return "micro";
  } else if (window.matchMedia(breakpoints.phoneX).matches) {
    return "phoneX";
  } else if (window.matchMedia(breakpoints.tabletX).matches) {
    return "tabletX";
  } else if (window.matchMedia(breakpoints.laptopX).matches) {
    return "laptopX";
  } else if (window.matchMedia(breakpoints.desktopX).matches) {
    return "desktopX";
  } else if (window.matchMedia(breakpoints.wide).matches) {
    return "wide";
  }

  return undefined;
};

export default function useBreakpoints(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("micro");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const breakpointListener = (): void => {
        setBreakpoint(getBreakpoint());
      };

      breakpointListener();
      window.addEventListener("resize", breakpointListener);

      return () => window.removeEventListener("resize", breakpointListener);
    }

    return () => {};
  }, []);

  return breakpoint;
}
