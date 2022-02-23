import { keyframes } from '@stitches/react';

import { breakpoints, styled } from '../../stitches.config';

export default function CookiesStyles() {
  const SoftAnimation = keyframes({
    '0%': {
      opacity: 1,
      display: 'block',
    },

    '100%': {
      opacity: 0,
      display: 'none',
    },
  });
  const Wrapper = styled('div', {
    position: 'fixed',
    transition: '$1',
    zIndex: '$cookies',
    bottom: '$4',
    left: 0,
    right: 0,
    maxWidth: '100%',
    margin: 'auto',
    textAlign: 'center',

    variants: {
      isExiting: {
        true: {
          animation: `${SoftAnimation} 0.5s forwards`,
        },
      },
    },

    svg: {
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: '$1',

      '&:hover': {
        opacity: 0.4,
      },
    },
    [breakpoints.phone]: {
      maxWidth: '95%',
    },
  });

  return {
    Wrapper,
  };
}
