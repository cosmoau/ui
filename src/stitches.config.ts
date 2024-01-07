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
    retina: "@media only screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 2dppx)",
  },
  tablet: "@media only screen and (max-width: 1000px)",
  tabletX: "@media only screen and (min-width: 801px) and (max-width: 1000px)",
  wide: "@media only screen and (min-width: 2001px)",
};

const defaultTheme = {
  colors: {
    accent: "#4b5363",
    background: "#fef8f4",
    blueBackground: "#d1dfe8",
    blueData: "#0D4EA6",
    blueDataAlt: "#278e9c",
    blueText: "#223c63",
    border: "rgba(0, 0, 0, 0.125)",
    borderTable: "rgba(0, 0, 0, 0.075)",
    default: "#f2ebe6",
    defaultHover: "#e6ddd7",
    defaultInput: "#fcf6f0",
    defaultTable: "#faf3ed",
    greenBackground: "#d1e8d3",
    greenData: "#52A31D",
    greenDataAlt: "#077D55",
    greenText: "#1c5729",
    orangeBackground: "#f9dfaf",
    orangeData: "#E86427",
    orangeDataAlt: "#dc9f48",
    orangeSelection: "#f4cb72",
    orangeText: "#7c4003",
    purpleBackground: "#dad1e8",
    purpleData: "#8c64dc",
    purpleDataAlt: "#d664dc",
    purpleText: "#462263",
    redBackground: "#f5c9c5",
    redData: "#d80000",
    redDataAlt: "#f76f74",
    redText: "#550805",
    subtle: "#253256",
    text: "#0a2540",
  },
  fontSizes: {
    default: "1.7rem",
    h1: "3.5rem",
    h2: "3.1rem",
    h3: "2.7rem",
    h4: "2.3rem",
    h5: "2rem",
    h6: "1.8rem",
    small: "1.6rem",
  },
  fonts: {
    default: "Untitled Sans, apple-system, sans-serif",
    serif: "Tiempos Headline, $default, apple-system, sans-serif",
  },
  lineHeights: {
    default: "1.45",
    small: "1.3",
  },
  radii: {
    large: "1rem",
    small: "0.5rem",
  },
  shadows: {
    large: "0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2)",
    small: "0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.15)",
  },
  space: {
    excess: "14rem",
    large: "4.5rem",
    larger: "7rem",
    largest: "9rem",
    medium: "2.5rem",
    none: "0",
    small: "1.25rem",
    smaller: "0.5rem",
    smallest: "0.25rem",
  },
  transitions: {
    default: "all 0.23s ease",
  },
  zIndices: {
    dialog: 997,
    menu: 999,
    popover: 996,
    select: 995,
    special: 100,
    table: 100,
    toast: 998,
  },
};

export const darkTheme = createTheme({
  colors: {
    accent: "#bccee1",
    background: "#0e1623",
    border: "#32415a",
    borderTable: "rgba(254, 248, 244, 0.1)",
    default: "#202936",
    defaultHover: "#333f4f",
    defaultInput: "rgba(254, 248, 244, 0.01)",
    defaultTable: "#17212d",
    gradientEnd: "rgba(49, 112, 183, 0.02)",
    gradientStart: "rgba(49, 112, 183, 0.1)",
    subtle: "#e2eaf3",
    text: "#fef7f2",
  },
  shadows: {
    large: "0 0.3rem 0.5rem 0.05rem rgba(254, 248, 244, 0.05)",
    small: "0 0.125rem 0.25rem 0 rgba(254, 248, 244, 0.05)",
  },
});

export const { theme, css, styled, getCssText, globalCss, keyframes } = createStitches({
  theme: defaultTheme,
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
    hidden: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => ({
      [breakpoints[value]]: {
        display: "none !important",
      },
    }),
    hiddenInline: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => ({
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
    visible: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => ({
      display: "none",
      [breakpoints[value]]: {
        display: "block",
      },
    }),
    visibleInline: (
      value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide",
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
