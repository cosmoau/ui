import { styled } from '../../stitches.config';
import { TextSizes } from '../Text/Text.styles';

export const ButtonStyled = styled('button', {
  ...TextSizes.h6,

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.7,
  },
  '&:hover': {
    backgroundColor: '$defaultHover',
    borderColor: '$border',
    boxShadow: '$2',
    color: '$text',
  },
  'a': {
    display: 'block',
  },
  'alignContent': 'center',

  'alignItems': 'center',
  'border': '0.1rem solid $border',
  'borderRadius': '$1',
  'boxShadow': '$1',
  'color': '$text',
  'display': 'inline',
  'justifyContent': 'center',
  'padding': '$1 $4',
  'svg': {
    height: '1.8rem',
    marginTop: '-0.06rem',
    width: '1.8rem',
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
        ...TextSizes.small,

        svg: {
          height: '1.5rem',
          marginTop: '-0.1rem',
          width: '1.5rem',
        },
      },
    },
    theme: {
      default: {
        backgroundColor: 'transparent',
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
