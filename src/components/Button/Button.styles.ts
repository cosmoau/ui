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
  fontSize: '1.6rem',
  fontWeight: 500,
  lineHeight: 'normal',
  padding: '$2 $4',

  [breakpoints.phone]: {
    fontSize: '$p',
  },

  transition: '$default',

  variants: {
    block: {
      false: {
        display: 'inline-flex',
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
          height: '1.6rem',
          marginTop: '-0.3rem',
          width: '1.6rem',
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
