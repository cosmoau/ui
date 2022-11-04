import { breakpoints, fadeIn, fadeOut, styled } from '../../stitches.config';

export const DialogStyled = styled('div', {
  display: 'inline-block',
  position: 'relative',
  verticalAlign: 'middle',
});

export const DialogTriggerStyled = styled('div', {
  '*': {
    cursor: 'pointer',
  },
  'display': 'inline-flex',
  'position': 'relative',
  'verticalAlign': 'middle',
});

export const DialogOverlayStyled = styled('div', {
  backgroundColor: 'rgba(116, 116, 121, 0.4)',
  bottom: 0,
  left: 0,
  minWidth: '100vw',
  overflowY: 'scroll',
  position: 'fixed',
  right: 0,
  top: 0,
  transition: '$default',
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .3s ease-in-out`,
        animationFillMode: 'forwards',
      },
      true: {
        animation: `${fadeIn} .15s ease-in-out`,
        animationFillMode: 'forwards',
      },
    },
  },
  width: '100%',
  zIndex: '$dialog',
});

export const DialogContentStyled = styled('div', {
  backgroundColor: '$background',
  borderRadius: '$2',
  left: '50%',
  maxHeight: '80vh',
  maxWidth: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  padding: '$6 $5',
  position: 'fixed',
  textAlign: 'left',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  transition: '$default',
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .4s ease-in-out`,
        animationFillMode: 'forwards',
      },
      true: {
        animation: `${fadeIn} .4s ease-in-out`,
        animationFillMode: 'forwards',
      },
    },
  },

  width: '70rem',

  [breakpoints.phone]: {
    maxHeight: '95vh',
    maxWidth: '90%',
    padding: '5',
    width: '90%',
  },
});

export const DialogExitStyled = styled('div', {
  '&:hover': {
    opacity: 1,
  },
  'cursor': 'pointer',
  'opacity': 0.7,
  'padding': '1rem',
  'position': 'absolute',
  'right': 0,
  'top': 0,
  'transition': '$default',
});

export default DialogStyled;
