import { breakpoints, styled, keyframes } from '../../stitches.config';

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
  fontSize: '$h6',
  fontWeight: 'normal',
  justifyContent: 'center',
  lineHeight: 'normal',
  padding: '$1 $4',

  variants: {
    theme: {
      blue: {
        background: '$blueOverlay',
        color: '$blueText',
      },
      border: {
        border: '0.1rem solid $border',
        color: '$text',
      },
      borderHover: {
        border: '0.1rem solid $borderHover',
        color: '$text',
      },
      default: {
        background: '$default',
        color: '$text',
      },
      green: {
        background: '$greenOverlay',
        color: '$greenText',
      },
      orange: {
        background: '$orangeOverlay',
        color: '$orangeText',
      },
      pink: {
        background: '$pinkOverlay',
        color: '$pinkText',
      },
      purple: {
        background: '$purpleOverlay',
        color: '$purpleText',
      },
      red: {
        background: '$redOverlay',
        color: '$redText',
      },
    },
  },

  [breakpoints.phone]: {
    fontSize: 'calc($h6 * 0.9)',
  },

  verticalAlign: 'middle',
});

export const BadgeIconStyled = styled('span', {
  display: 'inline-block',
  svg: {
    alignSelf: 'center',
    height: '1.5rem',
    marginTop: '-0.2rem',
    width: '1.5rem',
  },
  variants: {
    align: {
      left: {
        marginRight: '$2',
      },
      right: {
        marginLeft: '$2',
      },
    },
  },
  verticalAlign: 'middle',
});

export const BadgeDotStyled = styled('span', {
  display: 'inline',
  paddingRight: '$2',
  svg: {
    alignSelf: 'center',
    height: '0.9rem',
    marginTop: '-0.2rem',
    width: '0.9rem',
  },
  variants: {
    dotColor: {
      blue: {
        color: '$blueText',
      },
      borderHover: {
        color: '$borderHover',
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
