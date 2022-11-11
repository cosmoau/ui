import { breakpoints, fadeIn, fadeOut, styled } from '../../../stitches.config';

export const ToastStyled = styled('div', {
  backgroundColor: '$background',
  border: '0.1rem solid $borderHover',
  borderRadius: '$1',
  boxShadow: '$3',
  cursor: 'pointer',
  fontSize: '$h5',
  fontWeight: '$h5',
  height: 'auto',
  justifyContent: 'center',
  lineHeight: '1.4 !important',
  marginTop: '$3',

  [breakpoints.phone]: {
    fontSize: 'calc($h5 * 0.85)',
  },
  [breakpoints.tabletX]: {
    fontSize: 'calc($h5 * 0.9)',
  },
  [breakpoints.laptopX]: {
    fontSize: 'calc($h5 * 0.95)',
  },

  overflow: 'hidden',
  padding: '$1 $3',
  position: 'relative',
  transition: '$default',
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .3s`,
        animationFillMode: 'forwards',
      },
      true: {
        animation: `${fadeIn} .4s`,
        animationFillMode: 'forwards',
      },
    },
  },
});

export const ToastContainerStyled = styled('div', {
  bottom: '$2',
  left: '50%',
  position: 'fixed',
  transform: 'translateX(-50%)',
  zIndex: '$toast',
});

export default ToastStyled;
