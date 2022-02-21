import { CSS } from '@stitches/react/types/css-util';
import React, { ReactNode, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import TooltipStyles from './Tooltip.styles';

export interface Props {
  align?: 'left' | 'right' | 'center';
  children: ReactNode;
  css?: CSS;
  id?: string;
  passKey: string;
  trigger: ReactNode;
  type?: 'hover' | 'click';
}

const { Wrapper, TriggerWrapper, ContentWrapper } = TooltipStyles();

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

  return (
    <Wrapper css={css} id={id} key={passKey} ref={ref}>
      <TriggerWrapper onClickCapture={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {trigger}
      </TriggerWrapper>
      {isOpen && (
        <ContentWrapper
          css={{
            left: align === 'left' ? '0' : align === 'right' ? 'auto' : '50%',
            right: align === 'right' ? '0' : align === 'left' ? 'auto' : '50%',
          }}>
          {children}
        </ContentWrapper>
      )}
    </Wrapper>
  );
}
