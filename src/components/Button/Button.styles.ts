import { styled } from '../../stitches.config';

export const ButtonStyled = styled('button', {
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.75,
  },
  '&:hover': {
    borderColor: '$borderHover',
    boxShadow: '$2',
    backgroundColor: '$defaultHover',
    color: '$text',
  },
  alignContent: 'center',
  alignItems: 'center',
  border: '0.1rem solid $borderHover',
  borderRadius: '$1',
  fontSize: '1.6rem',
  display: 'inline-flex',
  lineHeight: 'normal',
  padding: '$1 $4',
  boxShadow: '$1',
  color: '$text',

  svg: {
    alignSelf: 'center',
    height: '1.7rem',
    verticalAlign: 'middle',

    width: '1.7rem',
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
      true: {
        fontSize: '$p',
      },
    },
    theme: {
      default: {
        boxShadow: '$1',
      },
      fill: {
        backgroundColor: '$default',
      },
      minimal: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        borderColor: 'transparent',
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
