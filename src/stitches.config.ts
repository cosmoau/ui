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

export const { theme, css, styled, getCssText, globalCss, keyframes } = createStitches({
  theme: {
    colors: {
      accent: "rgb(77, 89, 113)",
      accentIHM: "rgb(12, 48, 84)",
      background: "rgb(255, 250, 245)",
      blueBackground: "rgb(210, 231, 252)",
      blueText: "rgb(21, 71, 121)",
      border: "rgba(10, 20, 40, 0.16)",
      borderTable:"rgba(10, 20, 40, 0.08)",
      default: "rgba(10, 20, 40, 0.04)",
      defaultHover: "rgba(10, 20, 40, 0.08)",
      greenBackground: "rgb(220, 243, 222)",
      greenText: "rgb(26, 90, 51)",
      metricBlueA: "rgb(0, 105, 209)",
      metricBlueB: "rgb(84, 177, 239)",
      metricGreenA: "rgb(0, 154, 69)",
      metricGreenB: "rgb(35, 204, 156)",
      metricOrangeA: "rgb(228, 118, 0)",
      metricOrangeB: "rgb(249, 165, 105)",
      metricPurpleA: "rgb(75, 0, 213)",
      metricPurpleB: "rgb(136, 141, 210)",
      metricRedA: "rgb(216, 0, 0)",
      metricRedB: "rgb(247, 111, 116)",
      metricYellowA: "rgb(221, 171, 4)",
      metricYellowB: "rgb(217, 188, 100)",
      orangeBackground: "rgb(249, 219, 187)",
      orangeText: "rgb(112, 69, 22)",
      purpleBackground: "rgb(228, 216, 250)",
      purpleText: "rgb(40, 16, 83)",
      redBackground: "rgb(250, 200, 200)",
      redText: "rgb(101, 21, 21)",
      text: "rgb(10, 20, 40)",
      yellowBackground: "rgb(250, 237, 196)",
      yellowText: "rgb(90, 74, 21)",
    },
    fontSizes: {
      default: "1.6rem",
      h1: "3.4rem",
      h2: "2.8rem",
      h3: "2.4rem",
      h4: "2.1rem",
      h5: "1.7rem",
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
      large: "1.2rem",
      small: "0.6rem",
    },
    shadows: {
      large: "0 0.4rem 0.8rem 0 rgba(10, 20, 40, 0.3)",
      small: "0 0.2rem 0.3rem 0 rgba(10, 20, 40, 0.15)",
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

export const darkTheme = createTheme({
  colors: {
    accent: "rgb(200, 215, 231)",
    background: "rgb(10, 20, 40)",
    backgroundSpecial: "rgb(20, 30, 50)",
    border: "rgba(255, 255, 255, 0.15)",
    borderTable: "rgba(255, 255, 255, 0.075)",
    default: "rgba(255, 250, 245, 0.07)",
    defaultHover: "rgba(255, 250, 245, 0.14)",
    text: "rgb(255, 250, 245)",
  },
  shadows: {
    large: "0",
    small: "0",
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
