// import React from 'react';
import { ReactNode } from 'react';

import { breakpoints, DefaultProps, theme } from '../../stitches.config';

import { ViewStyled, ViewContainerStyled } from './View.styles';

interface Props extends Omit<DefaultProps, 'spacing'> {
  children: ReactNode;
  container?: boolean;
  top?: DefaultProps['spacing'];
  bottom?: DefaultProps['spacing'];
  inverted?: boolean;
}

export default function View(props: Props): JSX.Element {
  return (
    <ViewStyled
      className={props.inverted ? theme.toString() : undefined}
      css={{
        ...props.css,
        backgroundColor: '$background',
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
                : `calc($${props.bottom} * 0.9)`,
          },
        }),
      }}
      id={props.id}>
      <ViewContainerStyled container={props.container}>
        {props.children}
      </ViewContainerStyled>
    </ViewStyled>
  );
}
