import { styled } from '../../stitches.config';

export const ImageStyled = styled('div', {
  border: '0.1rem solid transparent',
  height: '100%',
  img: {
    height: '100%',
  },
  position: 'relative',
  transition: '$default',

  width: '100%',
});

export default ImageStyled;
