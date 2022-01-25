import type * as Stitches from '@stitches/react';
import classNames from 'classnames';
import React from 'react';

import { styled } from '../../stitches.config';

export interface Props {
  className?: string;
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

function Text({
  className,
  css,
  id,
  level = 1,
  inline,
  inlineSpacer = 0,
  align = 'left',
  top,
  bottom,
  children,
}: Props) {
  const baseStyles = {
    textAlign: align,
    display: inline ? 'inline-block' : 'inherit',
    marginRight: inlineSpacer + 'rem',
    marginBottom: inline ? 0 : 'inherit',
    paddingTop: top ? `$${top}` : 'inherit',
    paddingBottom: bottom ? `$${bottom}` : 'inherit',
  };

  const TextOneWrapper = styled('p', {
    ...baseStyles,
  });

  const TextTwoWrapper = styled('p', {
    ...baseStyles,
  });

  const TextThreeWrapper = styled('span', {
    ...baseStyles,
  });

  return level === 2 ? (
    <TextTwoWrapper
      className={classNames({
        [`${className}`]: className,
      })}
      css={css}
      id={id}>
      {children}
    </TextTwoWrapper>
  ) : level === 3 ? (
    <TextThreeWrapper
      className={classNames({
        [`${className}`]: className,
      })}
      css={css}
      id={id}>
      {children}
    </TextThreeWrapper>
  ) : (
    <TextOneWrapper
      className={classNames({
        [`${className}`]: className,
      })}
      css={css}
      id={id}>
      {children}
    </TextOneWrapper>
  );
}

export default Text;
