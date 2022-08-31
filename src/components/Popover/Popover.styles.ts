import { fadeIn, fadeOut, styled } from '../../stitches.config';

export const PopoverStyled = styled('div', {
  display: 'inline-block',
  position: 'relative',
  verticalAlign: 'middle',
});

export const PopoverTriggerStyled = styled('div', {
  '*': {
    cursor: 'pointer',
  },
  display: 'inline-flex',
  position: 'relative',
  verticalAlign: 'middle',
});

export const PopoverContentStyled = styled('div', {
  backgroundColor: '$background',
  border: '0.1rem solid $border',
  borderRadius: '$1',
  boxShadow: '$3',
  lineBreak: 'auto',
  marginTop: '.75%',
  overflowY: 'auto',
  padding: '$1 $4',
  position: 'absolute',
  transition: '$default',
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .15s`,
        animationFillMode: 'forwards',
      },
      true: {
        animation: `${fadeIn} .15s`,
        animationFillMode: 'forwards',
      },
    },
    minimal: {
      true: {
        padding: 0,
      },
    },
  },
  zIndex: '$popover',
});

export default PopoverStyled;
