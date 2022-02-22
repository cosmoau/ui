import { breakpoints, styled } from '../../stitches.config';

export default function CardStyles() {
  const Wrapper = styled('div', {
    display: 'block',
    position: 'relative',
    borderRadius: '$2',
    transition: '$1',
    color: 'inherit',
    variants: {
      theme: {
        default: {
          backgroundColor: '$baseContrast100',
        },
        red: {
          backgroundColor: '$red300',
        },
        yellow: {
          backgroundColor: '$yellow300',
        },
        green: {
          backgroundColor: '$green300',
        },
        blue: {
          backgroundColor: '$blue300',
        },
        navy: {
          backgroundColor: '$navy300',
        },
        purple: {
          backgroundColor: '$purple300',
        },
        pink: {
          backgroundColor: '$pink300',
        },
        transparent: {
          backgroundColor: 'transparent',
        },
      },
      border: {
        false: {
          border: 0,
        },
        default: {
          border: '0.1rem solid $border200',
          boxShadow: '$1',
        },
        red: {
          border: '0.1rem solid $red200',
          boxShadow: '$1',
        },
        yellow: {
          border: '0.1rem solid $yellow200',
          boxShadow: '$1',
        },
        green: {
          border: '0.1rem solid $green200',
          boxShadow: '$1',
        },
        blue: {
          border: '0.1rem solid $blue200',
          boxShadow: '$1',
        },
        navy: {
          border: '0.1rem solid $navy200',
          boxShadow: '$1',
        },
        purple: {
          border: '0.1rem solid $purple200',
          boxShadow: '$1',
        },
        pink: {
          border: '0.1rem solid $pink200',
          boxShadow: '$1',
        },
        transparent: {
          border: 'none',
          boxShadow: '$1',
        },
      },
      loader: {
        false: {
          opacity: 1,
        },
        true: {
          opacity: 0.5,
        },
      },
      padding: {
        default: {
          padding: '$5',
        },
        extra: {
          padding: '$7',
          [breakpoints.phone]: {
            padding: '$6',
          },
        },
        none: {
          padding: 0,
        },
      },
    },

    '&:hover': {
      boxShadow: '$2',
    },
  });

  const ImageWrapper = styled('div', {
    width: '100%',
    position: 'relative',
    backgroundColor: '$baseContrast200',
    borderTopLeftRadius: '$2',
    borderTopRightRadius: '$2',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,

    img: {
      borderTopLeftRadius: '$2',
      borderTopRightRadius: '$2',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  });

  const ImageChildrenWrapper = styled('div', {
    variants: {
      padding: {
        default: {
          padding: '$5',
        },
        extra: {
          padding: '$7',
          [breakpoints.phone]: {
            padding: '$6',
          },
        },
        none: {
          padding: 0,
        },
      },
    },
  });

  return {
    Wrapper,
    ImageWrapper,
    ImageChildrenWrapper,
  };
}
