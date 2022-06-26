import { styled } from '../../stitches.config';

export const paddingVariants = {
  padding: {
    default: {
      padding: '$4 $5',
    },
    none: {
      padding: 0,
    },
  },
};
export const BoxStyled = styled('div', {
  border: '0.1rem solid transparent',
  borderRadius: '$1',
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
      border: {
        background: 'transparent',
        borderColor: '$border',
      },
      default: {
        background: '$default',
      },
      error: {
        background: '$redOverlay',
        color: '$redText',
      },
      success: {
        background: '$greenOverlay',
        color: '$greenText',
      },
      transparent: {
        background: 'transparent',
        borderColor: 'transparent',
      },
      warning: {
        background: '$orangeOverlay',
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
