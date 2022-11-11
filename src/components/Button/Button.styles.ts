import { breakpoints, styled } from '../../stitches.config';

export const ButtonStyled = styled('button', {
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.7,
  },
  '&:hover': {
    backgroundColor: '$defaultHover',
    borderColor: '$borderHover',
    boxShadow: '$2',
    color: '$text',
  },
  'a': {
    display: 'block',
  },
  'alignContent': 'center',
  'alignItems': 'center',
  'border': '0.1rem solid $borderHover',
  'borderRadius': '$1',
  'boxShadow': '$1',
  'color': '$text',
  'display': 'inline',
  'fontSize': '$h5',
  'fontWeight': '$h5',
  'justifyContent': 'center',
  'lineHeight': '1.4 !important',

  [breakpoints.phone]: {
    fontSize: 'calc($h5 * 0.85)',
  },
  [breakpoints.tabletX]: {
    fontSize: 'calc($h5 * 0.9)',
  },
  [breakpoints.laptopX]: {
    fontSize: 'calc($h5 * 0.95)',
  },

  'padding': '$1 $4',
  'svg': {
    height: '1.75rem',
    marginTop: '-0.075rem',
    width: '1.75rem',
  },

  'transition': '$default',

  'variants': {
    block: {
      true: {
        display: 'block',
        width: '100%',
      },
    },
    small: {
      true: {
        fontSize: '$h6',
        fontWeight: '$h6',
        lineHeight: '1.4 !important',

        [breakpoints.phone]: {
          fontSize: 'calc($h6 * 0.9)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h6 * 0.925)',
        },
        [breakpoints.laptopX]: {
          fontSize: 'calc($h6 * 0.95)',
        },

        svg: {
          height: '1.5rem',
          marginTop: '-0.1rem',
          width: '1.5rem',
        },
      },
    },
    theme: {
      default: {
        borderColor: '$border',
      },
      fill: {
        backgroundColor: '$default',
      },
      minimal: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
      },
      solid: {
        backgroundColor: '$text',
        color: '$background',
      },
    },
  },

  'verticalAlign': 'middle',
});

export const ButtonIconStyled = styled('span', {
  alignContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  display: 'inline-flex',
  justifyContent: 'center',
  variants: {
    align: {
      left: {
        marginRight: '$2',
      },
      right: {
        marginLeft: '$2',
      },
    },
  },

  verticalAlign: 'middle',
});

export default ButtonStyled;
