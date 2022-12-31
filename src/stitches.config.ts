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
  },
  tablet: "@media only screen and (max-width: 1000px)",
  tabletX: "@media only screen and (min-width: 801px) and (max-width: 1000px)",
  wide: "@media only screen and (min-width: 2001px)",
};

export const { theme, css, styled, getCssText, globalCss, keyframes } = createStitches({
  theme: {
    colors: {
      accent: "rgb(142, 150, 174)",
      accentIHM: "rgb(0, 48, 74)",
      background: "rgb(4, 9, 28)",
      blueBorder: "rgba(115, 172, 255, 0.5)",
      blueOverlay: "rgba(151, 193, 255, 0.25)",
      blueText: "rgb(166, 179, 255)",
      border: "rgba(253, 250, 246, 0.2)",
      default: "rgba(253, 250, 246, 0.075)",
      defaultHover: "rgba(253, 250, 246, 0.125)",
      greenBorder: "rgba(0, 200, 83, 0.5)",
      greenOverlay: "rgba(101, 227, 124, 0.25)",
      greenText: "rgb(124, 241, 151)",
      orangeBorder: "rgba(255, 172, 115, 0.5)",
      orangeOverlay: "rgba(255, 172, 115, 0.25)",
      orangeText: "rgb(254, 177, 141)",
      pinkBorder: "rgba(255, 115, 172, 0.5)",
      pinkOverlay: "rgba(255, 115, 172, 0.25)",
      pinkText: "rgb(255, 142, 221)",
      purpleBorder: "rgba(172, 115, 255, 0.5)",
      purpleOverlay: "rgba(172, 115, 255, 0.25)",
      purpleText: "rgb(210, 142, 255)",
      redBorder: "rgba(255, 115, 115, 0.5)",
      redOverlay: "rgba(255, 115, 115, 0.25)",
      redText: "rgb(251, 127, 143)",
      soft: "$background",
      text: "rgb(253, 250, 246)",
    },
    fontSizes: {
      h1: "3rem",
      h2: "2.6rem",
      h3: "2.4rem",
      h4: "2.2rem",
      h5: "1.9rem",
      h6: "1.6rem",
      p: "1.6rem",
      small: "1.4rem",
    },
    fontWeights: {
      h1: "normal",
      h2: "normal",
      h3: "normal",
      h4: "normal",
      h5: "bold",
      h6: "bold",
      p: "normal",
      small: "normal",
    },
    fonts: {
      default: "Untitled Sans, apple-system, sans-serif",
      serif: "Tiempos Headline, $default",
    },
    lineHeights: {
      h1: "1.25",
      h2: "1.25",
      h3: "1.25",
      h4: "1.3",
      h5: "1.3",
      h6: "1.3",
      p: "1.4",
      small: "1.4",
    },
    radii: {
      large: "1rem",
      medium: "0.75rem",
      small: "0.5rem",
    },
    shadows: {
      large: "0 0.6rem 0.9rem 0 rgba(65, 66, 68, 0.05)",
      medium: "0 0.6rem 0.6rem 0 rgba(87, 87, 89, 0.05)",
      small: "0 0.3rem 0.4rem 0 rgba(81, 82, 85, 0.05)",
    },
    space: {
      extra: "6.5rem",
      large: "2.25rem",
      larger: "4.5rem",
      largest: "$extra",
      medium: "1rem",
      small: "0.75rem",
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
    wide: (value: unknown) => ({
      [breakpoints.wide]: value,
    }),
  },
});

export const lightTheme = createTheme({
  colors: {
    accent: "rgb(52, 58, 76)",
    background: "rgb(255, 250, 245)",
    blueText: "rgb(32, 47, 136)",
    border: "rgba(4, 9, 28, 0.16)",
    default: "rgba(4, 9, 28, 0.04)",
    defaultHover: "rgba(4, 9, 28, 0.08)",
    greenText: "rgb(0, 76, 6)",
    orangeText: "rgb(199, 84, 30)",
    pinkText: "rgb(173, 22, 128)",
    purpleText: "rgb(112, 23, 171)",
    redText: "rgb(170, 28, 47)",
    soft: "rgba(4, 9, 28, 0.035)",
    text: "rgb(16, 35, 53)",
  },
  shadows: {
    a: "0 0.3rem 0.4rem 0 rgba(4, 9, 28, 0.06)",
    b: "0 0.6rem 0.6rem 0 rgba(4, 9, 28, 0.09)",
    c: "0 0.6rem 0.9rem 0 rgba(4, 9, 28, 0.12)",
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
