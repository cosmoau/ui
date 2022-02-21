import { breakpoints, styled } from '../../stitches.config';

export default function LayoutStyles() {
  const TopBottomVariants = {
    top: {
      default: {
        paddingTop: 0,
      },
      1: {
        paddingTop: '$1',
      },
      2: {
        paddingTop: '$2',
      },
      3: {
        paddingTop: '$3',
      },
      4: {
        paddingTop: '$4',
      },
      5: {
        paddingTop: '$5',
      },
      6: {
        paddingTop: '$6',
      },
      7: {
        paddingTop: '$7',
      },
      8: {
        paddingTop: '$8',
      },
      9: {
        paddingTop: '$9',
      },
      10: {
        paddingTop: '$10',
      },
      11: {
        paddingTop: '$11',
      },
      12: {
        paddingTop: '$12',
      },
    },
    bottom: {
      default: {
        paddingBottom: 0,
      },
      1: {
        paddingBottom: '$1',
      },
      2: {
        paddingBottom: '$2',
      },
      3: {
        paddingBottom: '$3',
      },
      4: {
        paddingBottom: '$4',
      },
      5: {
        paddingBottom: '$5',
      },
      6: {
        paddingBottom: '$6',
      },
      7: {
        paddingBottom: '$7',
      },
      8: {
        paddingBottom: '$8',
      },
      9: {
        paddingBottom: '$9',
      },
      10: {
        paddingBottom: '$10',
      },
      11: {
        paddingBottom: '$11',
      },
      12: {
        paddingBottom: '$12',
      },
    },
  };
  const BlockWrapper = styled('div', {
    minWidth: '100%',
    width: '100%',
    paddingLeft: '$2',
    paddingRight: '$2',

    variants: {
      theme: {
        default: {
          backgroundColor: '$baseBody',
          color: '$base100',
        },
        dark: {
          backgroundColor: '$base100',
          color: '$baseContrast100',
        },
        alternate: {
          backgroundColor: '$baseContrast200',
          color: '$base100',
        },
        light: {
          backgroundColor: '$baseContrast100',
          color: '$base100',
        },
      },
      ...TopBottomVariants,
    },
  });

  const BlockInnerWrapper = styled('div', {
    margin: 'auto',

    [breakpoints.phone]: {
      width: '$1',
    },
    [breakpoints.tabletX]: {
      width: '$2',
    },
    [breakpoints.laptopX]: {
      width: '$3',
      maxWidth: '96%',
    },
    [breakpoints.desktopX]: {
      width: '$4',
      maxWidth: '97%',
    },
    [breakpoints.wide]: {
      width: '$5',
      maxWidth: '95%',
    },
  });

  const ColumnWrapper = styled('div', {
    marginLeft: 0,
    flex: '1 1 auto',
    maxWidth: '100%',
    width: '100%',
    marginBottom: 0,

    variants: {
      left: {
        false: {
          paddingLeft: '$4',
          [breakpoints.phone]: {
            paddingLeft: '$3',
          },
          [breakpoints.wide]: {
            paddingLeft: '$5',
          },
        },
        true: {
          paddingLeft: '$7',
          [breakpoints.phone]: {
            paddingLeft: '$3',
          },
          [breakpoints.tabletX]: {
            paddingLeft: '$6',
          },
        },
      },
      right: {
        false: {
          paddingRight: '$4',
          [breakpoints.phone]: {
            paddingRight: '$3',
          },
          [breakpoints.wide]: {
            paddingRight: '$5',
          },
        },
        true: {
          paddingRight: '$7',
          [breakpoints.phone]: {
            paddingRight: '$3',
          },
          [breakpoints.tabletX]: {
            paddingRight: '$6',
          },
        },
      },
      ...TopBottomVariants,
    },
  });

  const ElementWrapper = styled('div', {
    marginBlockStart: 0,
    marginBlockEnd: 0,

    variants: {
      ...TopBottomVariants,
    },
  });

  const SectionWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '100%',

    '*': {
      boxSizing: 'border-box',
    },

    variants: {
      ...TopBottomVariants,
    },
  });

  return {
    BlockWrapper,
    BlockInnerWrapper,
    ColumnWrapper,
    ElementWrapper,
    SectionWrapper,
  };
}
