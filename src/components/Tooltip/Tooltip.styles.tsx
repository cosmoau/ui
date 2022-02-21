import { styled } from '../../stitches.config';

export default function TooltipStyles() {
  const Wrapper = styled('div', {
    position: 'relative',
    display: 'flex',
    flex: 1,
  });

  const TriggerWrapper = styled('div', {
    display: 'inline-block',
    position: 'relative',
  });

  const ContentWrapper = styled('div', {
    transition: '$1',
    borderRadius: '$2',
    background: '$baseContrast100',
    border: '0.1rem solid $border100',
    boxShadow: '$3',
    position: 'absolute',
    top: '120%',
    padding: '$1 $3',
    width: 'max-content',
    maxWidth: '30rem',
    overflowY: 'scroll',
    wordBreak: 'break-word',
    lineBreak: 'auto',
    whiteSpace: 'pre-wrap',
    maxHeight: '30rem',
    zIndex: '$tooltip',
    webkitoverflowscrolling: 'touch',
  });

  return {
    Wrapper,
    TriggerWrapper,
    ContentWrapper,
  };
}
