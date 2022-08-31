import { breakpoints, styled } from '../../stitches.config';

export const StackRowStyled = styled('div', {
  '*': {
    boxSizing: 'border-box',
  },
  display: 'flex',
  flexDirection: 'row',
  flexFlow: 'row wrap',
  maxWidth: '100%',
  minWidth: '100%',
  width: '100%',
});

export const StackColumnStyled = styled('div', {
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingLeft: '$4',
  paddingRight: '$4',
  width: '100%',

  [breakpoints.tablet]: {
    paddingLeft: '$3',
    paddingRight: '$3',
  },
});

export const StackElementStyled = styled('div', {
  marginBlockEnd: 0,
  marginBlockStart: 0,

  variants: {
    flexduo: {
      true: {
        '*': {
          alignSelf: 'center',
          marginBottom: '0 !important',
          marginTop: '0 !important',
          verticalAlign: 'middle',
        },
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        verticalAlign: 'middle',
      },
    },
  },
});

export default StackColumnStyled;
