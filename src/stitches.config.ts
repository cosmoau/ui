import { createStitches, createTheme, CSS } from '@stitches/react';

export const breakpoints = {
  desktop: '@media only screen and (max-width: 2000px)',
  desktopX: '@media only screen and (min-width: 1601px) and (max-width: 2000px)',
  laptop: '@media only screen and (max-width: 1600px)',
  laptopX: '@media only screen and (min-width: 1001px) and (max-width: 1600px)',
  phone: '@media only screen and (max-width: 800px)',
  tablet: '@media only screen and (max-width: 1000px)',
  tabletX: '@media only screen and (min-width: 801px) and (max-width: 1000px)',
  wide: '@media only screen and (min-width: 2001px)',
};

export const { theme, css, styled, getCssText, globalCss, keyframes } = createStitches({
  theme: {
    colors: {
      accent: 'rgb(162, 170, 194)',
      background: 'rgb(8, 10, 27)',
      blueBorder: 'rgba(115, 172, 255, 0.4)',
      blueOverlay: 'rgba(151, 193, 255, 0.2)',
      blueText: 'rgb(166, 179, 255)',
      border: 'rgba(253, 250, 246, 0.15)',
      borderHover: 'rgba(253, 250, 246, 0.1)',
      default: 'rgba(253, 250, 246, 0.06)',
      defaultHover: 'rgba(253, 250, 246, 0.1)',
      greenBorder: 'rgba(0, 200, 83, 0.4)',
      greenOverlay: 'rgba(101, 227, 124, 0.2)',
      greenText: 'rgb(124, 241, 151)',
      orangeBorder: 'rgba(255, 172, 115, 0.4)',
      orangeOverlay: 'rgba(255, 172, 115, 0.2)',
      orangeText: 'rgb(254, 177, 141)',
      pinkBorder: 'rgba(255, 115, 172, 0.4)',
      pinkOverlay: 'rgba(255, 115, 172, 0.2)',
      pinkText: 'rgb(255, 142, 221)',
      purpleBorder: 'rgba(172, 115, 255, 0.4)',
      purpleOverlay: 'rgba(172, 115, 255, 0.2)',
      purpleText: 'rgb(210, 142, 255)',
      redBorder: 'rgba(255, 115, 115, 0.4)',
      redOverlay: 'rgba(255, 115, 115, 0.2)',
      redText: 'rgb(251, 127, 143)',
      text: 'rgb(253, 250, 246)',
    },
    fontSizes: {
      h1: '3.4rem',
      h2: '2.8rem',
      h3: '2.6rem',
      h4: '1.8rem',
      h5: '1.7rem',
      h6: '1.5rem',
      p: '1.4rem',
      small: '1.3rem',
    },
    fontWeights: {
      h1: 'normal',
      h2: 'normal',
      h3: 'normal',
      h4: 'bold',
      h5: 'normal',
      h6: 'normal',
      p: 'normal',
      small: 'normal',
    },
    fonts: {
      default: '$sans',
      sans: 'Untitled Sans, apple-system, sans-serif',
      serif: 'Tiempos Headline, $sans',
    },
    media: breakpoints,
    radii: {
      1: '0.6rem',
      2: '0.9rem',
      3: '1.2rem',
    },
    shadows: {
      1: '0 0.2rem 0.3rem 0 rgba(253, 250, 246, 0.0420)',
      2: '0 0.4rem 0.6rem 0 rgba(253, 250, 246, 0.0420)',
      3: '0 0.6rem 0.9rem 0 rgba(253, 250, 246, 0.0420)',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '2.25rem',
      6: '4.5rem',
      7: '6.75rem',
      8: '8rem',
    },
    transitions: {
      default: 'all 0.2s ease-in-out',
    },
    zIndices: {
      dialog: 999,
      dropdown: 998,
      popover: 997,
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
      value:
        | 'phone'
        | 'tablet'
        | 'tabletX'
        | 'laptop'
        | 'laptopX'
        | 'desktop'
        | 'desktopX'
        | 'wide'
    ) => ({
      [breakpoints[value]]: {
        display: 'none !important',
      },
    }),
    hiddenInline: (
      value:
        | 'phone'
        | 'tablet'
        | 'tabletX'
        | 'laptop'
        | 'laptopX'
        | 'desktop'
        | 'desktopX'
        | 'wide'
    ) => ({
      display: 'inline-block !important',
      [breakpoints[value]]: {
        display: 'none !important',
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
      value:
        | 'phone'
        | 'tablet'
        | 'tabletX'
        | 'laptop'
        | 'laptopX'
        | 'desktop'
        | 'desktopX'
        | 'wide'
    ) => ({
      display: 'none',
      [breakpoints[value]]: {
        display: 'block',
      },
    }),
    visibleInline: (
      value:
        | 'phone'
        | 'tablet'
        | 'tabletX'
        | 'laptop'
        | 'laptopX'
        | 'desktop'
        | 'desktopX'
        | 'wide'
    ) => ({
      display: 'none',
      [breakpoints[value]]: {
        display: 'inline-block',
      },
    }),
    wide: (value: unknown) => ({
      [breakpoints.wide]: value,
    }),
  },
});

export const lightTheme = createTheme({
  colors: {
    accent: 'rgb(43, 57, 68)',
    background: 'rgb(253, 250, 246)',
    blueText: 'rgb(32, 47, 136)',
    border: 'rgba(10, 12, 30,0.1)',
    borderHover: 'rgba(10, 12, 30, 0.075)',
    default: 'rgba(10, 12, 30, 0.0420)',
    defaultHover: 'rgba(10, 12, 30, 0.06)',
    greenText: 'rgb(0, 76, 6)',
    orangeText: 'rgb(199, 84, 30)',
    pinkText: 'rgb(173, 22, 128)',
    purpleText: 'rgb(112, 23, 171)',
    redText: 'rgb(170, 28, 47)',
    text: 'rgb(15, 18, 39)',
  },
  shadows: {
    1: '0 0.2rem 0.3rem 0 rgba(8, 10, 27, 0.08)',
    2: '0 0.4rem 0.6rem 0 rgba(8, 10, 27, 0.08)',
    3: '0 0.6rem 0.8rem 0 rgba(8, 10, 27, 0.08)',
  },
});

export interface DefaultProps {
  css?: CSS;
  id?: string;
  spacing?: keyof typeof theme.space;
}

export const fadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

export const fadeOut = keyframes({
  '0%': {
    opacity: 1,
  },

  '100%': {
    opacity: 0,
  },
});
