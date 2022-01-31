import type * as Stitches from '@stitches/react';
import React from 'react';

import { styled } from '../../Theme';

export interface Props {
  css?: Stitches.CSS;
  id?: string;
  level?: 1 | 2 | 3;
  inline?: boolean;
  inlineSpacer?: number;
  align?: 'left' | 'center' | 'right' | 'justify' | 'initial' | 'inherit';
  top?: 1 | 2 | 3 | 4 | 5 | 6;
  bottom?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

function Text({ css, id, level = 1, inline, inlineSpacer = 0, align = 'left', top, bottom, children }: Props) {
  const baseStyles = {
    textAlign: align,
    display: inline ? 'inline-block' : 'inherit',
    marginRight: inlineSpacer + 'rem',
    marginBottom: inline ? 0 : 'inherit',
    paddingTop: top ? `$${top}` : 'inherit',
    paddingBottom: bottom ? `$${bottom}` : 'inherit',
  };

  const TextOneWrapper = styled('p', {
    ...baseStyles,
  });

  const TextTwoWrapper = styled('p', {
    ...baseStyles,
  });

  const TextThreeWrapper = styled('span', {
    ...baseStyles,
  });

  const TextWrapper = level === 2 ? TextTwoWrapper : level === 3 ? TextThreeWrapper : TextOneWrapper;

  return (
    <TextWrapper css={css} id={id}>
      {children}
    </TextWrapper>
  );
}

export default Text;
