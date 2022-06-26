import { styled } from '../../stitches.config';

export const FieldStyled = styled('div', {
  '&:focus-within': {
    boxShadow: '$2',
  },
  '&:hover': {
    boxShadow: '$2',
  },
  '*': {
    verticalAlign: 'middle',
  },
  alignContent: 'center',
  alignSelf: 'center',
  borderRadius: '$1',

  justifyContent: 'center',

  position: 'relative',
  transition: '$default',
  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },
    },
    state: {
      default: {
        border: '0.1rem solid $border',
      },
      error: {
        border: '0.2rem solid $redOverlay',
      },
      success: {
        border: '0.2rem solid $greenOverlay',
      },
      warning: {
        border: '0.2rem solid $orangeOverlay',
      },
    },
  },
  width: '100%',
});

export const FieldAreaStyled = styled('textarea', {
  '&:after': {
    clear: 'both',
    content: '""',
  },
  '&:focus': {
    outline: 'none',
  },
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  color: '$text',
  display: 'block',
  fontFamily: '$default !important',
  fontSize: '16px !important',
  margin: '0 auto',
  padding: '$3 $4',
  width: '100%',
});

export const FieldFunctionStyled = styled('div', {
  borderBottom: '0.1rem solid $border',
  button: {
    fontSize: '$p',
    marginLeft: '$2',
    paddingBottom: '$1',
    paddingLeft: '$3',
    paddingRight: '$3',
    paddingTop: '$1',
  },
  height: '100%',
  padding: '$2 $4',
  position: 'relative',
  svg: {
    height: '1.8rem',
    marginTop: '-0.1rem',
    verticalAlign: 'middle',
    width: '1.8rem',
  },
  verticalAlign: 'middle',
  width: '100%',
});
