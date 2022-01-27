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
      dark100: 'rgb(4, 44, 63)',
      dark200: 'rgb(1, 8, 19)',
      dark300: 'rgba(4, 44, 63, 0.15)',
      dark400: 'rgba(4, 44, 63, 0.1)',
      light100: 'rgb(255, 255, 255)',
      light200: 'rgb(230, 240, 241)',
      light300: 'rgba(255, 255, 255, 0.2)',
      red100: 'rgb(165, 71, 65)',
      red200: 'rgb(249, 187, 183)',
      red300: 'rgb(241, 202, 202)',
      red400: 'rgba(165, 71, 65, 0.2)',
      yellow100: 'rgb(172, 113, 5)',
      yellow200: 'rgb(249, 221, 170)',
      yellow300: 'rgb(245, 226, 195)',
      yellow400: 'rgba(172, 113, 5, 0.2)',
      green100: 'rgb(8, 105, 112)',
      green200: 'rgb(162, 231, 236)',
      green300: 'rgb(195, 241, 245)',
      green400: 'rgba(8, 105, 112, 0.2)',
      blue100: 'rgb(5, 91, 141)',
      blue200: 'rgb(185, 210, 237)',
      blue300: 'rgb(206, 222, 240)',
      blue400: 'rgba(5, 91, 141, 0.2)',
      navy100: 'inherit',
      navy200: 'rgba(4, 44, 63, 0.17)',
      navy300: 'rgba(4, 44, 63, 0.1)',
      navy400: 'rgba(4, 44, 63, 0.05)',
      purple100: 'rgb(89, 33, 141)',
      purple200: 'rgb(219, 195, 244)',
      purple300: 'rgb(229, 212, 246)',
      purple400: 'rgba(89, 33, 141, 0.2)',
      pink100: 'rgb(107, 26, 83)',
      pink200: 'rgb(240, 195, 226)',
      pink300: 'rgb(245, 213, 235)',
      pink400: 'rgba(107, 26, 83, 0.2)',
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
      1: '0 0.2rem 0.1rem rgba(0, 0, 0, 0.01)',
      2: '0 0.4rem 0.4rem rgba(0, 0, 0, 0.05)',
      3: '0 0.6rem 0.6rem rgba(0, 0, 0, 0.075)',
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
        display: 'auto',
      },
    }),
  },
});
