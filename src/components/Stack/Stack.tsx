// import React from 'react';
import { ReactNode } from 'react';

import { breakpoints, DefaultProps } from '../../stitches.config';

import { StackColumnStyled, StackRowStyled, StackElementStyled } from './Stack.styles';

interface Props extends Omit<DefaultProps, 'spacing'> {
  children: ReactNode;
  direction?: 'row' | 'column';
  flex?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
  align?: 'left' | 'center' | 'right' | 'justify' | 'initial' | 'inherit';
  minimal?: boolean;
  offset?: number;
  offsetDesktop?: number;
  offsetLaptop?: number;
  offsetPhone?: number;
  offsetTablet?: number;
  offsetWide?: number;
  width?: number;
  widthDesktop?: number;
  widthLaptop?: number;
  widthPhone?: number;
  widthTablet?: number;
  widthWide?: number;
  top?: DefaultProps['spacing'];
  bottom?: DefaultProps['spacing'];
  flexduo?: boolean;
}

export default function Stack(props: Props): JSX.Element {
  const StackElement =
    props.direction === 'row'
      ? StackRowStyled
      : props.direction === 'column'
      ? StackColumnStyled
      : StackElementStyled;

  return (
    <StackElement
      css={{
        ...props.css,
        textAlign: props.align,
        ...(props.top && {
          paddingTop: `$${props.top}`,
          [breakpoints.phone]: {
            paddingTop:
              props.top !== ('6' || '7' || '8' || '9')
                ? `calc($${props.top} * 0.8)`
                : `calc($${props.top} * 0.75)`,
          },
          [breakpoints.tabletX]: {
            paddingTop:
              props.top !== ('6' || '7' || '8' || '9')
                ? `calc($${props.top} * 0.9)`
                : `calc($${props.top} * 0.85)`,
          },
        }),
        ...(props.bottom && {
          paddingBottom: `$${props.bottom}`,
          [breakpoints.phone]: {
            paddingBottom:
              props.bottom !== ('6' || '7' || '8' || '9')
                ? `calc($${props.bottom} * 0.8)`
                : `calc($${props.bottom} * 0.75)`,
          },
          [breakpoints.tabletX]: {
            paddingBottom:
              props.bottom !== ('6' || '7' || '8' || '9')
                ? `calc($${props.bottom} * 0.9)`
                : `calc($${props.bottom} * 0.85)`,
          },
        }),
        ...(props.minimal && {
          paddingLeft: 0 + '!important',
          paddingRight: 0 + '!important',
        }),

        ...(props?.direction === 'column' && {
          [breakpoints.phone]: {
            flex: props.widthPhone ? `0 0 ${props.widthPhone}%` : `0 0 100%`,
            marginLeft: props.offsetPhone ? `${props.offsetPhone}%` : 0,
            width: props.widthPhone ? `${props.widthPhone}%` : `100%`,
          },
          [breakpoints.tabletX]: {
            flex: props.widthTablet ? `0 0 ${props.widthTablet}%` : `0 0 ${props.width}%`,
            marginLeft: props.offsetTablet
              ? `${props.offsetTablet}%`
              : `${props.offset}%`,
            width: props.widthTablet ? `${props.widthTablet}%` : `${props.width}%`,
          },
          [breakpoints.laptopX]: {
            flex: props.widthLaptop ? `0 0 ${props.widthLaptop}%` : `0 0 ${props.width}%`,
            marginLeft: props.offsetLaptop
              ? `${props.offsetLaptop}%`
              : `${props.offset}%`,
            width: props.widthLaptop ? `${props.widthLaptop}%` : `${props.width}%`,
          },
          [breakpoints.desktopX]: {
            flex: props.widthDesktop
              ? `0 0 ${props.widthDesktop}%`
              : `0 0 ${props.width}%`,
            marginLeft: props.offsetDesktop
              ? `${props.offsetDesktop}%`
              : `${props.offset}%`,
            width: props.widthDesktop ? `${props.widthDesktop}%` : `${props.width}%`,
          },
          [breakpoints.wide]: {
            flex: props.widthWide ? `0 0 ${props.widthWide}%` : `0 0 ${props.width}%`,
            marginLeft: props.offsetWide ? `${props.offsetWide}%` : `${props.offset}%`,
            width: props.widthWide ? `${props.widthWide}%` : `${props.width}%`,
          },
        }),
        ...(props?.direction === 'row' && {
          '*': {
            alignItems: props.align,
            flex: props.flex,
            justifyContent: props.align,
          },
        }),
      }}
      flexduo={props.direction === 'row' && props.flexduo}
      id={props.id}>
      {props.children}
    </StackElement>
  );
}
