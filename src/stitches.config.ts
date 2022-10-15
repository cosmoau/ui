import { createStitches, createTheme, CSS } from '@stitches/react';

export const breakpoints = {
  desktop: '@media only screen and (max-width: 1980px)',
  desktopX: '@media only screen and (min-width: 1541px) and (max-width: 1980px)',
  laptop: '@media only screen and (max-width: 1540px)',
  laptopX: '@media only screen and (min-width: 921px) and (max-width: 1540px)',
  phone: '@media only screen and (max-width: 740px)',
  tablet: '@media only screen and (max-width: 920px)',
  tabletX: '@media only screen and (min-width: 741px) and (max-width: 920px)',
  wide: '@media only screen and (min-width: 1981px)',
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
      h1: '3.6rem',
      h2: '3rem',
      h3: '2.6rem',
      h4: '1.7rem',
      h5: '1.6rem',
      h6: '1.5rem',
      p: '1.3rem',
      small: '1.2rem',
    },
    fontWeights: {
      h1: '500',
      h2: '500',
      h3: '500',
      h4: 'bold',
      h5: 'normal',
      h6: 'normal',
      p: 'normal',
      small: 'normal',
    },
    fonts: {
      default: '$sans',
      sans: 'Untitled Sans, apple-system, sans-serif',
      serif: 'Tiempos Headline',
    },
    media: breakpoints,
    radii: {
      1: '0.6rem',
      2: '0.9rem',
      3: '1.2rem',
    },
    shadows: {
      1: '0 0.2rem 0.3rem 0 rgba(253, 250, 246, 0.03)',
      2: '0 0.4rem 0.6rem 0 rgba(253, 250, 246, 0.03)',
      3: '0 0.6rem 0.9rem 0 rgba(253, 250, 246, 0.03)',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '2rem',
      6: '4rem',
      7: '8rem',
      8: '10rem',
    },
    transitions: {
      default: 'all 0.13s ease-in-out',
    },
    zIndices: {
      dialog: 100,
      dropdown: 125,
      popover: 150,
      toast: 1000,
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
    accent: 'rgb(40, 57, 73)',
    background: 'rgb(253, 250, 246)',
    blueText: 'rgb(32, 47, 136)',
    border: 'rgba(10, 12, 30,0.11)',
    borderHover: 'rgba(10, 12, 30, 0.09)',
    default: 'rgba(10, 12, 30, 0.04)',
    defaultHover: 'rgba(10, 12, 30, 0.06)',
    greenText: 'rgb(0, 76, 6)',
    orangeText: 'rgb(199, 84, 30)',
    pinkText: 'rgb(173, 22, 128)',
    purpleText: 'rgb(112, 23, 171)',
    redText: 'rgb(170, 28, 47)',
    text: 'rgb(10, 37, 64)',
  },
  shadows: {
    1: '0 0.2rem 0.3rem 0 rgba(8, 10, 27, 0.1)',
    2: '0 0.4rem 0.6rem 0 rgba(8, 10, 27, 0.1)',
    3: '0 0.6rem 0.8rem 0 rgba(8, 10, 27, 0.1)',
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
