import { ReactNode } from 'react';

import { DefaultProps, theme } from '../../stitches.config';

import { ViewStyled, ViewContainerStyled } from './View.styles';

interface Props extends Omit<DefaultProps, 'spacing'> {
  children: ReactNode;
  container?: boolean;
  top?: DefaultProps['spacing'];
  bottom?: DefaultProps['spacing'];
  inverted?: boolean;
  soft?: boolean;
}

export default function View(props: Props): JSX.Element {
  return (
    <ViewStyled
      className={props.inverted ? theme.toString() : undefined}
      css={{
        backgroundColor: props.soft ? '$soft' : '$background',
        ...(props.top && {
          marginTop: 0,
          paddingTop: `$${props.top}`,
        }),
        ...(props.bottom && {
          marginBottom: 0,
          paddingBottom: `$${props.bottom}`,
        }),
        ...props.css,
      }}>
      <ViewContainerStyled container={props.container}>{props.children}</ViewContainerStyled>
    </ViewStyled>
  );
}
