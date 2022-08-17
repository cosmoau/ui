import { breakpoints, styled } from '../../stitches.config';

export const ButtonStyled = styled('button', {
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
  '&:hover': {
    backgroundColor: '$defaultHover',
    color: '$text',
  },
  alignContent: 'center',
  alignItems: 'center',
  border: '0.1rem solid transparent',
  borderRadius: '$2',
  fontSize: '$h6',
  fontWeight: 400,
  lineHeight: '$h6',
  padding: '$1 $4',
  boxShadow: '$1',

  [breakpoints.phone]: {
    fontSize: '$p',
  },

  a: {
    display: 'block',
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
      false: {
        svg: {
          alignSelf: 'center',
          height: '1.8rem',
          marginTop: '-0.5rem',
          width: '1.8rem',
        },
      },
      true: {
        fontSize: '$small',

        svg: {
          alignSelf: 'center',
          height: '1.2rem',
          marginTop: '-0.15rem',
          width: '1.2rem',
        },
      },
    },
    theme: {
      border: {
        borderColor: '$border',
        boxShadow: '$1',
        color: '$text',
      },
      default: {
        background: '$default',
        color: '$text',
      },
      minimal: {
        background: 'transparent',
        boxShadow: 'none',
        color: '$text',
      },
      solid: {
        background: '$text',
        color: '$background',
      },
    },
  },

  verticalAlign: 'middle',
});

export const ButtonIconStyled = styled('span', {
  display: 'inline',
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
