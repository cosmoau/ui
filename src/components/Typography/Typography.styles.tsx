import { styled } from '../../stitches.config';

export default function TypographyStyles() {
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
  const BaseStyles = {
    variants: {
      inline: {
        false: {
          display: 'inherit',
        },
        true: {
          display: 'inline-block',
          marginBottom: `${0}!important`,
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
      ...TopBottomVariants,
    },

    '&:last-child': {
      marginBottom: `${0}!important`,
    },
  };

  const HeadingOneWrapper = styled('h1', {
    ft: '$h1',
    fontWeight: 'bold',

    ...BaseStyles,
  });

  const HeadingTwoWrapper = styled('h2', {
    ft: '$h2',
    fontWeight: 'bold',

    ...BaseStyles,
  });

  const HeadingThreeWrapper = styled('h3', {
    ft: '$h3',
    fontWeight: 'bold',

    ...BaseStyles,
  });

  const HeadingFourWrapper = styled('h4', {
    ft: '$h4',
    fontWeight: 'normal',
    opacity: 0.8,

    ...BaseStyles,
  });

  const HeadingFiveWrapper = styled('h5', {
    ft: '$h5',
    fontWeight: 'normal',

    ...BaseStyles,
  });

  const HeadingSixWrapper = styled('h6', {
    ft: '$h6',
    fontWeight: 'normal',

    opacity: 0.8,

    ...BaseStyles,
  });

  const TextOneWrapper = styled('p', {
    ft: '$t1',
    fontWeight: 'normal',

    ...BaseStyles,
  });

  const TextTwoWrapper = styled('p', {
    ft: '$t2',
    fontWeight: 'normal',

    ...BaseStyles,
  });

  const TextThreeWrapper = styled('p', {
    ft: '$t3',
    fontWeight: 'normal',

    ...BaseStyles,
  });

  return {
    HeadingOneWrapper,
    HeadingTwoWrapper,
    HeadingThreeWrapper,
    HeadingFourWrapper,
    HeadingFiveWrapper,
    HeadingSixWrapper,
    TextOneWrapper,
    TextTwoWrapper,
    TextThreeWrapper,
  };
}
