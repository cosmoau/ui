import type * as Stitches from '@stitches/react';
import React from 'react';

import { styled } from '../../stitches.config';

export interface Props {
  css?: Stitches.CSS;
  id?: string;
  alignment?: 'initial' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  top?: 1 | 2 | 3 | 4 | 5 | 6;
  bottom?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export default function Section({ css, id, alignment = 'initial', top, bottom, children }: Props): JSX.Element {
  const SectionWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: alignment,
    justifyContent: alignment,
    width: '100%',
    maxWidth: '100%',
    paddingTop: top ? `$${top}` : 'inherit',
    paddingBottom: bottom ? `$${bottom}` : 'inherit',

    '*': {
      boxSizing: 'border-box',
      verticalAlign: alignment,
    },
  });

  return (
    <SectionWrapper css={css} id={id}>
      {children}
    </SectionWrapper>
  );
}
