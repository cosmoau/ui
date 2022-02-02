import type * as Stitches from '@stitches/react';
import React, { useRef, useState } from 'react';

import { styled } from '../../stitches.config';
import { Outsider } from '../Outsider';

export interface Props {
  css?: Stitches.CSS;
  trigger: React.ReactNode;
  passKey: string;
  type?: 'hover' | 'click';
  align?: 'left' | 'right' | 'center';
  children: React.ReactNode;
}

function Tooltip({ css, trigger, passKey, type = 'click', align = 'left', children }: Props): JSX.Element {
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

  Outsider(ref, () => {
    setIsOpen(false);
  });

  const TooltipWrapper = styled('div', {
    position: 'relative',
    display: 'inline-flex',
  });

  const TooltipTriggerWrapper = styled('div', {
    display: 'inline-block',
    position: 'relative',
  });

  const TooltipContentWrapper = styled('div', {
    transition: '$1',
    borderRadius: '$2',
    background: '$baseContrast100',
    border: '0.1rem solid $border100',
    boxShadow: '$3',
    boxSizing: 'border-box',
    overflowY: 'auto',
    position: 'absolute',
    marginTop: 'calc($4 / 1.4)',
    paddingTop: '$1',
    paddingBottom: '$1',
    paddingLeft: 'calc($2 / 1.66)',
    paddingRight: 'calc($2 / 1.66)',
    display: 'inline-flex',
    minWidth: 'max-content',
    zIndex: 9999,
    webkitoverflowscrolling: 'touch',
    left: align === 'left' ? '0' : align === 'right' ? 'auto' : '50%',
    right: align === 'right' ? '0' : align === 'left' ? 'auto' : '50%',
  });

  return (
    <TooltipWrapper css={css} key={passKey} ref={ref}>
      <TooltipTriggerWrapper onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {trigger}
      </TooltipTriggerWrapper>
      {isOpen && <TooltipContentWrapper>{children}</TooltipContentWrapper>}
    </TooltipWrapper>
  );
}
export default Tooltip;
