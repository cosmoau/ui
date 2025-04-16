import { createStitches, createTheme } from "@stitches/react";

export const breakpoints = {
  desktop: "@media only screen and (max-width: 2200px)",
  desktopX: "@media only screen and (min-width: 1401px) and (max-width: 2200px)",
  laptop: "@media only screen and (max-width: 1400px)",
  laptopX: "@media only screen and (min-width: 1101px) and (max-width: 1400px)",
  phone: "@media only screen and (max-width: 800px)",
  phoneX: "@media only screen and (min-width: 376px) and (max-width: 800px)",
  special: {
    micro: "@media only screen and (max-width: 375px)",
    print: "@media print",
    retina:
      "@media only screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 2dppx)",
  },
  tablet: "@media only screen and (max-width: 1100px)",
  tabletX: "@media only screen and (min-width: 801px) and (max-width: 1100px)",
  wide: "@media only screen and (min-width: 2201px)",
};

const defaultTheme = {
  colors: {
    accent: "#4b5363",
    accentCosmo: "rgb(49, 112, 183)",
    background: "#fef8f4",
    blueBackground: "#d1dfe8",
    blueData: "#0D4EA6",
    blueDataAlt: "#278e9c",
    blueText: "#223c63",
    border: "rgba(15, 23, 36, 0.15)",
    borderSubtle: "rgba(15, 23, 36, 0.1)",
    default: "#EFE9E5",
    defaultHover: "#E7E1DC",
    defaultSubtle: "#faf3ed",
    dialog: "rgba(15, 23, 36, 0.2)",
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
    text: "rgb(10, 37, 64)",
  },
  fonts: {
    default: "Untitled Sans, apple-system, sans-serif",
    serif: "Tiempos Headline, $default, apple-system, sans-serif",
  },
  fontSizes: {
    default: "1.7rem",
    h1: "4.4rem",
    h2: "3.5rem",
    h3: "2.8rem",
    h4: "2.2rem",
    h5: "1.8rem",
    h6: "1.7rem",
    small: "1.5rem",
  },
  lineHeights: {
    default: "1.6",
    small: "1.3",
  },
  radii: {
    large: "1rem",
    small: "0.5rem",
  },
  shadows: {
    large: "0 0.6rem 1.2rem 0 rgba(15, 23, 36, 0.15)",
    small: "0 0.2rem 0.4rem 0 rgba(15, 23, 36, 0.15)",
  },
  space: {
    excess: "19.2rem",
    large: "4.8rem",
    larger: "7.2rem",
    largest: "9.6rem",
    medium: "2.4rem",
    none: "0",
    small: "1.2rem",
    smaller: "0.6rem",
    smallest: "0.3rem",
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
    accentCosmo: "rgb(49, 112, 183)",
    background: "rgb(15, 23, 36)",
    blueBackground: "#2C5572",
    blueText: "#d9e6ff",
    border: "rgba(254, 247, 242, 0.22)",
    borderSubtle: "rgba(254, 247, 242, 0.12)",
    default: "#1d2632",
    defaultHover: "#29323e",
    defaultSubtle: "#151E2C",
    dialog: "rgba(35, 43, 56, 0.8)",
    greenBackground: "#2E6A61",
    greenText: "#dcf8e6",
    orangeBackground: "#69471b",
    orangeText: "#f3e8cf",
    purpleBackground: "#563363",
    purpleText: "#f0daf5",
    redBackground: "#65333A",
    redText: "#ffe0e0",
    subtle: "#e2eaf3",
    text: "rgb(254, 247, 242)",
  },
  shadows: {
    large: "0 0.6rem 1.2rem 0 rgba(140, 150, 160, 0.06)",
    small: "0 0.2rem 0.4rem 0 rgba(140, 150, 160, 0.06)",
  },
});

export const { css, getCssText, globalCss, keyframes, styled, theme } = createStitches({
  theme: defaultTheme,
  utils: {
    darkModeSpec: (value: unknown) => ({
      [`.${darkTheme} &`]: value,
    }),
    micro: (value: unknown) => ({
      [breakpoints.special.micro]: value,
    }),
    print: (value: unknown) => ({
      [breakpoints.special.print]: value,
    }),
    retina: (value: unknown) => ({
      [breakpoints.special.retina]: value,
    }),
    phone: (value: unknown) => ({
      [breakpoints.phone]: value,
    }),
    phoneX: (value: unknown) => ({
      [breakpoints.phoneX]: value,
    }),
    tablet: (value: unknown) => ({
      [breakpoints.tablet]: value,
    }),
    tabletX: (value: unknown) => ({
      [breakpoints.tabletX]: value,
    }),
    laptop: (value: unknown) => ({
      [breakpoints.laptop]: value,
    }),
    laptopX: (value: unknown) => ({
      [breakpoints.laptopX]: value,
    }),
    desktop: (value: unknown) => ({
      [breakpoints.desktop]: value,
    }),
    desktopX: (value: unknown) => ({
      [breakpoints.desktopX]: value,
    }),
    wide: (value: unknown) => ({
      [breakpoints.wide]: value,
    }),
    hidden: (
      value:
        | "phone"
        | "tablet"
        | "tabletX"
        | "laptop"
        | "laptopX"
        | "desktop"
        | "desktopX"
        | "wide",
    ) => ({
      [breakpoints[value]]: {
        display: "none !important",
      },
    }),
    hiddenInline: (
      value:
        | "phone"
        | "tablet"
        | "tabletX"
        | "laptop"
        | "laptopX"
        | "desktop"
        | "desktopX"
        | "wide",
    ) => ({
      [breakpoints[value]]: {
        display: "none !important",
      },
      display: "inline-block",
    }),
    hiddenSpecial: (value: "micro" | "retina" | "print") => ({
      [breakpoints.special[value]]: {
        display: "none !important",
      },
    }),
    visible: (
      value:
        | "phone"
        | "tablet"
        | "tabletX"
        | "laptop"
        | "laptopX"
        | "desktop"
        | "desktopX"
        | "wide",
    ) => ({
      [breakpoints[value]]: {
        display: "block",
      },
      display: "none !important",
    }),
    visibleInline: (
      value:
        | "phone"
        | "tablet"
        | "tabletX"
        | "laptop"
        | "laptopX"
        | "desktop"
        | "desktopX"
        | "wide",
    ) => ({
      [breakpoints[value]]: {
        display: "inline-block",
      },
      display: "none !important",
    }),
    visibleSpecial: (value: "micro" | "retina" | "print") => ({
      [breakpoints.special[value]]: {
        display: "block",
      },
      display: "none !important",
    }),
    lightThemeSpec: (value: unknown) => ({
      "@media (prefers-color-scheme: light)": value,
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
