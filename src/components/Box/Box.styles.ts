/** @format */

import { breakpoints, styled } from '../../stitches.config';

export const paddingVariants = {
  padding: {
    default: {
      padding: '$5',
      [breakpoints.phone]: {
        padding: '$4',
      },
    },
    none: {
      padding: 0,
    },
  },
};
export const BoxStyled = styled('div', {
  border: '0.1rem solid transparent',
  borderRadius: '$2',
  display: 'block',
  height: '100%',
  margin: 0,
  paddingBlock: 0,
  position: 'relative',
  transition: '$default',

  variants: {
    hover: {
      true: {
        '&:hover': {
          boxShadow: '$2',
        },
      },
    },
    loading: {
      true: {
        cursor: 'wait',
      },
    },

    theme: {
      default: {
        backgroundColor: 'transparent',
        borderColor: '$border',
      },
      error: {
        backgroundColor: '$redOverlay',
        borderColor: '$redBorder',
        color: '$redText',
      },
      fill: {
        backgroundColor: '$default',
      },
      success: {
        backgroundColor: '$greenOverlay',
        borderColor: '$greenBorder',
        color: '$greenText',
      },
      transparent: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
      warning: {
        backgroundColor: '$orangeOverlay',
        borderColor: '$orangeBorder',
        color: '$orangeText',
      },
    },
    ...paddingVariants,
  },

  width: 'auto',
});

export const BoxImageChildrenStyled = styled('div', {
  variants: {
    ...paddingVariants,
  },
});

export default BoxStyled;
