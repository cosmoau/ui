import type * as Stitches from '@stitches/react';
import React, { ReactNode } from 'react';

import { styled, breakpoints } from '../../stitches.config';

export interface Props {
  align?: 'left' | 'center' | 'right' | 'justify' | 'initial' | 'inherit';
  bottom?: 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6;
  children: ReactNode;
  css?: Stitches.CSS;
  id?: string;
  inline?: boolean;
  inlineSpacer?: number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  top?: 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6;
}

export default function Heading({
  align = 'inherit',
  bottom,
  children,
  css,
  id,
  inline = false,
  inlineSpacer = 0,
  level = 6,
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

  const LevelOneWrapper = styled('h1', {
    fontSize: '$h1',
    fontWeight: '$2',
    lineHeight: '$h1',
    marginBottom: inline ? 0 : 'calc($3 / 1.1)',

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

  const LevelTwoWrapper = styled('h2', {
    fontSize: '$h2',
    fontWeight: '$2',
    lineHeight: '$h2',
    marginBottom: inline ? 0 : 'calc($3 / 1.4)',

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

  const LevelThreeWrapper = styled('h3', {
    fontSize: '$h3',
    fontWeight: '$2',
    lineHeight: '$h3',
    letterSpacing: '0.01rem',
    marginBottom: inline ? 0 : '$2',

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

  const LevelFourWrapper = styled('h4', {
    fontSize: '$h4',
    fontWeight: '$1',
    lineHeight: '$h4',
    opacity: 0.8,
    marginBottom: inline ? 0 : '$2',

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

  const LevelFiveWrapper = styled('h5', {
    fontSize: '$h5',
    fontWeight: '$1',
    lineHeight: '$h5',
    marginBottom: inline ? 0 : 'calc($2 * 3.3)',

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

    ...baseStyles,
  });

  const LevelSixWrapper = styled('h6', {
    fontSize: '$h6',
    fontWeight: '$1',
    lineHeight: '$h6',
    marginBottom: inline ? 0 : 'calc($2 * 3)',

    [breakpoints.phone]: {
      fontSize: 'calc($h6 * 0.95)',
      lineHeight: 'calc($h6 * 0.95)',
    },

    [breakpoints.tabletX]: {
      fontSize: 'calc($h6 * 0.92)',
      lineHeight: 'calc($h6 * 0.92)',
    },

    [breakpoints.laptopX]: {
      fontSize: 'calc($h6 * 0.96)',
      lineHeight: 'calc($h6 * 0.96)',
    },

    ...baseStyles,
  });

  const Wrapper =
    level === 1
      ? LevelOneWrapper
      : level === 2
      ? LevelTwoWrapper
      : level === 3
      ? LevelThreeWrapper
      : level === 4
      ? LevelFourWrapper
      : level === 5
      ? LevelFiveWrapper
      : LevelSixWrapper;

  return (
    <Wrapper css={css} id={id}>
      {children}
    </Wrapper>
  );
}
