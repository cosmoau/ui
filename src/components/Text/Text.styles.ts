import { breakpoints, styled } from '../../stitches.config';

export const TextSizes = {
  h1: {
    fontFamily: '$serif',
    fontSize: '$h1',
    fontWeight: '$h1',
    lineHeight: '$h1',
    marginBottom: '$5',

    [breakpoints.phone]: {
      fontSize: 'calc($h1 * 0.85)',
    },
    [breakpoints.tabletX]: {
      fontSize: 'calc($h1 * 0.9)',
    },
    [breakpoints.laptopX]: {
      fontSize: 'calc($h1 * 0.95)',
    },
  },
  h2: {
    fontFamily: '$serif',
    fontSize: '$h2',
    fontWeight: '$h2',
    lineHeight: '$h2',
    marginBottom: '$5',

    [breakpoints.phone]: {
      fontSize: 'calc($h2 * 0.85)',
    },
    [breakpoints.tabletX]: {
      fontSize: 'calc($h2 * 0.9)',
    },
    [breakpoints.laptopX]: {
      fontSize: 'calc($h2 * 0.95)',
    },
  },
  h3: {
    fontFamily: '$serif',
    fontSize: '$h3',
    fontWeight: '$h3',
    lineHeight: '$h3',
    marginBottom: '$5',

    [breakpoints.phone]: {
      fontSize: 'calc($h3 * 0.85)',
    },
    [breakpoints.tabletX]: {
      fontSize: 'calc($h3 * 0.9)',
    },
    [breakpoints.laptopX]: {
      fontSize: 'calc($h3 * 0.95)',
    },
  },
  h4: {
    fontFamily: '$serif',
    fontSize: '$h4',
    fontWeight: '$h4',
    lineHeight: '$h4',
    marginBottom: '$4',

    [breakpoints.phone]: {
      fontSize: 'calc($h4 * 0.85)',
    },
    [breakpoints.tabletX]: {
      fontSize: 'calc($h4 * 0.9)',
    },
    [breakpoints.laptopX]: {
      fontSize: 'calc($h4 * 0.95)',
    },
  },
  h5: {
    fontSize: '$h5',
    fontWeight: '$h5',
    lineHeight: '$h5',
    marginBottom: '$3',

    [breakpoints.phone]: {
      fontSize: 'calc($h5 * 0.85)',
    },
    [breakpoints.tabletX]: {
      fontSize: 'calc($h5 * 0.9)',
    },
    [breakpoints.laptopX]: {
      fontSize: 'calc($h5 * 0.95)',
    },
  },
  h6: {
    fontSize: '$h6',
    fontWeight: '$h6',
    lineHeight: '$h6',
    marginBottom: '$3',

    [breakpoints.phone]: {
      fontSize: 'calc($h6 * 0.85)',
    },
    [breakpoints.tabletX]: {
      fontSize: 'calc($h6 * 0.9)',
    },
    [breakpoints.laptopX]: {
      fontSize: 'calc($h6 * 0.95)',
    },
  },
  li: {
    fontSize: '$p',
    fontWeight: '$p',
    lineHeight: '$p',
    listStylePosition: 'inside',
    marginBottom: '$3',

    [breakpoints.phone]: {
      fontSize: 'calc($p * 0.85)',
    },
    [breakpoints.tabletX]: {
      fontSize: 'calc($p * 0.9)',
    },
    [breakpoints.laptopX]: {
      fontSize: 'calc($p * 0.95)',
    },
  },
  ol: {
    fontSize: '$p',
    fontWeight: '$p',
    lineHeight: '$p',

    [breakpoints.phone]: {
      fontSize: 'calc($p * 0.85)',
    },
    [breakpoints.tabletX]: {
      fontSize: 'calc($p * 0.9)',
    },
    [breakpoints.laptopX]: {
      fontSize: 'calc($p * 0.95)',
    },
  },
  p: {
    fontSize: '$p',
    fontWeight: '$p',
    lineHeight: '$p',
    marginBottom: '$3',

    [breakpoints.phone]: {
      fontSize: 'calc($p * 0.85)',
    },
    [breakpoints.tabletX]: {
      fontSize: 'calc($p * 0.9)',
    },
    [breakpoints.laptopX]: {
      fontSize: 'calc($p * 0.95)',
    },
  },
  small: {
    display: 'block',
    fontSize: '$small',
    fontWeight: '$small',
    lineHeight: '$small',
    marginBottom: '$3',

    [breakpoints.phone]: {
      fontSize: 'calc($small * 0.85)',
    },
    [breakpoints.tabletX]: {
      fontSize: 'calc($small * 0.9)',
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
  ul: {
    fontSize: '$p',
    fontWeight: '$p',
    lineHeight: '$p',

    [breakpoints.phone]: {
      fontSize: 'calc($p * 0.85)',
    },
    [breakpoints.tabletX]: {
      fontSize: 'calc($p * 0.9)',
    },
    [breakpoints.laptopX]: {
      fontSize: 'calc($p * 0.95)',
    },
  },
};

export const TextStyled = styled('div', {
  '&:last-child': {
    marginBottom: '0 !important',
  },
  'color': '$text',
  'variants': {
    accent: {
      true: {
        color: '$accent',
      },
    },
    bold: {
      true: {
        fontWeight: 'bold',
      },
    },
    size: TextSizes,
  },
});

export default TextStyled;
