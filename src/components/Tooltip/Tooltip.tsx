import { CSS } from '@stitches/react/types/css-util';
import React, { ReactNode, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { styled } from '../../stitches.config';

export interface Props {
  align?: 'left' | 'right' | 'center';
  children: ReactNode;
  css?: CSS;
  id?: string;
  passKey: string;
  trigger: ReactNode;
  type?: 'hover' | 'click';
}

export default function Tooltip({ align = 'left', children, css, id, passKey, trigger, type = 'hover' }: Props): JSX.Element {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (): void => {
    if (type === 'click') {
      setIsOpen(!isOpen);
    }
  };

  const handleMouseEnter = (): void => {
    if (type === 'hover') {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = (): void => {
    if (type === 'hover') {
      setIsOpen(false);
    }
  };

  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

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
    left: align === 'left' ? '0' : align === 'right' ? 'auto' : '50%',
    right: align === 'right' ? '0' : align === 'left' ? 'auto' : '50%',
  });

  return (
    <Wrapper css={css} id={id} key={passKey} ref={ref}>
      <TriggerWrapper onClickCapture={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {trigger}
      </TriggerWrapper>
      {isOpen && <ContentWrapper>{children}</ContentWrapper>}
    </Wrapper>
  );
}
