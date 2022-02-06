import { styled, breakpoints } from '../../stitches.config';

export default function stitchesShared({ ...props }) {
  const baseStyles = {
    textAlign: props.align,
    display: props.inline ? 'inline-block' : 'inherit',
    paddingTop: props.top ? `$${props.top}` : 0,
    paddingBottom: props.bottom ? `$${props.bottom}` : 0,
    marginRight: props.inlineSpacer ? `${props.inlineSpacer}rem` : 0,

    '&:last-child': {
      marginBottom: 0,
    },
  };

  const HeadingOneWrapper = styled('h1', {
    fontSize: '$h1',
    fontWeight: '$2',
    lineHeight: '$h1',
    marginBottom: props.inline ? 0 : '$6',

    [breakpoints.phone]: {
      fontSize: 'calc($h1 * 0.92)',
      lineHeight: 'calc($h1 * 0.92)',
    },

    [breakpoints.tabletX]: {
      fontSize: 'calc($h1 * 0.93)',
      lineHeight: 'calc($h1 * 0.93)',
    },

    [breakpoints.laptopX]: {
      fontSize: 'calc($h1 * 0.94)',
      lineHeight: 'calc($h1 * 0.94)',
    },

    ...baseStyles,
  });

  const HeadingTwoWrapper = styled('h2', {
    fontSize: '$h2',
    fontWeight: '$2',
    lineHeight: '$h2',
    marginBottom: props.inline ? 0 : '$5',

    [breakpoints.phone]: {
      fontSize: 'calc($h2 * 0.92)',
      lineHeight: 'calc($h2 * 0.92)',
    },

    [breakpoints.tabletX]: {
      fontSize: 'calc($h2 * 0.93)',
      lineHeight: 'calc($h2 * 0.93)',
    },

    [breakpoints.laptopX]: {
      fontSize: 'calc($h2 * 0.94)',
      lineHeight: 'calc($h2 * 0.94)',
    },

    ...baseStyles,
  });

  const HeadingThreeWrapper = styled('h3', {
    fontSize: '$h3',
    fontWeight: '$2',
    lineHeight: '$h3',
    letterSpacing: '0.01rem',
    marginBottom: props.inline ? 0 : '$4',

    [breakpoints.phone]: {
      fontSize: 'calc($h3 * 0.92)',
      lineHeight: 'calc($h3 * 0.25)',
    },

    [breakpoints.tabletX]: {
      fontSize: 'calc($h3 * 0.93)',
      lineHeight: 'calc($h3 * 0.93)',
    },

    [breakpoints.laptopX]: {
      fontSize: 'calc($h3 * 0.94)',
      lineHeight: 'calc($h3 * 0.94)',
    },

    ...baseStyles,
  });

  const HeadingFourWrapper = styled('h4', {
    fontSize: '$h4',
    fontWeight: '$1',
    lineHeight: '$h4',
    opacity: 0.75,
    marginBottom: props.inline ? 0 : '$4',

    [breakpoints.phone]: {
      fontSize: 'calc($h4 * 0.92)',
      lineHeight: 'calc($h4 * 0.92)',
    },

    [breakpoints.tabletX]: {
      fontSize: 'calc($h4 * 0.93)',
      lineHeight: 'calc($h4 * 0.93)',
    },

    [breakpoints.laptopX]: {
      fontSize: 'calc($h4 * 0.94)',
      lineHeight: 'calc($h4 * 0.94)',
    },

    [breakpoints.desktopX]: {
      fontSize: 'calc($h4 * 0.94)',
      lineHeight: 'calc($h4 * 0.94)',
    },

    ...baseStyles,
  });

  const HeadingFiveWrapper = styled('h5', {
    fontSize: '$h5',
    fontWeight: '$1',
    lineHeight: '$h5',
    marginBottom: props.inline ? 0 : '$3',

    [breakpoints.phone]: {
      fontSize: 'calc($h5 * 0.92)',
      lineHeight: 'calc($h5 * 0.92)',
    },

    [breakpoints.tabletX]: {
      fontSize: 'calc($h5 * 0.93)',
      lineHeight: 'calc($h5 * 0.93)',
    },

    [breakpoints.laptopX]: {
      fontSize: 'calc($h5 * 0.94)',
      lineHeight: 'calc($h5 * 0.94)',
    },

    ...baseStyles,
  });

  const HeadingSixWrapper = styled('h6', {
    fontSize: '$h6',
    fontWeight: '$1',
    lineHeight: '$h6',
    marginBottom: props.inline ? 0 : '$3',
    opacity: 0.75,

    [breakpoints.phone]: {
      fontSize: 'calc($h6 * 0.92)',
      lineHeight: 'calc($h6 * 0.92)',
    },

    [breakpoints.tabletX]: {
      fontSize: 'calc($h6 * 0.93)',
      lineHeight: 'calc($h6 * 0.93)',
    },

    [breakpoints.laptopX]: {
      fontSize: 'calc($h6 * 0.94)',
      lineHeight: 'calc($h6 * 0.94)',
    },

    ...baseStyles,
  });

  const TextOneWrapper = styled('p', {
    fontSize: '$t1',
    fontWeight: '$1',
    lineHeight: '$t1',
    marginBottom: props.inline ? 0 : '$3',

    ...baseStyles,
  });

  const TextTwoWrapper = styled('p', {
    fontSize: '$t2',
    fontWeight: '$1',
    lineHeight: '$t2',
    opacity: 0.7,
    marginBottom: props.inline ? 0 : '$3',

    ...baseStyles,
  });

  const TextThreeWrapper = styled('p', {
    fontSize: '$t3',
    fontWeight: '$1',
    lineHeight: '$t3',
    opacity: 0.7,
    marginBottom: props.inline ? 0 : '$3',

    ...baseStyles,
  });

  const Wrapper =
    props.type === 'Heading'
      ? props.level === 1
        ? HeadingOneWrapper
        : props.level === 2
        ? HeadingTwoWrapper
        : props.level === 3
        ? HeadingThreeWrapper
        : props.level === 4
        ? HeadingFourWrapper
        : props.level === 5
        ? HeadingFiveWrapper
        : HeadingSixWrapper
      : props.type === 'Text'
      ? props.level === 1
        ? TextOneWrapper
        : props.level === 2
        ? TextTwoWrapper
        : props.level === 3
        ? TextThreeWrapper
        : TextOneWrapper
      : HeadingSixWrapper;
  return Wrapper;
}
