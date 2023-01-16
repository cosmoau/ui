import { createStitches, createTheme } from "@stitches/react";

export const breakpoints = {
  desktop: "@media only screen and (max-width: 2000px)",
  desktopX: "@media only screen and (min-width: 1601px) and (max-width: 2000px)",
  laptop: "@media only screen and (max-width: 1600px)",
  laptopX: "@media only screen and (min-width: 1001px) and (max-width: 1600px)",
  phone: "@media only screen and (max-width: 800px)",
  special: {
    micro: "@media only screen and (max-width: 400px)",
    retina:
      "@media only screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 2dppx)",
    print: "@media print",
  },
  tablet: "@media only screen and (max-width: 1000px)",
  tabletX: "@media only screen and (min-width: 801px) and (max-width: 1000px)",
  wide: "@media only screen and (min-width: 2001px)",
};

export const { theme, css, styled, getCssText, globalCss, keyframes } = createStitches({
  theme: {
    colors: {
      accent: "rgb(62, 72, 92)",
      background: "rgb(255, 250, 245)",
      blueText: "rgb(32, 47, 136)",
      border: "rgba(8, 12, 36, 0.15)",
      default: "rgba(8, 12, 36, 0.03)",
      defaultHover: "rgba(8, 12, 36, 0.06)",
      greenText: "rgb(0, 76, 6)",
      orangeText: "rgb(199, 84, 30)",
      pinkText: "rgb(173, 22, 128)",
      purpleText: "rgb(112, 23, 171)",
      redText: "rgb(170, 28, 47)",
      soft: "rgba(8, 12, 36, 0.035)",
      text: "rgb(11, 26, 55)",
      accentIHM: "rgb(0, 48, 74)",
      blueBorder: "rgba(115, 172, 255, 0.5)",
      blueOverlay: "rgba(151, 193, 255, 0.25)",
      greenBorder: "rgba(0, 200, 83, 0.5)",
      greenOverlay: "rgba(101, 227, 124, 0.25)",
      orangeBorder: "rgba(255, 172, 115, 0.5)",
      orangeOverlay: "rgba(255, 172, 115, 0.25)",
      pinkBorder: "rgba(255, 115, 172, 0.5)",
      pinkOverlay: "rgba(255, 115, 172, 0.25)",
      purpleBorder: "rgba(172, 115, 255, 0.5)",
      purpleOverlay: "rgba(172, 115, 255, 0.25)",
      redBorder: "rgba(255, 115, 115, 0.5)",
      redOverlay: "rgba(255, 115, 115, 0.25)",
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
      small: "0 0.3rem 0.4rem 0 rgba(8, 12, 36, 0.06)",
      medium: "0 0.6rem 0.6rem 0 rgba(8, 12, 36, 0.09)",
      large: "0 0.6rem 0.9rem 0 rgba(8, 12, 36, 0.12)",
    },
    space: {
      large: "4rem",
      larger: "6rem",
      largest: "8rem",
      excess: "16rem",
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
    darkThemeSpec: (value: unknown) => ({
      "@media (prefers-color-scheme: dark)": value,
    }),
    lightThemeSpec: (value: unknown) => ({
      "@media (prefers-color-scheme: light)": value,
    }),
  },
});

export const darkTheme = createTheme({
  colors: {
    accent: "rgb(101, 115, 150)",
    background: "rgb(8, 12, 36)",
    blueText: "rgb(166, 179, 255)",
    border: "rgba(253, 250, 246, 0.2)",
    default: "rgba(253, 250, 246, 0.075)",
    defaultHover: "rgba(253, 250, 246, 0.125)",
    greenText: "rgb(124, 241, 151)",
    orangeText: "rgb(254, 177, 141)",
    pinkText: "rgb(255, 142, 221)",
    purpleText: "rgb(210, 142, 255)",
    redText: "rgb(251, 127, 143)",
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
