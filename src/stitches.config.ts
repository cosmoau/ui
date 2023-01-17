import { createStitches, createTheme } from "@stitches/react";

export const breakpoints = {
  desktop: "@media only screen and (max-width: 2000px)",
  desktopX: "@media only screen and (min-width: 1601px) and (max-width: 2000px)",
  laptop: "@media only screen and (max-width: 1600px)",
  laptopX: "@media only screen and (min-width: 1001px) and (max-width: 1600px)",
  phone: "@media only screen and (max-width: 800px)",
  special: {
    micro: "@media only screen and (max-width: 400px)",
    print: "@media print",
    retina:
      "@media only screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 2dppx)",
  },
  tablet: "@media only screen and (max-width: 1000px)",
  tabletX: "@media only screen and (min-width: 801px) and (max-width: 1000px)",
  wide: "@media only screen and (min-width: 2001px)",
};

export const { theme, css, styled, getCssText, globalCss, keyframes } = createStitches({
  theme: {
    colors: {
      accent: "rgb(60, 70, 80)",
      accentIHM: "rgb(0, 48, 74)",
      background: "rgb(255, 250, 245)",
      blueBackground: "rgb(193, 221, 255)",
      blueText: "rgb(32, 66, 107)",
      border: "rgba(8, 12, 36, 0.1)",
      default: "rgba(8, 12, 36, 0.033)",
      defaultHover: "rgba(8, 12, 36, 0.066)",
      greenBackground: "rgba(204, 238, 222,0.9)",
      greenText: "rgb(22, 70, 80)",
      orangeBackground: "rgb(255, 211, 197)",
      orangeText: "rgb(124, 46, 22)",
      purpleBackground: "rgb(207, 210, 255)",
      purpleText: "rgb(39, 40, 93)",
      redBackground: "rgb(255, 203, 205)",
      redText: "rgb(122, 34, 38)",
      soft: "rgba(8, 12, 36, 0.035)",
      text: "rgb(11, 26, 55)",
      yellowBackground: "rgb(255, 222, 175)",
      yellowText: "rgb(113, 82, 20)",
    },
    fontSizes: {
      default: "1.6rem",
    },

    fonts: {
      default: "Untitled Sans, apple-system, sans-serif",
      serif: "Tiempos Headline, $default",
    },
    lineHeights: {
      default: "1.4",
    },
    radii: {
      large: "1rem",
      medium: "0.75rem",
      small: "0.5rem",
    },
    shadows: {
      large: "0 0.6rem 0.9rem 0 rgba(8, 12, 36, 0.12)",
      medium: "0 0.6rem 0.6rem 0 rgba(8, 12, 36, 0.09)",
      small: "0 0.3rem 0.4rem 0 rgba(8, 12, 36, 0.06)",
    },
    space: {
      excess: "16rem",
      large: "4rem",
      larger: "6rem",
      largest: "8rem",
      medium: "2rem",
      small: "1rem",
      smaller: "0.5rem",
      smallest: "0.25rem",
    },
    transitions: {
      default: "all 0.2s linear",
    },
    zIndices: {
      dialog: 999,
      popover: 998,
      select: 997,
      toast: 996,
    },
  },
  utils: {
    darkThemeSpec: (value: unknown) => ({
      "@media (prefers-color-scheme: dark)": value,
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
    phone: (value: unknown) => ({
      [breakpoints.phone]: value,
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

export const darkTheme = createTheme({
  colors: {
    accent: "rgb(145, 165, 215)",
    background: "rgb(8, 12, 36)",
    border: "rgba(253, 250, 246, 0.2)",
    default: "rgba(253, 250, 246, 0.075)",
    defaultHover: "rgba(253, 250, 246, 0.125)",
    soft: "$background",
    text: "rgb(253, 250, 246)",
  },
  shadows: {
    large: "0 0.6rem 0.9rem 0 rgba(65, 66, 68, 0.05)",
    medium: "0 0.6rem 0.6rem 0 rgba(87, 87, 89, 0.05)",
    small: "0 0.3rem 0.4rem 0 rgba(81, 82, 85, 0.05)",
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
