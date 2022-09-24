/** @format */

import { styled } from '../../stitches.config';

export const ImageStyled = styled('div', {
  height: '100%',
  position: 'relative',
  transition: '$default',
  variants: {
    borderRadius: {
      1: {
        borderRadius: '$1 !important',
        img: {
          borderRadius: '$1 !important',
        },
      },
      2: {
        borderRadius: '$2 !important',
        img: {
          borderRadius: '$2 !important',
        },
      },
      3: {
        borderRadius: '$3 !important',
        img: {
          borderRadius: '$3 !important',
        },
      },
    },
    hover: {
      false: {
        '&:hover': {
          opacity: 1,
        },
      },
      true: {
        '&:hover': {
          opacity: 0.8,
        },
      },
    },
  },

  width: '100%',
});

export default ImageStyled;
