import { keyframes } from '@stitches/react';

import { breakpoints, styled } from '../../stitches.config';

export default function DialogStyles() {
  const SoftAnimation = keyframes({
    '0%': {
      opacity: 0,
    },

    '100%': {
      opacity: 1,
    },
  });

  const Wrapper = styled('div', {
    position: 'initial',
  });

  const TriggerWrapper = styled('div', {
    display: 'inline-flex',
  });

  const OverlayWrapper = styled('div', {
    position: 'fixed',
    transition: '$1',
    zIndex: '$alert',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '$base300',
    width: '100%',
    scrollBehavior: 'smooth',
    overscrollBehavior: 'contain',
    overflowY: 'scroll',

    variants: {
      animation: {
        false: {
          animation: 'none',
        },
        true: {
          animation: `${SoftAnimation} .6s`,
        },
      },
    },
  });

  const CardWrapper = styled('div', {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70rem',
    maxWidth: '90vw',
    maxHeight: '80vh',
    boxShadow: '$3',
    transition: '$1',

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

    [breakpoints.phone]: {
      width: '95%',
      maxWidth: '95%',
      maxHeight: '95vh',
    },
  });

  const Exit = styled('div', {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '1rem',
    cursor: 'pointer',
    zIndex: '$alert',
  });

  const CardActionsWrapper = styled('div', {
    paddingTop: '$6',
    textAlign: 'right',
  });

  const CardPrimaryActionwrapper = styled('div', {
    display: 'inline-block',
  });
  return { Wrapper, TriggerWrapper, OverlayWrapper, CardWrapper, Exit, CardActionsWrapper, CardPrimaryActionwrapper };
}
