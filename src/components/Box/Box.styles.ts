import { styled } from '../../stitches.config';

export const paddingVariants = {
  padding: {
    default: {
      padding: '$5',
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
        borderColor: '$redBorder',
        backgroundColor: '$redOverlay',
        color: '$redText',
      },
      fill: {
        backgroundColor: '$default',
      },
      success: {
        backgroundColor: '$greenOverlay',
        color: '$greenText',
        borderColor: '$greenBorder',
      },
      transparent: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
      warning: {
        backgroundColor: '$orangeOverlay',
        color: '$orangeText',
        borderColor: '$orangeBorder',
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
