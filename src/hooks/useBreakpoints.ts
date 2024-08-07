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

export default function useBreakpoints(): {
  breakpoint: Breakpoint;
  isDesktop: boolean;
  isLaptop: boolean;
  isPhone: boolean;
  isTablet: boolean;
  isWide: boolean;
} {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("phone");

  const isPhone = breakpoint === "phone";
  const isTablet = breakpoint === "tabletX";
  const isLaptop = breakpoint === "laptopX";
  const isDesktop = breakpoint === "desktopX";
  const isWide = breakpoint === "wide";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const breakpointListener = (): void => {
        const currentBreakpoint = getBreakpoint();

        setBreakpoint(currentBreakpoint);
      };

      breakpointListener();
      window.addEventListener("resize", breakpointListener);

      return (): void => window.removeEventListener("resize", breakpointListener);
    }

    return (): void => {};
  }, []);

  return { breakpoint, isDesktop, isLaptop, isPhone, isTablet, isWide };
}
