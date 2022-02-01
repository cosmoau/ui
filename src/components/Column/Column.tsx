import type * as Stitches from '@stitches/react';
import React from 'react';

import { styled, breakpoints } from '../../stitches.config';

export interface Props {
  className?: string;
  css?: Stitches.CSS;
  id?: string;
  baseWidth?: number;
  phoneWidth?: number;
  tabletWidth?: number;
  laptopWidth?: number;
  desktopWidth?: number;
  wideWidth?: number;
  offset?: number;
  baseOffset?: number;
  phoneOffset?: number;
  tabletOffset?: number;
  laptopOffset?: number;
  desktopOffset?: number;
  wideOffset?: number;
  align?: 'left' | 'center' | 'right' | 'justify' | 'initial' | 'inherit';
  top?: 1 | 2 | 3 | 4 | 5 | 6;
  bottom?: 1 | 2 | 3 | 4 | 5 | 6;
  minimal?: boolean;
  children: React.ReactNode;
}

export default function Column({
  id,
  css,
  baseWidth = 100,
  phoneWidth,
  tabletWidth,
  laptopWidth,
  desktopWidth,
  wideWidth,
  baseOffset = 0,
  phoneOffset,
  tabletOffset,
  laptopOffset,
  desktopOffset,
  wideOffset,
  align = 'left',
  top,
  bottom,
  minimal,
  children,
}: Props): JSX.Element {
  const ColumnWrapper = styled('div', {
    margin: 'auto',
    display: 'inline-block',
    flex: '1 1 auto',
    marginLeft: 0,
    maxWidth: '100%',
    width: '100%',
    marginBottom: 0,
    paddingLeft: minimal ? 0 : '$3',
    paddingRight: minimal ? 0 : '$3',
    paddingTop: top ? `$${top}` : 'inherit',
    paddingBottom: bottom ? `$${bottom}` : 'inherit',
    textAlign: align,

    [breakpoints.phone]: {
      maxWidth: phoneWidth ? `${phoneWidth}%` : `100%`,
      flex: phoneWidth ? `0 0 ${phoneWidth}%` : `0 0 100%`,
      marginLeft: phoneOffset ? `${phoneOffset}%` : 0,
    },

    [breakpoints.tabletX]: {
      maxWidth: tabletWidth ? `${tabletWidth}%` : `${baseWidth}%`,
      flex: tabletWidth ? `0 0 ${tabletWidth}%` : `0 0 ${baseWidth}%`,
      marginLeft: tabletOffset ? `${tabletOffset}%` : `${baseOffset}%`,
    },

    [breakpoints.tablet]: {
      maxWidth: `${baseWidth}%`,
      flex: `0 0 ${baseWidth}%`,
      marginLeft: `${baseOffset}%`,
    },

    [breakpoints.laptopX]: {
      maxWidth: laptopWidth ? `${laptopWidth}%` : `${baseWidth}%`,
      flex: laptopWidth ? `0 0 ${laptopWidth}%` : `0 0 ${baseWidth}%`,
      marginLeft: laptopOffset ? `${laptopOffset}%` : `${baseOffset}%`,
    },

    [breakpoints.desktopX]: {
      maxWidth: desktopWidth ? `${desktopWidth}%` : `${baseWidth}%`,
      flex: desktopWidth ? `0 0 ${desktopWidth}%` : `0 0 ${baseWidth}%`,
      marginLeft: desktopOffset ? `${desktopOffset}%` : `${baseOffset}%`,
    },

    [breakpoints.wide]: {
      maxWidth: `${wideWidth}%`,
      flex: `0 0 ${wideWidth}%`,
      marginLeft: `${wideOffset}%`,
    },
  });

  return (
    <ColumnWrapper css={css} id={id}>
      {children}
    </ColumnWrapper>
  );
}
