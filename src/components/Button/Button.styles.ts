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
  svg: {
    alignSelf: 'center',
    height: '1.8rem',
    marginTop: '-0.3rem',
    width: '1.8rem',
  },

  [breakpoints.phone]: {
    fontSize: '$p',
  },

  transition: '$default',

  variants: {
    block: {
      false: {
        display: 'inline-block',
      },
      true: {
        display: 'block',
        width: '100%',
      },
    },
    small: {
      true: {
        fontSize: '$small',
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
  display: 'inline-flex',
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
