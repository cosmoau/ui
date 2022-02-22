import { keyframes } from '@stitches/react';

import { styled } from '../../stitches.config';

export default function TooltipStyles() {
  const SoftAnimation = keyframes({
    '0%': {
      opacity: 0,
    },

    '100%': {
      opacity: 1,
    },
  });
  const Wrapper = styled('div', {
    position: 'relative',
    display: 'flex',
    flex: 1,
  });

  const TriggerWrapper = styled('div', {
    display: 'inline-block',
    position: 'relative',
  });

  const ContentWrapper = styled('div', {
    transition: '$1',
    borderRadius: '$2',
    background: '$baseContrast100',
    border: '0.1rem solid $border100',
    boxShadow: '$3',
    position: 'absolute',
    top: '120%',
    padding: '$2 $3',
    width: 'max-content',
    maxWidth: '30rem',
    overflowY: 'auto',
    wordBreak: 'break-word',
    lineBreak: 'auto',
    whiteSpace: 'pre-wrap',
    maxHeight: '30rem',
    zIndex: '$tooltip',
    webkitoverflowscrolling: 'touch',

    variants: {
      animation: {
        false: {
          animation: 'none',
        },
        true: {
          animation: `${SoftAnimation} .3s`,
        },
      },
    },
  });

  return {
    Wrapper,
    TriggerWrapper,
    ContentWrapper,
  };
}
