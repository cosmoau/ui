import { CSS } from '@stitches/react/types/css-util';
import React, { ReactNode } from 'react';

import LayoutStyles from './Layout.styles';

export interface Props {
  bottom?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: ReactNode;
  css?: CSS;
  id?: string;
  inner?: boolean;
  theme?: 'dark' | 'alternate' | 'light';
  top?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const { BlockWrapper, BlockInnerWrapper } = LayoutStyles();

export default function Block({ bottom, children, css, id, inner, theme, top }: Props): JSX.Element {
  return (
    <BlockWrapper bottom={bottom || 'default'} css={css} id={id} theme={theme || 'default'} top={top || 'default'}>
      {inner ? <BlockInnerWrapper>{children}</BlockInnerWrapper> : children}
    </BlockWrapper>
  );
}
