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

export const { theme, css, styled, getCssText, globalCss, keyframes } = createStitches({
  theme: {
    colors: {
      accent: "rgb(71, 86, 99)",
      accentIHM: "rgb(12, 48, 84)",
      background: "rgb(255, 250, 245)",
      blueBackground: "rgb(190, 220, 250)",
      blueText: "rgb(24, 54, 84)",
      border: "rgba(8, 12, 36, 0.15)",
      borderTable: "rgba(8, 12, 36, 0.075)",
      default: "rgba(8, 12, 36, 0.03)",
      defaultHover: "rgba(8, 12, 36, 0.06)",
      greenBackground: "rgb(210, 240, 222)",
      greenText: "rgb(22, 70, 80)",
      metricBlueA: "rgb(25, 76, 126)",
      metricBlueB: "rgb(75, 145, 215)",
      metricGreenA: "rgb(11, 104, 53)",
      metricGreenB: "rgb(71, 181, 115)",
      metricOrangeA: "rgb(157, 98, 34)",
      metricOrangeB: "rgb(223, 158, 112)",
      metricPurpleA: "rgb(74, 75, 169)",
      metricPurpleB: "rgb(165, 170, 244)",
      metricRedA: "rgb(113, 4, 4)",
      metricRedB: "rgb(240, 89, 94)",
      metricYellowA: "rgb(159, 123, 5)",
      metricYellowB: "rgb(223, 178, 43)",
      orangeBackground: "rgb(255, 211, 197)",
      orangeText: "rgb(124, 46, 22)",
      purpleBackground: "rgb(207, 210, 255)",
      purpleText: "rgb(39, 40, 93)",
      redBackground: "rgb(255, 203, 205)",
      redText: "rgb(122, 34, 38)",
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
      excess: "14rem",
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
    phone: (value: unknown) => ({
      [breakpoints.phone]: value,
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
    visibleInline: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => ({
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
    accent: "rgb(177, 207, 234)",
    background: "rgb(10, 20, 40)",
    border: "rgba(200, 220, 240, 0.2)",
    default: "rgba(200, 220, 240, 0.15)",
    defaultHover: "rgba(200, 220, 240, 0.3)",
    text: "rgb(255, 250, 245)",
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
