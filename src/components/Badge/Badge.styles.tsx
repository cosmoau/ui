import { keyframes } from '@stitches/react';

import { styled } from '../../stitches.config';

export default function BadgeStyles() {
  const pulseAnimation = keyframes({
    '0%': {
      opacity: 0.5,
      transform: 'scale(0.95)',
    },
    '50%': {
      opacity: 1,
      transform: 'scale(1)',
    },
    '100%': {
      opacity: 0.5,
      transform: 'scale(0.95)',
    },
  });

  const Wrapper = styled('div', {
    textAlign: 'center',
    verticalAlign: 'middle',
    position: 'relative',
    transition: '$1',
    padding: '$2 calc($4 / 1.5)',
    borderRadius: '$3',
    ft: '$h6',
    variants: {
      theme: {
        default: {
          backgroundColor: '$baseContrast100',
          color: '$base100',
        },
        red: {
          backgroundColor: '$red300',
          color: '$red100',
        },
        yellow: {
          backgroundColor: '$yellow300',
          color: '$yellow100',
        },
        green: {
          backgroundColor: '$green300',
          color: '$green100',
        },
        blue: {
          backgroundColor: '$blue300',
          color: '$blue100',
        },
        navy: {
          backgroundColor: '$navy300',
          color: '$navy100',
        },
        purple: {
          backgroundColor: '$purple300',
          color: '$purple100',
        },
        pink: {
          backgroundColor: '$pink300',
          color: '$pink100',
        },
        border: {
          backgroundColor: '$baseContrast100',
          color: '$base100',
          border: '0.1rem solid $border200',
        },
      },
      inline: {
        false: {
          display: 'block',
        },
        true: {
          display: 'inline-block',
        },
      },
      inlineSpacer: {
        default: {
          marginRight: '0',
        },
        1: {
          marginRight: '$1',
        },
        2: {
          marginRight: '$2',
        },
        3: {
          marginRight: '$3',
        },
        4: {
          marginRight: '$4',
        },
        5: {
          marginRight: '$5',
        },
        6: {
          marginRight: '$6',
        },
      },

      shadow: {
        false: {
          boxShadow: 'none',
        },
        true: {
          boxShadow: '$2',
        },
      },
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'wait',
    },
  });

  const PulseWrapper = styled('div', {
    animation: `${pulseAnimation} 1.5s infinite`,
    display: 'inline-flex',
    verticalAlign: 'middle',
    marginRight: '$1',
    variants: {
      dotColor: {
        default: {
          color: 'inherit',
        },
        red: {
          color: '$red100',
        },
        yellow: {
          color: '$yellow100',
        },
        green: {
          color: '$green100',
        },
        blue: {
          color: '$blue100',
        },
        navy: {
          color: '$navy100',
        },
        purple: {
          color: '$purple100',
        },
        pink: {
          color: '$pink100',
        },
      },
    },
  });

  return {
    Wrapper,
    PulseWrapper,
  };
}
