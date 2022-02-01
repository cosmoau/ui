import type * as Stitches from '@stitches/react';
import React from 'react';

import { styled } from '../../stitches.config';

export interface Props {
  css?: Stitches.CSS;
  id?: string;
  level?: 1 | 2 | 3;
  inline?: boolean;
  inlineSpacer?: number;
  align?: 'left' | 'center' | 'right' | 'justify' | 'initial' | 'inherit';
  top?: 1 | 2 | 3 | 4 | 5 | 6;
  bottom?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

function Text({ css, id, level = 1, inline, inlineSpacer = 0, align = 'left', top, bottom, children }: Props) {
  const baseStyles = {
    textAlign: align,
    display: inline ? 'inline-block' : 'inherit',
    paddingTop: top ? `$${top}` : 'inherit',
    paddingBottom: bottom ? `$${bottom}` : 'inherit',
    marginRight: inlineSpacer ? `${inlineSpacer}rem` : 'inherit',

    '&:last-child': {
      marginBottom: 0,
    },
  };

  const TextOneWrapper = styled('p', {
    fontSize: '$t1',
    fontWeight: '$1',
    lineHeight: '$t1',
    marginBottom: inlineSpacer ? 0 : 'calc($1 * 2)',
    opacity: 0.8,

    ...baseStyles,
  });

  const TextTwoWrapper = styled('p', {
    fontSize: '$t2',
    fontWeight: '$1',
    lineHeight: '$t2',
    opacity: 0.7,

    marginBottom: inlineSpacer ? 0 : 'calc($1 * 2)',

    ...baseStyles,
  });

  const TextThreeWrapper = styled('p', {
    fontSize: '$t3',
    fontWeight: '$1',
    lineHeight: '$t3',
    opacity: 0.7,
    marginBottom: inlineSpacer ? 0 : '$1',

    ...baseStyles,
  });

  const TextWrapper = level === 2 ? TextTwoWrapper : level === 3 ? TextThreeWrapper : TextOneWrapper;

  return (
    <TextWrapper css={css} id={id}>
      {children}
    </TextWrapper>
  );
}

export default Text;
