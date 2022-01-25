import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const breakpoints = {
  phone: '@media only screen and (max-width: 799px)' as string,
  tablet: '@media only screen and (min-width: 800px)' as string,
  tabletX: '@media only screen and (min-width: 800px) and (max-width: 999px)' as string,
  laptop: '@media only screen and (min-width: 1000px)' as string,
  laptopX: '@media only screen and (min-width: 1000px) and (max-width: 1299px)' as string,
  desktop: '@media only screen and (min-width: 1300px)' as string,
  desktopX: '@media only screen and (min-width: 1300px) and (max-width: 1999px)' as string,
  wide: '@media only screen and (min-width: 2000px)' as string,
};

export const { styled, globalCss } = createStitches({
  prefix: 'cosmo',
  theme: {
    colors: {
      dark100: '#042c3f',
      dark200: '#010813',
      light100: '#ffffff',
      light200: '#e6f0f1',
      red100: '#f1caca',
      red200: '#f7e0e0',
      red300: '#f1caca',
      yellow100: '#f5e2c3',
      yellow200: '#fcefdc',
      yellow300: '#ac7105',
      green100: '#c3f1f5',
      green200: '#dff6fa',
      green300: '#086970',
      blue100: '#d0ddec',
      blue200: '#e0ecf7',
      blue300: '#055b8d',
      navy100: 'rgba(0, 84, 114, 0.05)',
      navy200: 'rgba(0, 84, 114, 0.1)',
      navy300: 'rgba(0, 76, 104, 0.05)',
      navy400: '#042c3f',
      purple100: '#e2d0ec',
      purple200: '#efe0f7',
      purple300: '#59218d',
      pink100: '#f3cae7',
      pink200: '#f8dff1',
      pink300: '#6b1a53',
    },
    space: {
      1: '0.33rem',
      2: '1rem',
      3: '2.5rem',
      4: '5rem',
      5: '7.5rem',
      6: '10rem',
      7: '15rem',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
    },
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
    },
    fontWeights: {
      1: 'normal',
      2: 'bold',
    },
    lineHeights: {},
    sizes: {
      1: '100%',
      2: '96%',
      3: '1250px',
      4: '1500px',
      5: '1800px',
      6: '98%',
    },
    borderWidths: {
      1: '0.1rem',
    },
    borderStyles: {
      1: 'solid',
    },
    radii: {
      1: '0.5rem',
      2: '0.75rem',
      3: '1.5rem',
    },
    shadows: {
      1: '0 0.233rem 0.5rem rgba(0, 0, 0, 0.05)',
      2: '0 0.8rem 0.8rem rgba(0, 0, 0, 0.04)',
      3: '0 0.6rem 2rem 0.1rem rgba(0, 0, 0, 0.066)',
    },
    zIndices: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      zIndexAlert: 50,
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
    bt: (value: 1 | 2 | 3) => ({
      borderTop: `0.1rem solid rgba(0, 0, 0, ${value === 1 ? 0.15 : value === 2 ? 0.075 : 0.035})`,
    }),
    br: (value: 1 | 2 | 3) => ({
      borderRight: `0.1rem solid rgba(0, 0, 0, ${value === 1 ? 0.15 : value === 2 ? 0.075 : 0.035})`,
    }),
    bl: (value: 1 | 2 | 3) => ({
      borderLeft: `0.1rem solid rgba(0, 0, 0, ${value === 1 ? 0.15 : value === 2 ? 0.075 : 0.035})`,
    }),
    bb: (value: 1 | 2 | 3) => ({
      borderBottom: `0.1rem solid rgba(0, 0, 0, ${value === 1 ? 0.15 : value === 2 ? 0.075 : 0.035})`,
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
        display: 'auto',
      },
    }),
  },
});
