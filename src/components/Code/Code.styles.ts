import { styled } from '../../stitches.config';

export const CodeStyled = styled('div', {
  alignContent: 'center',
  alignSelf: 'center',
  borderRadius: '$1',
  code: {
    width: '80%',
  },
  height: '100%',
  position: 'relative',
  transition: '$default',

  width: '100%',
});

export const CodeFunctionStyled = styled('div', {
  position: 'absolute',
  right: '$2',
  top: '$2',
});

export const CodeBlockStyled = styled('code', {
  fontFamily: '$default',
  lineBreak: 'auto',
  maxWidth: '100%',

  pre: {
    fontFamily: '$default',
    lineBreak: 'auto',
    maxWidth: '100%',
  },
});

export default CodeStyled;
