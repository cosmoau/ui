import { CSS } from '@stitches/react/types/css-util';
import React, { ReactNode } from 'react';

import LayoutStyles from './Layout.styles';

export interface Props {
  align?: 'left' | 'center' | 'right' | 'justify' | 'initial' | 'inherit';
  bottom?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: ReactNode;
  css?: CSS;
  id?: string;
  top?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const { ElementWrapper } = LayoutStyles();

export default function Element({ align = 'inherit', bottom, children, css, id, top }: Props): JSX.Element {
  return (
    <ElementWrapper
      bottom={bottom || 'default'}
      css={{
        textAlign: align,
        ...css,
      }}
      id={id}
      top={top || 'default'}>
      {children}
    </ElementWrapper>
  );
}
