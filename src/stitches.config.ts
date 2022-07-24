import { createStitches, createTheme, CSS } from '@stitches/react';

export const breakpoints = {
  desktop: '@media only screen and (max-width: 2160px)',
  desktopX: '@media only screen and (min-width: 1481px) and (max-width: 2160px)',
  laptop: '@media only screen and (max-width: 1480px)',
  laptopX: '@media only screen and (min-width: 961px) and (max-width: 1480px)',
  phone: '@media only screen and (max-width: 720px)',
  tablet: '@media only screen and (max-width: 960px)',
  tabletX: '@media only screen and (min-width: 721px) and (max-width: 960px)',
  wide: '@media only screen and (min-width: 2161px)',
};

export const { theme, css, styled, getCssText, globalCss, keyframes } = createStitches({
  theme: {
    colors: {
      accent: 'rgb(170, 177, 201)',
      background: 'rgb(17, 17, 21)',
      blueBorder: 'rgba(115, 172, 255, 0.4)',
      blueCTA: 'rgb(55, 119, 192)',
      blueOverlay: 'rgba(115, 172, 255, 0.2)',
      blueText: 'rgb(140, 158, 255)',
      border: 'rgba(165, 170, 200, 0.3)',
      default: 'rgba(165, 170, 200, 0.1)',
      defaultHover: 'rgba(165, 170, 200, 0.25)',
      greenBorder: 'rgba(0, 200, 83, 0.4)',
      greenOverlay: 'rgba(101, 227, 124, 0.2)',
      greenText: 'rgb(124, 241, 183)',
      inverted: 'rgb(31, 31, 37)',
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
      text: 'rgb(255, 255, 255)',
    },
    fontSizes: {
      h1: '3.6rem',
      h2: '2.6rem',
      h3: '2.2rem',
      h4: '2rem',
      h5: '1.7rem',
      h6: '1.5rem',
      p: '1.4rem',
      small: '1.3rem',
    },
    fontWeights: {
      h1: 'bold',
      h2: 'bold',
      h3: 'bold',
      h4: 'bold',
      h5: 'normal',
      h6: 'normal',
      p: 'normal',
      small: 'normal',
    },
    fonts: {
      default: 'Untitled Sans, apple-system, sans-serif',
    },
    lineHeights: {
      h1: '1.3',
      h2: '1.3',
      h3: '1.4',
      h4: '1.4',
      h5: '1.4',
      h6: '1.45',
      p: '1.4',
      small: '1.4',
    },
    media: breakpoints,
    radii: {
      1: '0.66rem',
      2: '0.88rem',
      3: '1.33rem',
    },
    shadows: {
      1: 0,
      2: 0,
      3: 0,
    },
    space: {
      1: '0.3rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1.25rem',
      5: '2rem',
      6: '3rem',
      7: '6rem',
      8: '9rem',
    },
    transitions: {
      default: 'all 0.25s ease-in-out',
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
    hidden: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => ({
      [breakpoints[value]]: {
        display: 'none !important',
      },
    }),
    hiddenInline: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => ({
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
    visible: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => ({
      display: 'none',
      [breakpoints[value]]: {
        display: 'block',
      },
    }),
    visibleInline: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => ({
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
    accent: 'rgb(63, 67, 81)',
    background: 'rgb(255, 255, 255)',
    blueText: 'rgb(32, 47, 136)',
    inverted: 'rgb(17, 17, 21)',
    border: 'rgba(0, 0, 0, 0.08)',
    default: 'rgba(0, 0, 0, 0.06)',
    defaultHover: 'rgba(0, 0, 0, 0.09)',
    greenText: 'rgb(0, 76, 38)',
    orangeText: 'rgb(199, 84, 30)',
    pinkText: 'rgb(173, 22, 128)',
    purpleText: 'rgb(112, 23, 171)',
    redText: 'rgb(170, 28, 47)',
    text: 'rgb(18, 19, 26)',
  },
  shadows: {
    1: '0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.01)',
    2: '0 0.3rem 0.4rem 0 rgba(0, 0, 0, 0.05)',
    3: '0 0.3rem 0.4rem 0.2rem rgba(0, 0, 0, 0.05)',
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
