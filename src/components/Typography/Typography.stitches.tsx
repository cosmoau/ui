import { styled } from '../../stitches.config';

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
    ft: '$h1',
    fontWeight: 'bold',
    marginBottom: props.inline ? 0 : '$6',

    ...baseStyles,
  });

  const HeadingTwoWrapper = styled('h2', {
    ft: '$h2',
    fontWeight: 'bold',
    marginBottom: props.inline ? 0 : '$5',

    ...baseStyles,
  });

  const HeadingThreeWrapper = styled('h3', {
    ft: '$h3',
    fontWeight: 'bold',
    marginBottom: props.inline ? 0 : '$3',

    ...baseStyles,
  });

  const HeadingFourWrapper = styled('h4', {
    ft: '$h4',
    fontWeight: 'normal',
    opacity: 0.8,
    marginBottom: props.inline ? 0 : '$4',

    ...baseStyles,
  });

  const HeadingFiveWrapper = styled('h5', {
    ft: '$h5',
    fontWeight: 'normal',
    marginBottom: props.inline ? 0 : '$3',

    ...baseStyles,
  });

  const HeadingSixWrapper = styled('h6', {
    ft: '$h6',
    fontWeight: 'normal',
    marginBottom: props.inline ? 0 : '$3',
    opacity: 0.8,

    ...baseStyles,
  });

  const TextOneWrapper = styled('p', {
    ft: '$t1',
    fontWeight: 'normal',
    marginBottom: props.inline ? 0 : '$3',

    ...baseStyles,
  });

  const TextTwoWrapper = styled('p', {
    ft: '$t2',
    fontWeight: 'normal',
    marginBottom: props.inline ? 0 : '$3',

    ...baseStyles,
  });

  const TextThreeWrapper = styled('p', {
    ft: '$t3',
    fontWeight: 'normal',
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
