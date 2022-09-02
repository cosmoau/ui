import { breakpoints, styled } from '../../stitches.config';

export const ButtonStyled = styled('button', {
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.75,
  },
  '&:hover': {
    backgroundColor: '$defaultHover',
    borderColor: '$borderHover',
    boxShadow: '$2',
    color: '$text',
  },
  a: {
    display: 'block',
  },
  alignContent: 'center',
  alignItems: 'center',
  border: '0.1rem solid $borderHover',
  borderRadius: '$1',
  boxShadow: '$1',

  color: '$text',
  display: 'inline-flex',
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

  padding: '$1 $4',

  svg: {
    alignSelf: 'center',
    height: '1.7rem',
    verticalAlign: 'middle',

    width: '1.7rem',
  },

  transition: '$default',

  variants: {
    block: {
      false: {
        display: 'inline',
      },
      true: {
        display: 'block',
        width: '100%',
      },
    },
    small: {
      true: {
        fontSize: '$p',
        fontWeight: '$p',
        lineHeight: '$p',

        [breakpoints.phone]: {
          fontSize: 'calc($p * 0.875)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($p * 0.9)',
        },
        [breakpoints.laptopX]: {
          fontSize: 'calc($p * 0.925)',
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

  verticalAlign: 'middle',
});

export const ButtonIconStyled = styled('span', {
  display: 'inline',
  svg: {
    marginTop: '-0.5rem',
  },
  variants: {
    align: {
      left: {
        marginRight: '$3',
      },
      right: {
        marginLeft: '$3',
      },
    },
  },
  verticalAlign: 'middle',
});

export default ButtonStyled;
