import { createStitches, createTheme } from "@stitches/react";

export const breakpoints = {
  desktop: "@media only screen and (max-width: 2000px)",
  desktopX: "@media only screen and (min-width: 1601px) and (max-width: 2000px)",
  laptop: "@media only screen and (max-width: 1600px)",
  laptopX: "@media only screen and (min-width: 1001px) and (max-width: 1600px)",
  phone: "@media only screen and (max-width: 800px)",
  phoneX: "@media only screen and (min-width: 351px) and (max-width: 800px)",
  special: {
    micro: "@media only screen and (max-width: 350px)",
    print: "@media print",
    retina:
      "@media only screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 2dppx)",
  },
  tablet: "@media only screen and (max-width: 1000px)",
  tabletX: "@media only screen and (min-width: 801px) and (max-width: 1000px)",
  wide: "@media only screen and (min-width: 2001px)",
};

export const darkTheme = createTheme({
  colors: {
    accent: "#c8d7e7",
    background: "#0e1623",
    border: "rgba(255, 255, 255, 0.2)",
    borderTable: "rgba(255, 255, 255, 0.1)",
    default: "#192331",
    defaultHover: "#333f4f",
    defaultTable: "#141d29",
    text: "#fef7f2",
  },
  shadows: {
    large: "0",
    small: "0",
  },
});

export const { theme, css, styled, getCssText, globalCss, keyframes } = createStitches({
  theme: {
    colors: {
      accent: "#4b5363",
      background: "#fef8f4",
      blueBackground: "#c6dee8",
      blueData: "#0D4EA6",
      blueDataAlt: "#278e9c",
      blueText: "#041647",
      border: "rgba(0, 0, 0, 0.125)",
      borderTable: "rgba(0, 0, 0, 0.075)",
      default: "#f2ebe6",
      defaultHover: "#e6ddd7",
      defaultTable: "#faf3ed",
      greenBackground: "#d1ece9",
      greenData: "#52A31D",
      greenDataAlt: "#077D55",
      greenText: "#044731",
      orangeBackground: "#f5dfc5",
      orangeData: "#E86427",
      orangeDataAlt: "#dc9f48",
      orangeSelection: "#f4cb72",
      orangeText: "#553005",
      purpleBackground: "#e3e0f1",
      purpleData: "#8c64dc",
      purpleDataAlt: "#d664dc",
      purpleText: "#2f0447",
      redBackground: "#f5c9c5",
      redData: "#d80000",
      redDataAlt: "#f76f74",
      redText: "#550805",
      text: "#29303c",
    },
    fontSizes: {
      default: "1.6rem",
      h1: "3.5rem",
      h2: "3rem",
      h3: "2.5rem",
      h4: "2rem",
      h5: "1.8rem",
      h6: "1.6rem",
      small: "1.5rem",
    },
    fonts: {
      default: "Untitled Sans, apple-system, sans-serif",
      serif: "Tiempos Headline, $default",
    },
    lineHeights: {
      default: "1.4",
      small: "1.2",
    },
    radii: {
      large: "1.25rem",
      small: "0.75rem",
    },
    shadows: {
      large: "0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2)",
      small: "0 0.2rem 0.3rem 0 rgba(0, 0, 0, 0.15)",
    },
    space: {
      excess: "12rem",
      large: "4rem",
      larger: "6rem",
      largest: "8rem",
      medium: "2rem",
      none: "0",
      small: "1rem",
      smaller: "0.5rem",
      smallest: "0.25rem",
    },
    transitions: {
      default: "all 0.23s ease",
    },
    zIndices: {
      dialog: 997,
      popover: 996,
      select: 995,
      special: 999,
      table: 100,
      toast: 998,
    },
  },
  utils: {
    darkModeSpec: (value: unknown) => ({
      [`.${darkTheme} &`]: value,
    }),
    desktop: (value: unknown) => ({
      [breakpoints.desktop]: value,
    }),
    desktopX: (value: unknown) => ({
      [breakpoints.desktopX]: value,
    }),
    hidden: (
      value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide"
    ) => ({
      [breakpoints[value]]: {
        display: "none !important",
      },
    }),
    hiddenInline: (
      value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide"
    ) => ({
      display: "inline-block !important",
      [breakpoints[value]]: {
        display: "none !important",
      },
    }),
    hiddenSpecial: (value: "micro" | "retina" | "print") => ({
      [breakpoints.special[value]]: {
        display: "none !important",
      },
    }),
    laptop: (value: unknown) => ({
      [breakpoints.laptop]: value,
    }),
    laptopX: (value: unknown) => ({
      [breakpoints.laptopX]: value,
    }),

    lightThemeSpec: (value: unknown) => ({
      "@media (prefers-color-scheme: light)": value,
    }),
    micro: (value: unknown) => ({
      [breakpoints.special.micro]: value,
    }),
    phone: (value: unknown) => ({
      [breakpoints.phone]: value,
    }),
    print: (value: unknown) => ({
      [breakpoints.special.print]: value,
    }),
    retina: (value: unknown) => ({
      [breakpoints.special.retina]: value,
    }),
    tablet: (value: unknown) => ({
      [breakpoints.tablet]: value,
    }),
    tabletX: (value: unknown) => ({
      [breakpoints.tabletX]: value,
    }),
    visible: (
      value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide"
    ) => ({
      display: "none",
      [breakpoints[value]]: {
        display: "block",
      },
    }),
    visibleInline: (
      value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide"
    ) => ({
      display: "none",
      [breakpoints[value]]: {
        display: "inline-block",
      },
    }),
    visibleSpecial: (value: "micro" | "retina" | "print") => ({
      display: "none",
      [breakpoints.special[value]]: {
        display: "block",
      },
    }),
    wide: (value: unknown) => ({
      [breakpoints.wide]: value,
    }),
  },
});

export const fadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

export const fadeOut = keyframes({
  "0%": {
    opacity: 1,
  },

  "100%": {
    opacity: 0,
  },
});
