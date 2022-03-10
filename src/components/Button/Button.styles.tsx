import { styled } from '../../stitches.config';

export default function ButtonStyles() {
  const Wrapper = styled('button', {
    textAlign: 'center',
    position: 'relative',
    transition: '$1',
    fontWeight: 'normal',
    padding: '$2 $4',
    borderRadius: '$1',
    ft: '$h5',
    alignItems: 'center',
    horizontalAlign: 'left',

    '*': {
      alignItems: 'center',
      display: 'inline-flex',
      verticalAlign: 'middle',
      alignSelf: 'center',
      lineHeight: `1.1 !important`,
    },

    boxShadow: '$1',

    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    variants: {
      theme: {
        default: {
          backgroundColor: '$baseContrast100',
          color: '$base100',
          border: '0.1rem solid $border100',

          '&:hover': {
            backgroundColor: '$navy300',
          },
        },
        red: {
          backgroundColor: '$red300',
          color: '$red100',
          border: '0.1rem solid $red400',

          '&:hover': {
            backgroundColor: '$red200',
          },
        },
        yellow: {
          backgroundColor: '$yellow300',
          color: '$yellow100',
          border: '0.1rem solid $yellow400',

          '&:hover': {
            backgroundColor: '$yellow200',
          },
        },
        green: {
          backgroundColor: '$green300',
          color: '$green100',
          border: '0.1rem solid $green400',

          '&:hover': {
            backgroundColor: '$green200',
          },
        },
        blue: {
          backgroundColor: '$blue300',
          color: '$blue100',
          border: '0.1rem solid $blue400',

          '&:hover': {
            backgroundColor: '$blue200',
          },
        },
        navy: {
          backgroundColor: '$navy300',
          color: '$navy100',
          border: '0.1rem solid $navy200',

          '&:hover': {
            backgroundColor: '$navy200',
          },
        },
        purple: {
          backgroundColor: '$purple300',
          color: '$purple100',
          border: '0.1rem solid $purple200',

          '&:hover': {
            backgroundColor: '$purple200',
          },
        },
        pink: {
          backgroundColor: '$pink300',
          color: '$pink100',
          border: '0.1rem solid $pink200',

          '&:hover': {
            backgroundColor: '$pink200',
          },
        },
        transparent: {
          backgroundColor: 'transparent',
          color: '$base100',
          border: '0.1rem solid transparent',

          '&:hover': {
            backgroundColor: '$navy300',
          },
        },
        dark: {
          backgroundColor: '$base100',
          color: '$baseContrast100',
          border: '0.1rem solid $base100',

          '&:hover': {
            backgroundColor: '$base200',
          },
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
  });

  const IconWrapper = styled('div', {
    svg: {
      width: '1.6rem',
      height: '1.6rem',
    },
    variants: {
      iconPosition: {
        left: {
          marginRight: '$2',
        },
        right: {
          marginLeft: '$2',
        },
      },
    },
  });

  return {
    Wrapper,
    IconWrapper,
  };
}
