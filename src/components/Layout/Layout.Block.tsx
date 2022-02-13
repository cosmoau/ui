import { CSS } from '@stitches/react/types/css-util';
import React, { ReactNode } from 'react';

import { breakpoints, styled } from '../../stitches.config';

export interface Props {
  bottom?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: ReactNode;
  css?: CSS;
  id?: string;
  inner?: boolean;
  theme?: 'dark' | 'alternate' | 'light';
  top?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
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
      width: '$1',
    },
    [breakpoints.tabletX]: {
      width: '$2',
    },
    [breakpoints.laptopX]: {
      width: '$3',
      maxWidth: '96%',
    },
    [breakpoints.desktopX]: {
      width: '$4',
      maxWidth: '97%',
    },
    [breakpoints.wide]: {
      width: '$5',
      maxWidth: '95%',
    },
  });

  return (
    <Wrapper css={css} id={id}>
      {inner ? <InnerWrapper>{children}</InnerWrapper> : children}
    </Wrapper>
  );
}
