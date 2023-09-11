import { useEffect, useState } from "react";

import { breakpoints } from "../stitches.config";

type Breakpoint = "phone" | "tabletX" | "laptopX" | "desktopX" | "wide" | undefined;

const extractMediaQuery = (cssRule: string): string => {
  return cssRule.replace("@media only screen and ", "");
};

const getBreakpoint = (): Breakpoint => {
  if (window.matchMedia(extractMediaQuery(breakpoints.phone)).matches) {
    return "phone";
  } else if (window.matchMedia(extractMediaQuery(breakpoints.tabletX)).matches) {
    return "tabletX";
  } else if (window.matchMedia(extractMediaQuery(breakpoints.laptopX)).matches) {
    return "laptopX";
  } else if (window.matchMedia(extractMediaQuery(breakpoints.desktopX)).matches) {
    return "desktopX";
  } else if (window.matchMedia(extractMediaQuery(breakpoints.wide)).matches) {
    return "wide";
  }

  return undefined;
};

export default function useBreakpoints(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("phone");

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
