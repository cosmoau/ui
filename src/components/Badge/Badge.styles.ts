import { styled, keyframes, fadeOut } from '../../stitches.config';
import { TextSizes } from '../Text/Text.styles';

const pulse = keyframes({
  '0%': {
    opacity: 0.5,
    transform: 'scale(0.95)',
  },
  '100%': {
    opacity: 0.5,
    transform: 'scale(0.95)',
  },
  '50%': {
    opacity: 1,
    transform: 'scale(1)',
  },
});

export const BadgeStyled = styled('div', {
  alignItems: 'center',
  borderRadius: '$3',
  display: 'inline-flex',
  justifyContent: 'center',
  padding: '$1 $4',
  ...TextSizes.p,
  marginBottom: '0 !important',

  svg: {
    height: '1.8rem',
    marginTop: '-0.25rem',
    width: '1.8rem',
  },
  variants: {
    animation: {
      true: {
        animation: `${fadeOut} .25s linear`,
        animationFillMode: 'forwards',
      },
    },
    theme: {
      blue: {
        backgroundColor: '$blueOverlay',
        color: '$blueText',
      },
      border: {
        border: '0.1rem solid $border',
        color: '$text',
      },
      default: {
        backgroundColor: '$default',
        color: '$text',
      },
      green: {
        backgroundColor: '$greenOverlay',
        color: '$greenText',
      },
      orange: {
        backgroundColor: '$orangeOverlay',
        color: '$orangeText',
      },
      pink: {
        backgroundColor: '$pinkOverlay',
        color: '$pinkText',
      },
      purple: {
        backgroundColor: '$purpleOverlay',
        color: '$purpleText',
      },
      red: {
        backgroundColor: '$redOverlay',
        color: '$redText',
      },
    },
  },

  verticalAlign: 'middle',
});

export const BadgeIconStyled = styled('span', {
  display: 'inline',
  variants: {
    align: {
      left: {
        marginRight: '$3',
      },
      right: {
        marginLeft: '$3',
      },
    },
  },
  verticalAlign: 'middle',
});

export const BadgeLoadingStyled = styled('span', {
  display: 'inline',
  svg: {
    marginTop: '-0.4rem',
    verticalAlign: 'middle',
  },
  verticalAlign: 'middle',
});

export const BadgeDotStyled = styled('span', {
  display: 'inline',
  paddingRight: '$2',

  svg: {
    height: '1rem',
    marginTop: '-0.2rem',
    verticalAlign: 'middle',
    width: '1rem',
  },

  variants: {
    dotColor: {
      blue: {
        color: '$blueText',
      },
      border: {
        color: '$border',
      },
      default: {
        color: '$text',
      },
      green: {
        color: '$greenText',
      },
      orange: {
        color: '$orangeText',
      },
      pink: {
        color: '$pinkText',
      },
      purple: {
        color: '$purpleText',
      },
      red: {
        color: '$redText',
      },
    },
    pulse: {
      true: {
        animation: `${pulse} 1.5s infinite`,
      },
    },
  },
  verticalAlign: 'middle',
});

export default BadgeStyled;
