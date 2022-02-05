import { CSS } from '@stitches/react/types/css-util';
import React, { ReactNode } from 'react';

import stitchesShared from './Typography.stitches';

export interface Props {
  align?: 'left' | 'center' | 'right' | 'justify' | 'initial' | 'inherit';
  bottom?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: ReactNode;
  css?: CSS;
  id?: string;
  inline?: boolean;
  inlineSpacer?: number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  top?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export default function Heading({ align = 'inherit', bottom, children, css, id, inline = false, inlineSpacer = 0, level = 6, top }: Props): JSX.Element {
  const Wrapper = stitchesShared({
    align,
    bottom,
    inline,
    inlineSpacer,
    level,
    top,
    type: 'Heading',
  });

  return (
    <Wrapper css={css} id={id}>
      {children}
    </Wrapper>
  );
}
