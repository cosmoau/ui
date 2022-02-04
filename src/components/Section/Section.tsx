import type * as Stitches from '@stitches/react';
import React, { ReactNode } from 'react';

import { styled } from '../../stitches.config';

export interface Props {
  alignment?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
  bottom?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: ReactNode;
  css?: Stitches.CSS;
  id?: string;
  top?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export default function Section({ alignment = 'initial', bottom, children, css, id, top }: Props): JSX.Element {
  const Wrapper = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: alignment,
    justifyContent: alignment,
    width: '100%',
    maxWidth: '100%',
    paddingTop: top ? `$${top}` : 0,
    paddingBottom: bottom ? `$${bottom}` : 0,

    '*': {
      boxSizing: 'border-box',
      verticalAlign: alignment,
    },
  });

  return (
    <Wrapper css={css} id={id}>
      {children}
    </Wrapper>
  );
}
