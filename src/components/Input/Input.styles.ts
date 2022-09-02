import { styled } from '../../stitches.config';

export const InputStyled = styled('div', {
  position: 'relative',
});
export const InputCoreStyled = styled('div', {
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
  display: 'inline-flex',
  justifyContent: 'center',
  padding: '$2 $4',
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
        border: '0.1rem solid $redOverlay',
      },
      success: {
        border: '0.1rem solid $greenOverlay',
      },
      warning: {
        border: '0.1rem solid $orangeOverlay',
      },
    },
  },
  width: '100%',
});

export const InputAreaStyled = styled('input', {
  '&:focus': {
    outline: 'none',
  },
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  color: '$text',
  fontFamily: '$sans !important',
  fontSize: '16px !important',
  letterSpacing: '0',
  lineHeight: 'normal',
  margin: '0',
  minHeight: '2.4rem',
  outline: 'none',
  padding: '0',
  textAlign: 'left',
  transition: '$default',
  width: '100%',
});

export const InputFunctionStyled = styled('div', {
  button: {
    fontSize: '$p',
    marginLeft: '$2',
  },
  display: 'inline-flex',
  height: '100%',
  marginLeft: '$3',
  position: 'relative',

  verticalAlign: 'middle',
  width: 'auto',
});

export const InputCallbackStyled = styled('div', {
  display: 'block',
  paddingTop: '$2',
});

export default InputStyled;
