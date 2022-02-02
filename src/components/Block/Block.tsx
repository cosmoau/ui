import type * as Stitches from '@stitches/react';
import React from 'react';

import { breakpoints, styled } from '../../stitches.config';

export interface Props {
  css?: Stitches.CSS;
  id?: string;
  theme?: 'alternate' | 'light';
  inner?: boolean;
  top?: 1 | 2 | 3 | 4 | 5 | 6;
  bottom?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export default function Block({ css, id, theme, inner, top, bottom, children }: Props): JSX.Element {
  const BlockWrapper = styled('div', {
    minWidth: '100%',
    width: '100%',
    backgroundColor: theme === 'alternate' ? '$baseContrast200' : '$baseBody',
    color: '$base100',
    paddingLeft: '$2',
    paddingRight: '$2',
    paddingTop: top ? `$${top}` : 'inherit',
    paddingBottom: bottom ? `$${bottom}` : 'inherit',
  });

  const InnerWrapper = styled('div', {
    margin: 'auto',

    [breakpoints.phone]: {
      maxWidth: '$1',
    },
    [breakpoints.tabletX]: {
      maxWidth: '$2',
    },
    [breakpoints.laptopX]: {
      maxWidth: '$3',
    },
    [breakpoints.desktopX]: {
      maxWidth: '$4',
    },
    [breakpoints.wide]: {
      maxWidth: '$5',
      width: '$6',
    },
  });

  return (
    <BlockWrapper css={css} id={id}>
      {inner ? <InnerWrapper>{children}</InnerWrapper> : children}
    </BlockWrapper>
  );
}
