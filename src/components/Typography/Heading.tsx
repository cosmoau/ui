import type * as Stitches from '@stitches/react';
import React from 'react';

import { styled, breakpoints } from '../../stitches.config';

export interface Props {
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
  css,
  id,
  level = 6,
  inline = false,
  inlineSpacer = 0,
  align = 'left',
  top,
  bottom,
  children,
}: Props) {
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

  const HeadingOneWrapper = styled('h1', {
    fontSize: '$h1',
    fontWeight: '$2',
    lineHeight: '$h1',
    letterSpacing: '0.01rem',
    marginBottom: inlineSpacer ? 0 : 'calc($3 / 1.1)',

    [breakpoints.phone]: {
      fontSize: 'calc($h1 * 0.95)',
      lineHeight: 'calc($h1 * 0.95)',
    },

    [breakpoints.tabletX]: {
      fontSize: 'calc($h1 * 0.92)',
      lineHeight: 'calc($h1 * 0.92)',
    },

    [breakpoints.laptopX]: {
      fontSize: 'calc($h1 * 0.94)',
      lineHeight: 'calc($h1 * 0.94)',
    },

    ...baseStyles,
  });

  const HeadingTwoWrapper = styled('h2', {
    fontSize: '$h2',
    fontWeight: '$2',
    lineHeight: '$h2',
    letterSpacing: '0.01rem',
    marginBottom: inlineSpacer ? 0 : 'calc($3 / 1.4)',

    [breakpoints.phone]: {
      fontSize: 'calc($h2 * 0.95)',
      lineHeight: 'calc($h2 * 0.95)',
    },

    [breakpoints.tabletX]: {
      fontSize: 'calc($h2 * 0.92)',
      lineHeight: 'calc($h2 * 0.92)',
    },

    [breakpoints.laptopX]: {
      fontSize: 'calc($h2 * 0.94)',
      lineHeight: 'calc($h2 * 0.94)',
    },

    ...baseStyles,
  });

  const HeadingThreeWrapper = styled('h3', {
    fontSize: '$h3',
    fontWeight: '$2',
    lineHeight: '$h3',
    letterSpacing: '0.01rem',
    marginBottom: inlineSpacer ? 0 : '$2',

    [breakpoints.phone]: {
      fontSize: 'calc($h3 * 0.95)',
      lineHeight: 'calc($h3 * 0.95)',
    },

    [breakpoints.tabletX]: {
      fontSize: 'calc($h3 * 0.92)',
      lineHeight: 'calc($h3 * 0.92)',
    },

    [breakpoints.laptopX]: {
      fontSize: 'calc($h3 * 0.9)',
      lineHeight: 'calc($h3 * 0.9)',
    },

    ...baseStyles,
  });

  const HeadingFourWrapper = styled('h4', {
    fontSize: '$h4',
    fontWeight: '$1',
    lineHeight: '$h4',
    opacity: 0.8,
    letterSpacing: '0.01rem',
    marginBottom: inlineSpacer ? 0 : '$2',

    [breakpoints.phone]: {
      fontSize: 'calc($h4 * 0.95)',
      lineHeight: 'calc($h4 * 0.95)',
    },

    [breakpoints.tabletX]: {
      fontSize: 'calc($h4 * 0.95)',
      lineHeight: 'calc($h4 * 0.95)',
    },

    [breakpoints.laptopX]: {
      fontSize: 'calc($h4 * 0.93)',
      lineHeight: 'calc($h4 * 0.93)',
    },

    [breakpoints.desktopX]: {
      fontSize: 'calc($h4 * 0.93)',
      lineHeight: 'calc($h4 * 0.93)',
    },

    ...baseStyles,
  });

  const HeadingFiveWrapper = styled('h5', {
    fontSize: '$h5',
    fontWeight: '$1',
    lineHeight: '$h5',
    marginBottom: inlineSpacer ? 0 : 'calc($1 * 3.3)',

    [breakpoints.phone]: {
      fontSize: 'calc($h5 * 0.95)',
      lineHeight: 'calc($h5 * 0.95)',
    },

    [breakpoints.tabletX]: {
      fontSize: 'calc($h5 * 0.92)',
      lineHeight: 'calc($h5 * 0.92)',
    },

    [breakpoints.laptopX]: {
      fontSize: 'calc($h5 * 0.94)',
      lineHeight: 'calc($h5 * 0.94)',
    },

    [breakpoints.desktopX]: {
      fontSize: 'calc($h5 * 0.96)',
      lineHeight: 'calc($h5 * 0.96)',
    },

    ...baseStyles,
  });

  const HeadingSixWrapper = styled('h6', {
    fontSize: '$h6',
    fontWeight: '$1',
    lineHeight: '$h6',
    marginBottom: inlineSpacer ? 0 : 'calc($1 * 3)',
    opacity: 0.7,

    [breakpoints.phone]: {
      fontSize: 'calc($h6 * 0.95)',
      lineHeight: 'calc($h6 * 0.95)',
    },

    [breakpoints.tabletX]: {
      fontSize: 'calc($h6 * 0.92)',
      lineHeight: 'calc($h6 * 0.92)',
    },

    [breakpoints.laptopX]: {
      fontSize: 'calc($h6 * 0.94)',
      lineHeight: 'calc($h6 * 0.94)',
    },

    ...baseStyles,
  });

  const HeadingWrapper =
    level === 1
      ? HeadingOneWrapper
      : level === 2
      ? HeadingTwoWrapper
      : level === 3
      ? HeadingThreeWrapper
      : level === 4
      ? HeadingFourWrapper
      : level === 5
      ? HeadingFiveWrapper
      : HeadingSixWrapper;

  return (
    <HeadingWrapper css={css} id={id}>
      {children}
    </HeadingWrapper>
  );
}

export default Heading;
