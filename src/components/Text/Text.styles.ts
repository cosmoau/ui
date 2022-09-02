import { breakpoints, styled } from '../../stitches.config';

export const TextStyled = styled('div', {
  '&:last-child': {
    marginBottom: `${0}!important`,
  },
  color: 'inherit',
  display: 'block',
  variants: {
    accent: {
      true: {
        color: '$accent',
      },
    },
    bold: {
      true: {
        fontWeight: 'bold !important',
      },
    },
    size: {
      h1: {
        '&:not(:last-child)': {
          marginBottom: '$5',
        },
        fontSize: '$h1',
        fontWeight: '$h1',
        lineHeight: '$h1',
        fontFamily: '$serif',

        [breakpoints.phone]: {
          fontSize: 'calc($h1 * 0.8)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h1 * 0.9)',
        },
        [breakpoints.laptopX]: {
          fontSize: 'calc($h1 * 0.95)',
        },
      },
      h2: {
        '&:not(:last-child)': {
          marginBottom: '$5',
        },
        fontSize: '$h2',
        fontWeight: '$h2',
        lineHeight: '$h2',
        fontFamily: '$serif',

        [breakpoints.phone]: {
          fontSize: 'calc($h2 * 0.8)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h2 * 0.9)',
        },
        [breakpoints.laptopX]: {
          fontSize: 'calc($h2 * 0.95)',
        },
      },
      h3: {
        '&:not(:last-child)': {
          marginBottom: '$5',
        },
        fontSize: '$h3',
        fontWeight: '$h3',
        lineHeight: '$h3',
        fontFamily: '$serif',

        [breakpoints.phone]: {
          fontSize: 'calc($h3 * 0.925)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h3 * 0.95)',
        },
        [breakpoints.laptopX]: {
          fontSize: 'calc($h3 * 0.975)',
        },
      },
      h4: {
        '&:not(:last-child)': {
          marginBottom: '$4',
        },
        fontSize: '$h4',
        fontWeight: '$h4',
        lineHeight: '$h4',

        [breakpoints.phone]: {
          fontSize: 'calc($h4 * 0.85)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h4 * 0.875)',
        },
        [breakpoints.laptopX]: {
          fontSize: 'calc($h4 * 0.9)',
        },
      },
      h5: {
        '&:not(:last-child)': {
          marginBottom: '$4',
        },
        fontSize: '$h5',
        fontWeight: '$h5',
        lineHeight: '$h5',

        [breakpoints.phone]: {
          fontSize: 'calc($h5 * 0.85)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h5 * 0.875)',
        },
        [breakpoints.laptopX]: {
          fontSize: 'calc($h5 * 0.9)',
        },
      },
      h6: {
        '&:not(:last-child)': {
          marginBottom: '$4',
        },
        color: '$accent',
        fontSize: '$h6',
        fontWeight: '$h6',
        lineHeight: '$h6',

        [breakpoints.phone]: {
          fontSize: 'calc($h6 * 0.9)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h6 * 0.925)',
        },
        [breakpoints.laptopX]: {
          fontSize: 'calc($h6 * 0.95)',
        },
      },
      p: {
        '&:not(:last-child)': {
          marginBottom: '$4',
        },
        fontSize: '$p',
        fontWeight: '$p',
        lineHeight: '$p',
        opacity: '0.85',
        color: '$accent',

        [breakpoints.phone]: {
          fontSize: 'calc($p * 0.9)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($p * 0.925)',
        },
        [breakpoints.laptopX]: {
          fontSize: 'calc($p * 0.95)',
        },
      },
      small: {
        '&:not(:last-child)': {
          marginBottom: '$4',
        },
        fontSize: '$small',
        fontWeight: '$small',
        lineHeight: '$small',
        color: '$accent',

        [breakpoints.phone]: {
          fontSize: 'calc($small * 0.9)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($small * 0.925)',
        },
        [breakpoints.laptopX]: {
          fontSize: 'calc($small * 0.95)',
        },
      },
      span: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        lineHeight: 'inherit',
      },
    },
  },
});

export default TextStyled;
