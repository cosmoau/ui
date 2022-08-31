import React, { ReactNode } from 'react';

import { breakpoints, DefaultProps, theme } from '../../stitches.config';

import { ViewStyled, ViewContainerStyled } from './View.styles';

export interface Props extends Omit<DefaultProps, 'spacing'> {
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
        backgroundColor: props.inverted ? '$inverted !important' : '$background',
        ...(props.top && {
          paddingTop: `$${props.top}`,
          [breakpoints.phone]: {
            paddingTop: props.top !== ('8' || '9') ? `calc($${props.top} * 0.9)` : `calc($${props.top} * 0.8)`,
          },
        }),
        ...(props.bottom && {
          [breakpoints.phone]: {
            paddingBottom: props.bottom !== ('8' || '9') ? `calc($${props.bottom} * 0.9)` : `calc($${props.bottom} * 0.8)`,
          },
          paddingBottom: `$${props.bottom}`,
        }),
      }}
      id={props.id}>
      <ViewContainerStyled container={props.container}>{props.children}</ViewContainerStyled>
    </ViewStyled>
  );
}
