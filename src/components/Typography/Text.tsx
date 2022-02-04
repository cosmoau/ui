import type * as Stitches from '@stitches/react';
import React, { ReactNode } from 'react';

import { styled } from '../../stitches.config';

export interface Props {
  align?: 'left' | 'center' | 'right' | 'justify' | 'initial' | 'inherit';
  bottom?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: ReactNode;
  css?: Stitches.CSS;
  id?: string;
  inline?: boolean;
  inlineSpacer?: number;
  level?: 1 | 2 | 3;
  top?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export default function Text({
  align = 'inherit',
  bottom,
  children,
  css,
  id,
  inline = false,
  inlineSpacer = 0,
  level = 1,
  top,
}: Props): JSX.Element {
  const baseStyles = {
    textAlign: align,
    display: inline ? 'inline-block' : 'inherit',
    paddingTop: top ? `$${top}` : 0,
    paddingBottom: bottom ? `$${bottom}` : 0,
    marginBottom: inline ? 0 : '$3',
    marginRight: inlineSpacer ? `${inlineSpacer}rem` : 0,

    '&:last-child': {
      marginBottom: 0,
    },
  };

  const LevelOneWrapper = styled('p', {
    fontSize: '$t1',
    fontWeight: '$1',
    lineHeight: '$t1',

    ...baseStyles,
  });

  const LevelTwoWrapper = styled('p', {
    fontSize: '$t2',
    fontWeight: '$1',
    lineHeight: '$t2',
    opacity: 0.7,

    ...baseStyles,
  });

  const LevelThreeWrapper = styled('p', {
    fontSize: '$t3',
    fontWeight: '$1',
    lineHeight: '$t3',
    opacity: 0.7,

    ...baseStyles,
  });

  const Wrapper = level === 2 ? LevelTwoWrapper : level === 3 ? LevelThreeWrapper : LevelOneWrapper;

  return (
    <Wrapper css={css} id={id}>
      {children}
    </Wrapper>
  );
}
