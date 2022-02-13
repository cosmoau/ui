import { styled } from '../../stitches.config';

export default function stitchesShared({ ...props }) {
  const Wrapper = styled('div', {
    position: 'relative',
    display: 'inline-flex',
  });

  const Trigger = styled('div', {
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    appearance: 'none',
    outline: 'none',
    userSelect: 'none',
    transition: '$1',
    '&:hover': {
      color: 'inherit',
      opacity: props.hover ? 0.7 : 1,
    },
  });

  const GroupWrapper = styled('div', {
    background: '$baseContrast100',
    borderRadius: '$2',
    border: '0.1rem solid $border100',
    boxShadow: '$3',
    boxSizing: 'border-box',
    overflowY: 'auto',
    position: 'absolute',
    padding: '$2',
    top: '120%',
    maxHeight: '50rem',
    width: '100%',
    minWidth: props.width ? `${props.width}rem` : '15rem',
    maxWidth: props.width ? `${props.width}rem` : '80rem',
    zIndex: '$dropdown',
    webkitoverflowscrolling: 'touch',
    left: props.align === 'right' ? 'auto' : 0,
    right: props.align === 'right' ? 0 : 'auto',
  });

  const ItemWrapper = styled('div', {
    display: 'flex',
    textAlign: 'left',
    transition: '$1',
    padding: '$3',
    borderBottom: '0.1rem solid $navy300',
    cursor: 'pointer',
    borderRadius: '$1',
    ft: '$h6',
    opacity: 1,

    a: {
      display: 'block',
      width: '100%',
    },

    '&:hover': {
      backgroundColor: '$navy400',
    },

    '&:last-child': {
      borderBottom: 0,
    },

    '&.active': {
      backgroundColor: '$navy300',

      '&:hover': {
        backgroundColor: '$navy400',
      },
    },
  });

  const IconWrapper = styled('div', {
    display: 'inline-flex',
    alignItems: 'center',
    width: 'auto',
    marginRight: '$3',
    height: '100%',
    position: 'relative',
    verticalAlign: 'middle',
    alignSelf: 'center',
  });

  return { Wrapper, Trigger, GroupWrapper, ItemWrapper, IconWrapper };
}
