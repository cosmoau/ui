import type * as Stitches from '@stitches/react';
import React, { ReactNode } from 'react';

import { styled } from '../../stitches.config';

export interface Props {
  align?: 'left' | 'center' | 'right' | 'justify' | 'initial' | 'inherit';
  bottom?: 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6;
  children: ReactNode;
  css?: Stitches.CSS;
  id?: string;
  inline?: boolean;
  inlineSpacer?: number;
  level?: 1 | 2 | 3;
  top?: 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6;
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
    marginRight: inlineSpacer ? `${inlineSpacer}rem` : 0,

    '&:last-child': {
      marginBottom: 0,
    },
  };

  const LevelOneWrapper = styled('p', {
    fontSize: '$t1',
    fontWeight: '$1',
    lineHeight: '$t1',
    marginBottom: inlineSpacer ? 0 : 'calc($1 * 2)',

    ...baseStyles,
  });

  const LevelTwoWrapper = styled('p', {
    fontSize: '$t2',
    fontWeight: '$1',
    lineHeight: '$t2',
    opacity: 0.7,

    marginBottom: inlineSpacer ? 0 : 'calc($1 * 2)',

    ...baseStyles,
  });

  const LevelThreeWrapper = styled('p', {
    fontSize: '$t3',
    fontWeight: '$1',
    lineHeight: '$t3',
    opacity: 0.7,
    marginBottom: inlineSpacer ? 0 : '$1',

    ...baseStyles,
  });

  const Wrapper = level === 2 ? LevelTwoWrapper : level === 3 ? LevelThreeWrapper : LevelOneWrapper;

  return (
    <Wrapper css={css} id={id}>
      {children}
    </Wrapper>
  );
}
