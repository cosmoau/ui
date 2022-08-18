import { styled } from '../../stitches.config';

export const CodeStyled = styled('div', {
  alignContent: 'center',
  alignSelf: 'center',
  borderRadius: '$1',
  height: '100%',
  position: 'relative',
  transition: '$default',
  width: '100%',
});

export const CodeFunctionStyled = styled('div', {});

export const CodeBlockStyled = styled('pre', {
  fontFamily: 'monospace',
  lineBreak: 'auto',
  margin: '$2 0',
  maxWidth: '80%',
  overflow: 'auto',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
});

export default CodeStyled;
