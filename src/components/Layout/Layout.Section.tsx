import { CSS } from '@stitches/react/types/css-util';
import React, { ReactNode } from 'react';

import LayoutStyles from './Layout.styles';

export interface Props {
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
  bottom?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: ReactNode;
  css?: CSS;
  id?: string;
  top?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const { SectionWrapper } = LayoutStyles();

export default function Section({ align = 'initial', bottom, children, css, id, top }: Props): JSX.Element {
  return (
    <SectionWrapper
      bottom={bottom || 'default'}
      css={{
        alignItems: align,
        justifyContent: align,

        '*': {
          alignItems: align,
        },
        ...css,
      }}
      id={id}
      top={top || 'default'}>
      {children}
    </SectionWrapper>
  );
}
