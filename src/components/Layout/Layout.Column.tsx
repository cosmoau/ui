import { CSS } from '@stitches/react/types/css-util';
import React, { ReactNode } from 'react';

import { styled, breakpoints } from '../../stitches.config';

export interface Props {
  align?: 'left' | 'center' | 'right' | 'justify' | 'initial' | 'inherit';
  bottom?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: ReactNode;
  css?: CSS;
  id?: string;
  minimal?: boolean;
  offset?: number;
  offsetDesktop?: number;
  offsetLaptop?: number;
  offsetPhone?: number;
  offsetTablet?: number;
  offsetWide?: number;
  top?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  width?: number;
  widthDesktop?: number;
  widthLaptop?: number;
  widthPhone?: number;
  widthTablet?: number;
  widthWide?: number;
}

export default function Column({
  align = 'inherit',
  bottom,
  children,
  css,
  id,
  minimal,
  offset = 0,
  offsetDesktop,
  offsetLaptop,
  offsetPhone,
  offsetTablet,
  offsetWide,
  top,
  width = 100,
  widthDesktop,
  widthLaptop,
  widthPhone,
  widthTablet,
  widthWide,
}: Props): JSX.Element {
  const Wrapper = styled('div', {
    margin: '0 auto',
    display: 'inline-block',
    flex: '1 1 auto',
    marginLeft: 0,
    maxWidth: '100%',
    width: '100%',
    marginBottom: 0,
    paddingLeft: minimal ? 0 : '$6',
    paddingRight: minimal ? 0 : '$6',
    paddingTop: top ? `$${top}` : 0,
    paddingBottom: bottom ? `$${bottom}` : 0,
    textAlign: align,

    [breakpoints.phone]: {
      maxWidth: widthPhone ? `${widthPhone}%` : `100%`,
      flex: widthPhone ? `0 0 ${widthPhone}%` : `0 0 100%`,
      marginLeft: offsetPhone ? `${offsetPhone}%` : 0,
    },

    [breakpoints.tabletX]: {
      maxWidth: widthTablet ? `${widthTablet}%` : `${width}%`,
      flex: widthTablet ? `0 0 ${widthTablet}%` : `0 0 ${width}%`,
      marginLeft: offsetTablet ? `${offsetTablet}%` : `${offset}%`,
    },

    [breakpoints.laptopX]: {
      maxWidth: widthLaptop ? `${widthLaptop}%` : `${width}%`,
      flex: widthLaptop ? `0 0 ${widthLaptop}%` : `0 0 ${width}%`,
      marginLeft: offsetLaptop ? `${offsetLaptop}%` : `${offset}%`,
    },

    [breakpoints.desktopX]: {
      maxWidth: widthDesktop ? `${widthDesktop}%` : `${width}%`,
      flex: widthDesktop ? `0 0 ${widthDesktop}%` : `0 0 ${width}%`,
      marginLeft: offsetDesktop ? `${offsetDesktop}%` : `${offset}%`,
    },

    [breakpoints.wide]: {
      maxWidth: widthWide ? `${widthWide}%` : `${width}%`,
      flex: widthWide ? `0 0 ${widthWide}%` : `0 0 ${width}%`,
      marginLeft: offsetWide ? `${offsetWide}%` : `${offset}%`,
    },
  });

  if (offsetTablet !== undefined) {
    console.warn(0);
  }

  return (
    <Wrapper css={css} id={id}>
      {children}
    </Wrapper>
  );
}
