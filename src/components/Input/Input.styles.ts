import { styled } from '../../stitches.config';

export const InputStyled = styled('div', {
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

export const InputAreaStyled = styled('input', {
  '&:focus': {
    outline: 'none',
  },
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  color: '$text',
  fontFamily: '$default !important',
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
    paddingBottom: '$1',
    paddingLeft: '$3',
    paddingRight: '$3',
    paddingTop: '$1',
  },
  display: 'inline-flex',
  height: '100%',
  marginLeft: '$3',
  position: 'relative',
  svg: {
    height: '1.8rem',
    marginTop: '-0.1rem',
    verticalAlign: 'middle',
    width: '1.8rem',
  },
  verticalAlign: 'middle',
  width: 'auto',
});

export default InputStyled;
