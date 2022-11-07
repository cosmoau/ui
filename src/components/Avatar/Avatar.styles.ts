import { styled } from '../../stitches.config';

export const AvatarStyled = styled('div', {
  alignItems: 'center',
  borderRadius: '100%',
  display: 'inline-flex',
  justifyContent: 'center',
  overflow: 'hidden',
  position: 'relative',
  userSelect: 'none',
});

export const AvatarImageStyled = styled('div', {
  borderRadius: '100% !important',
  height: '100%',
  img: {
    borderRadius: '100% !important',
  },
  position: 'relative',

  width: '100%',
});

export const AvatarFallbackStyled = styled('div', {
  alignItems: 'center',
  backgroundColor: '$default',
  color: '$text',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
});

export default AvatarStyled;
