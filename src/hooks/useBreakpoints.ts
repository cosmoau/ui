import { useEffect, useState } from "react";

import { breakpoints } from "../stitches.config";

type Breakpoint = "micro" | "phoneX" | "tabletX" | "laptopX" | "desktopX" | "wide" | undefined;

const extractMediaQuery = (cssRule: string): string => {
  return cssRule.replace("@media only screen and ", "");
};

const getBreakpoint = (): Breakpoint => {
  if (window.matchMedia(extractMediaQuery(breakpoints.special.micro)).matches) {
    return "micro";
  } else if (window.matchMedia(extractMediaQuery(breakpoints.phoneX)).matches) {
    return "phoneX";
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
  isMicro: boolean;
  isPhone: boolean;
  isTablet: boolean;
  isWide: boolean;
} {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("phoneX");

  const isMicro = breakpoint === "micro";
  const isPhone = breakpoint === "phoneX";
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

      return () => window.removeEventListener("resize", breakpointListener);
    }

    return () => {};
  }, []);

  return { breakpoint,isDesktop, isLaptop, isMicro, isPhone, isTablet, isWide };
}
