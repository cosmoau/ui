import { styled } from '../../stitches.config';
import { TextSizes } from '../Text/Text.styles';

export const ButtonStyled = styled('button', {
  ...TextSizes.h6,
  '&::-moz-focus-inner': {
    border: 0,
    outline: 0,
    outlineOffset: 0,
    padding: 0,
  },

  '&:active': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.7,
  },
  '&:focus': {
    outline: 0,
  },

  '&:hover': {
    backgroundColor: '$defaultHover',
    borderColor: '$border',
    boxShadow: '$2',
    color: '$text',
  },

  'a': {
    display: 'block',
    height: '100%',
    width: '100%',
  },

  'alignContent': 'center',
  'alignItems': 'center',
  'appearance': 'none',
  'border': '0.1rem solid $border',
  'borderRadius': '$1',
  'boxShadow': '$1',
  'color': '$text',
  'cursor': 'pointer',
  'display': 'inline',
  'fontFamily': '$default',
  'justifyContent': 'center',
  'margin': 0,
  'marginBottom': '0 !important',
  'outline': 'none',
  'padding': '$1 $4',
  'svg': {
    height: '1.8rem',
    marginTop: '-0.3rem',
    width: '1.8rem',
  },
  'textOverflow': 'ellipsis',
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
        marginBottom: '0 !important',

        svg: {
          height: '1.6rem',
          marginTop: '-0.25rem',
          width: '1.6rem',
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

  'whiteSpace': 'nowrap',

  'width': 'auto',
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
