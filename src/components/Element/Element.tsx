import React, { ReactNode } from 'react';

import { breakpoints, DefaultProps } from '../../stitches.config';

import { ElementStyled } from './Element.styles';

export interface Props extends Omit<DefaultProps, 'spacing'> {
  children: ReactNode;
  top?: DefaultProps['spacing'];
  bottom?: DefaultProps['spacing'];
  flexduo?: boolean;
}

export default function Element(props: Props): JSX.Element {
  return (
    <ElementStyled
      css={{
        ...props.css,
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
      flexduo={props.flexduo}
      id={props.id}>
      {props.children}
    </ElementStyled>
  );
}
