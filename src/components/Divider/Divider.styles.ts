import { styled } from '../../stitches.config';

export const DividerStyled = styled('hr', {
  // reset
  borderLeft: 'none',
  borderRight: 'none',
  borderTop: 'none',
  borderBottom: '0.1rem solid $border',
  margin: 0,
  padding: 0,
  backgroundColor: 'transparent',
});

export default DividerStyled;
