import { CSS } from '@stitches/react/types/css-util';
import React, { ReactNode } from 'react';

import { styled } from '../../stitches.config';

export interface Props {
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
  bottom?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: ReactNode;
  css?: CSS;
  id?: string;
  top?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export default function Section({ align = 'inherit', bottom, children, css, id, top }: Props): JSX.Element {
  const Wrapper = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: align,
    justifyContent: align,
    width: '100%',
    maxWidth: '100%',
    paddingTop: top ? `$${top}` : 0,
    paddingBottom: bottom ? `$${bottom}` : 0,

    '*': {
      boxSizing: 'border-box',
      verticalAlign: align,
    },
  });

  return (
    <Wrapper css={css} id={id}>
      {children}
    </Wrapper>
  );
}
