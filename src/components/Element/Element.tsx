import type * as Stitches from '@stitches/react';
import React, { ReactNode } from 'react';

import { styled } from '../../stitches.config';

export interface Props {
  align?: 'left' | 'center' | 'right' | 'justify' | 'initial' | 'inherit';
  bottom?: 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6;
  children: ReactNode;
  css?: Stitches.CSS;
  id?: string;
  top?: 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6;
}

export default function Element({ align = 'inherit', bottom, children, css, id, top }: Props): JSX.Element {
  const Wrapper = styled('div', {
    textAlign: align,
    paddingTop: top ? `$${top}` : 0,
    paddingBottom: bottom ? `$${bottom}` : 0,
    marginBlockStart: 0,
    marginBlockEnd: 0,
  });

  return (
    <Wrapper css={css} id={id}>
      {children}
    </Wrapper>
  );
}
