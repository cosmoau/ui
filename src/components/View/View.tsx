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
        ...(props.top && {
          paddingTop: `$${props.top}`,
          [breakpoints.phone]: {
            paddingTop: `calc($${props.top} * 0.8)`,
          },
          [breakpoints.tabletX]: {
            paddingTop: `calc($${props.top} * 0.9)`,
          },
        }),
        ...(props.bottom && {
          paddingBottom: `$${props.bottom}`,
          [breakpoints.phone]: {
            paddingBottom: `calc($${props.bottom} * 0.8)`,
          },
          [breakpoints.tabletX]: {
            paddingBottom: `calc($${props.bottom} * 0.9)`,
          },
        }),
        ...props.css,
      }}
      id={props.id}>
      <ViewContainerStyled container={props.container}>
        {props.children}
      </ViewContainerStyled>
    </ViewStyled>
  );
}
