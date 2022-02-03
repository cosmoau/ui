import type * as Stitches from '@stitches/react';
import { ReactNode } from 'react';

import { breakpoints, styled } from '../../stitches.config';

export interface Props {
  bottom?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  css?: Stitches.CSS;
  id?: string;
  inner?: boolean;
  theme?: 'dark' | 'alternate' | 'light';
  top?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function Block({ bottom, children, css, id, inner, theme, top }: Props): JSX.Element {
  const Wrapper = styled('div', {
    minWidth: '100%',
    width: '100%',
    backgroundColor: theme === 'dark' ? '$base100' : theme === 'alternate' ? '$baseContrast200' : '$baseBody',
    color: theme === 'dark' ? '$baseContrast100' : '$base100',
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
    <Wrapper css={css} id={id}>
      {inner ? <InnerWrapper>{children}</InnerWrapper> : children}
    </Wrapper>
  );
}
