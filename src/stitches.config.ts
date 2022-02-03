import { createStitches, createTheme } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const breakpoints = {
  phone: '@media only screen and (max-width: 799px)',
  tablet: '@media only screen and (min-width: 800px)',
  tabletX: '@media only screen and (min-width: 800px) and (max-width: 999px)',
  laptop: '@media only screen and (min-width: 1000px)',
  laptopX: '@media only screen and (min-width: 1000px) and (max-width: 1449px)',
  desktop: '@media only screen and (min-width: 1450px)',
  desktopX: '@media only screen and (min-width: 1450px) and (max-width: 1999px)',
  wide: '@media only screen and (min-width: 2000px)',
  dark: '@media only screen and (prefers-color-scheme: dark)',
};

export const { theme, css, styled, globalCss } = createStitches({
  theme: {
    colors: {
      baseBody: '#ffffff',
      base100: 'rgb(4, 44, 63)',
      base200: 'rgba(4, 44, 63, 0.9)',
      base300: 'rgba(4, 44, 63, 0.15)',
      base400: 'rgba(4, 44, 63, 0.1)',
      baseContrast100: 'rgb(255, 255, 255)',
      baseContrast200: 'rgb(230, 240, 241)',
      baseContrast300: 'rgba(255, 255, 255, 0.15)',
      baseContrast400: 'rgba(255, 255, 255, 0.1)',
      red100: 'rgb(165, 71, 65)',
      red200: 'rgb(249, 187, 183)',
      red300: 'rgb(241, 202, 202)',
      red400: 'rgba(165, 71, 65, 0.2)',
      yellow100: 'rgb(172, 113, 5)',
      yellow200: 'rgb(249, 221, 170)',
      yellow300: 'rgb(245, 226, 195)',
      yellow400: 'rgba(172, 113, 5, 0.2)',
      green100: 'rgb(8, 112, 77)',
      green200: 'rgb(178, 240, 203)',
      green300: 'rgb(202, 243, 226)',
      green400: 'rgba(8, 105, 112, 0.2)',
      blue100: 'rgb(5, 91, 141)',
      blue200: 'rgb(185, 210, 237)',
      blue300: 'rgb(206, 222, 240)',
      blue400: 'rgba(5, 91, 141, 0.2)',
      navy100: 'inherit',
      navy200: 'rgba(0, 76, 104, 0.12)',
      navy300: 'rgba(0, 76, 104, 0.08)',
      navy400: 'rgba(0, 76, 104, 0.04)',
      purple100: 'rgb(89, 33, 141)',
      purple200: 'rgb(219, 195, 244)',
      purple300: 'rgb(229, 212, 246)',
      purple400: 'rgba(89, 33, 141, 0.2)',
      pink100: 'rgb(107, 26, 83)',
      pink200: 'rgb(240, 195, 226)',
      pink300: 'rgb(245, 213, 235)',
      pink400: 'rgba(107, 26, 83, 0.2)',
      border100: 'rgba(0, 1, 2, 0.15)',
      border200: 'rgba(223, 227, 230, 0.9)',
    },
    space: {
      0.5: '0.125rem',
      1: '0.33rem',
      1.5: '0.66rem',
      2: '1.5rem',
      2.5: '2rem',
      3: '2.5rem',
      3.5: '3.5rem',
      4: '5rem',
      5: '7.5rem',
      6: '10rem',
      7: '15rem',
    },
    fontSizes: {
      base1: '62.5%',
      base2: '1.6rem',
      h1: '3.2rem',
      h2: '2.7rem',
      h3: '2.1rem',
      h4: '1.9rem',
      h5: '1.75rem',
      h6: '1.6rem',
      t1: '1.5rem',
      t2: '1.4rem',
      t3: '1.2rem',
    },
    fonts: {
      body: 'Graphik, system-ui, sans-serif',
    },
    fontWeights: {
      1: 'normal',
      2: 'bold',
    },
    lineHeights: {
      base: '1.6',
      h1: '1.3',
      h2: '1.35',
      h3: '1.4',
      h4: '1.5',
      h5: '1.5',
      h6: '1.45',
      t1: '1.4',
      t2: '1.1',
      t3: '1.1',
    },
    sizes: {
      1: '100%',
      2: '96%',
      3: '1250px',
      4: '1400px',
      5: '1600px',
      6: '98%',
    },
    borderC: {
      1: '0.1rem solid rgb(4, 44, 63)',
      2: '0.1rem solid rgb(4, 24, 34)',
    },
    radii: {
      1: '0.5rem',
      2: '0.75rem',
      3: '1.5rem',
    },
    shadows: {
      1: '0 0.2rem 0.1rem rgba(0, 0, 0, 0.01)',
      2: '0 0.4rem 0.4rem rgba(0, 0, 0, 0.033)',
      3: '0 0.6rem 0.8rem rgba(0, 0, 0, 0.066)',
      4: '0 0.6rem 0.6rem rgba(0, 0, 0, 0.1)',
    },
    zIndices: {
      dropdown: 10,
      tooltip: 15,
      alert: 100,
      cookies: 9999,
    },
    transitions: {
      1: 'all 0.2s ease-in-out',
    },
    media: breakpoints,
  },
  utils: {
    pt: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: (value as Stitches.ScaleValue<'space'>) + '!important',
    }),
    pb: (value: Stitches.ScaleValue<'space'>) => ({
      paddingBottom: (value as Stitches.ScaleValue<'space'>) + '!important',
    }),
    pl: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: (value as Stitches.ScaleValue<'space'>) + '!important',
    }),
    pr: (value: Stitches.ScaleValue<'space'>) => ({
      paddingRight: (value as Stitches.ScaleValue<'space'>) + '!important',
    }),
    ptb: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: (value as Stitches.ScaleValue<'space'>) + '!important',
      paddingBottom: (value as Stitches.ScaleValue<'space'>) + '!important',
    }),
    plr: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: (value as Stitches.ScaleValue<'space'>) + '!important',
      paddingRight: (value as Stitches.ScaleValue<'space'>) + '!important',
    }),
    plrz: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: (value as Stitches.ScaleValue<'space'>) + '!important',
      paddingRight: (value as Stitches.ScaleValue<'space'>) + '!important',
      paddingTop: (value as Stitches.ScaleValue<'space'>) + '!important',
      paddingBottom: (value as Stitches.ScaleValue<'space'>) + '!important',
    }),
    mt: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: (value as Stitches.ScaleValue<'space'>) + '!important',
    }),
    mb: (value: Stitches.ScaleValue<'space'>) => ({
      marginBottom: (value as Stitches.ScaleValue<'space'>) + '!important',
    }),
    ml: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: (value as Stitches.ScaleValue<'space'>) + '!important',
    }),
    mr: (value: Stitches.ScaleValue<'space'>) => ({
      marginRight: (value as Stitches.ScaleValue<'space'>) + '!important',
    }),
    mtr: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: (value as Stitches.ScaleValue<'space'>) + '!important',
      marginRight: (value as Stitches.ScaleValue<'space'>) + '!important',
    }),
    mbr: (value: Stitches.ScaleValue<'space'>) => ({
      marginBottom: (value as Stitches.ScaleValue<'space'>) + '!important',
      marginRight: (value as Stitches.ScaleValue<'space'>) + '!important',
    }),
    mbl: (value: Stitches.ScaleValue<'space'>) => ({
      marginBottom: (value as Stitches.ScaleValue<'space'>) + '!important',
      marginLeft: (value as Stitches.ScaleValue<'space'>) + '!important',
    }),
    mtl: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: (value as Stitches.ScaleValue<'space'>) + '!important',
      marginLeft: (value as Stitches.ScaleValue<'space'>) + '!important',
    }),
    mtrz: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: (value as Stitches.ScaleValue<'space'>) + '!important',
      marginRight: (value as Stitches.ScaleValue<'space'>) + '!important',
      marginBottom: (value as Stitches.ScaleValue<'space'>) + '!important',
      marginLeft: (value as Stitches.ScaleValue<'space'>) + '!important',
    }),
    bt: (value: Stitches.PropertyValue<'color'>) => ({
      borderTop: `0.1rem solid ${value as Stitches.PropertyValue<'color'>}`,
    }),
    bb: (value: Stitches.PropertyValue<'color'>) => ({
      borderBottom: `0.1rem solid ${value as Stitches.PropertyValue<'color'>}`,
    }),
    bl: (value: Stitches.PropertyValue<'color'>) => ({
      borderLeft: `0.1rem solid ${value as Stitches.PropertyValue<'color'>}`,
    }),
    br: (value: Stitches.PropertyValue<'color'>) => ({
      borderRight: `0.1rem solid ${value as Stitches.PropertyValue<'color'>}`,
    }),
    hidden: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => ({
      display: 'auto',
      [breakpoints[value]]: {
        display: 'none',
      },
    }),
    visible: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => ({
      display: 'none',
      [breakpoints[value]]: {
        display: 'block',
      },
    }),
    visibleInline: (
      value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide'
    ) => ({
      display: 'none',
      [breakpoints[value]]: {
        display: 'inline-block',
      },
    }),
  },
});

export const darkTheme = createTheme('dark', {
  colors: {
    ...(theme.colors as any),
    /* baseBody: '#02000a',
    base100: 'rgb(255, 255, 255)',
    base200: '#e2feff5)',
    base300: 'rgba(255, 255, 255, 0.2)',
    base400: 'rgba(255, 255, 255, 0.1)',
    baseContrast100: 'rgba(12, 19, 27, 1)',
    baseContrast200: 'rgba(82, 154, 212, 0.3)',
    baseContrast300: 'rgba(45, 90, 126, 0.15)',
    baseContrast400: 'rgba(45, 90, 126, 0.1)',
    red100: 'rgb(248, 170, 165)',
    red200: 'rgba(212, 100, 92, 0.3)',
    red300: 'rgba(212, 100, 92, 0.2)',
    red400: 'rgba(109, 23, 16, 0.1)',
    yellow100: 'rgb(248, 225, 165)',
    yellow200: 'rgba(209, 162, 92, 0.3)',
    yellow300: 'rgba(209, 162, 92, 0.2)',
    yellow400: 'rgba(209, 162, 92, 0.1)',
    green100: 'rgb(8, 112, 77)',
    green200: 'rgba(209, 162, 92, 0.3)',
    green300: 'rgba(202, 243, 226, 0.116)',
    green400: 'rgba(8, 105, 112, 0.2)',
    blue100: 'rgb(5, 91, 141)',
    blue200: 'rgb(185, 210, 237)',
    blue300: 'rgb(206, 222, 240)',
    blue400: 'rgba(5, 91, 141, 0.2)',
    navy100: 'inherit',
    navy200: 'rgba(111, 217, 255, 0.33)',
    navy300: 'rgba(111, 217, 255, 0.133)',
    navy400: 'rgba(111, 217, 255, 0.066)',
    purple100: 'rgb(89, 33, 141)',
    purple200: 'rgb(219, 195, 244)',
    purple300: 'rgb(229, 212, 246)',
    purple400: 'rgba(89, 33, 141, 0.2)',
    pink100: 'rgb(107, 26, 83)',
    pink200: 'rgb(240, 195, 226)',
    pink300: 'rgb(245, 213, 235)',
    pink400: 'rgba(107, 26, 83, 0.2)',
    border100: 'rgba(255, 255, 255, 0.15)',
    border200: 'rgba(255, 255, 255, 0.075)',*/
  },
});

export const globalStyles = globalCss({
  ...(theme as any),
  html: {
    fontSize: theme.fontSizes.base1 + ' !important',
    height: '100%',
    verticalAlign: 'baseline',
    boxSizing: 'border-box;',
    margin: '0',
    padding: '0',
    border: '0',
  },
  body: {
    color: theme.colors.base100,
    lineHeight: theme.lineHeights.base + ' !important',
    fontSize: theme.fontSizes.base2 + ' !important',
    height: '100%',
    boxSizing: 'border-box;',
    margin: 0,
    padding: 0,
  },

  '*': {
    fontFamily: 'Graphik',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitAppearance: 'none',
    boxSizing: 'border-box',
    outline: 'none',
    letterSpacing: 'normal',
    wordSpacing: 'normal',
    marginBlockStart: 0,
    marginBlockEnd: 0,
    marginInlineStart: 0,
    marginInlineEnd: 0,
    paddingBlockStart: 0,
    paddingBlockEnd: 0,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
  },
  svg: {
    transition: theme.transitions[1],
    verticalAlign: 'middle',
  },
  img: {
    borderRadius: theme.radii[3],
  },
  a: {
    transition: theme.transitions[1],
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8,
    },
    '&:focus': {
      outline: 'none',
    },
  },
  pre: {
    fontFamily: 'monospace',
    fontSize: theme.fontSizes.base2,
    overflowX: 'auto',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
  },
  code: {
    fontFamily: 'monospace',
    fontSize: theme.fontSizes.base2,
  },
  ol: {
    listStylePosition: 'inside',
  },
  ul: {
    listStylePosition: 'inside',
  },
  li: {
    listStyle: 'circle',
    marginBottom: theme.space[2],

    '&:last-child': {
      marginBottom: 0,
    },
  },
});
