import { breakpoints, styled } from '../../stitches.config';

export const TextStyled = styled('div', {
  '&:last-child': {
    marginBottom: `${0}!important`,
  },
  'color': 'inherit',
  'display': 'block',
  'lineHeight': 'normal !important',
  'variants': {
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
        'fontFamily': '$serif',
        'fontSize': '$h1',
        'fontWeight': '$h1',

        [breakpoints.phone]: {
          fontSize: 'calc($h1 * 0.85)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h1 * 0.95)',
        },
      },
      h2: {
        '&:not(:last-child)': {
          marginBottom: '$5',
        },
        'fontFamily': '$serif',
        'fontSize': '$h2',

        'fontWeight': '$h2',

        [breakpoints.phone]: {
          fontSize: 'calc($h2 * 0.85)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h2 * 0.95)',
        },
      },
      h3: {
        '&:not(:last-child)': {
          marginBottom: '$5',
        },
        'fontFamily': '$serif',
        'fontSize': '$h3',

        'fontWeight': '$h3',

        [breakpoints.phone]: {
          fontSize: 'calc($h3 * 0.85)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h3 * 0.95)',
        },
      },
      h4: {
        '&:not(:last-child)': {
          marginBottom: '$4',
        },
        'fontSize': '$h4',
        'fontWeight': '$h4',
        'letterSpacing': '0.01em',

        [breakpoints.phone]: {
          fontSize: 'calc($h4 * 0.9)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h4 * 0.95)',
        },
      },
      h5: {
        '&:not(:last-child)': {
          marginBottom: '$4',
        },
        'fontSize': '$h5',
        'fontWeight': '$h5',
        'lineHeight': '1.35 !important',

        [breakpoints.phone]: {
          fontSize: 'calc($h5 * 0.925)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h5 * 0.95)',
        },
      },
      h6: {
        '&:not(:last-child)': {
          marginBottom: '$4',
        },
        'fontSize': '$h6',
        'fontWeight': '$h6',
        'lineHeight': '1.35 !important',

        [breakpoints.phone]: {
          fontSize: 'calc($h6 * 0.925)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h6 * 0.95)',
        },
      },
      p: {
        '&:not(:last-child)': {
          marginBottom: '$4',
        },
        'fontSize': '$p',
        'fontWeight': '$p',
        'lineHeight': '1.3 !important',

        [breakpoints.phone]: {
          fontSize: 'calc($p * 0.925)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($p * 0.95)',
        },
      },
      small: {
        '&:not(:last-child)': {
          marginBottom: '$4',
        },
        'fontSize': '$small',
        'fontWeight': '$small',
        'lineHeight': '1.3 !important',

        [breakpoints.phone]: {
          fontSize: 'calc($small * 0.925)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($small * 0.95)',
        },
      },
      span: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
      },
    },
  },
});

export default TextStyled;
