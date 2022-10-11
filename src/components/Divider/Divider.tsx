import React from 'react';

import { breakpoints, DefaultProps } from '../../stitches.config';

import { DividerStyled } from './Divider.styles';

export interface Props extends Omit<DefaultProps, 'spacing'> {
  top?: DefaultProps['spacing'];
  bottom?: DefaultProps['spacing'];
  theme?: 'border' | 'borderHover';
}

export default function Divider(props: Props): JSX.Element {
  return (
    <DividerStyled
      css={{
        ...props.css,
        backgroundColor: props.theme ? `$${props.theme}` : '$border',
        ...(props.top && {
          marginTop: `$${props.top}`,
          [breakpoints.phone]: {
            marginTop:
              props.top !== ('8' || '9')
                ? `calc($${props.top} * 0.8)`
                : `calc($${props.top} * 0.75)`,
          },
          [breakpoints.tabletX]: {
            marginTop:
              props.top !== ('8' || '9')
                ? `calc($${props.top} * 0.9)`
                : `calc($${props.top} * 0.85)`,
          },
        }),
        ...(props.bottom && {
          marginBottom: `$${props.bottom}`,
          [breakpoints.phone]: {
            marginBottom:
              props.bottom !== ('8' || '9')
                ? `calc($${props.bottom} * 0.8)`
                : `calc($${props.bottom} * 0.75)`,
          },
          [breakpoints.tabletX]: {
            marginBottom:
              props.bottom !== ('8' || '9')
                ? `calc($${props.bottom} * 0.9)`
                : `calc($${props.bottom} * 0.85)`,
          },
        }),
      }}
      id={props.id}
    />
  );
}
