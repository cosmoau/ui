import type * as Stitches from '@stitches/react';
import classNames from 'classnames';
import React from 'react';

import { styled } from '../../stitches.config';

export interface Props {
  className?: string;
  css?: Stitches.CSS;
  id?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  inline?: boolean;
  inlineSpacer?: number;
  align?: 'left' | 'center' | 'right' | 'justify' | 'initial' | 'inherit';
  top?: 1 | 2 | 3 | 4 | 5 | 6;
  bottom?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

function Heading({
  className,
  css,
  id,
  level = 6,
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

  const HeadingOneWrapper = styled('h1', {
    ...baseStyles,
  });

  const HeadingTwoWrapper = styled('h2', {
    ...baseStyles,
  });

  const HeadingThreeWrapper = styled('h3', {
    ...baseStyles,
  });

  const HeadingFourWrapper = styled('h4', {
    ...baseStyles,
  });

  const HeadingFiveWrapper = styled('h5', {
    ...baseStyles,
  });

  const HeadingSixWrapper = styled('h6', {
    ...baseStyles,
  });

  return level === 1 ? (
    <HeadingOneWrapper
      className={classNames({
        [`${className}`]: className,
      })}
      css={css}
      id={id}>
      {children}
    </HeadingOneWrapper>
  ) : level === 2 ? (
    <HeadingTwoWrapper
      className={classNames({
        [`${className}`]: className,
      })}
      css={css}
      id={id}>
      {children}
    </HeadingTwoWrapper>
  ) : level === 3 ? (
    <HeadingThreeWrapper
      className={classNames({
        [`${className}`]: className,
      })}
      css={css}
      id={id}>
      {children}
    </HeadingThreeWrapper>
  ) : level === 4 ? (
    <HeadingFourWrapper
      className={classNames({
        [`${className}`]: className,
      })}
      css={css}
      id={id}>
      {children}
    </HeadingFourWrapper>
  ) : level === 5 ? (
    <HeadingFiveWrapper
      className={classNames({
        [`${className}`]: className,
      })}
      css={css}
      id={id}>
      {children}
    </HeadingFiveWrapper>
  ) : (
    <HeadingSixWrapper
      className={classNames({
        [`${className}`]: className,
      })}
      css={css}
      id={id}>
      {children}
    </HeadingSixWrapper>
  );
}

export default Heading;
