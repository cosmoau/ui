/** @format */

import { Circle } from 'phosphor-react';
import React, { ReactNode } from 'react';

import { breakpoints, DefaultProps } from '../../stitches.config';
import { Loading } from '../Loading';

import { BadgeIconStyled, BadgeStyled, BadgeDotStyled } from './Badge.styles';

export interface Props extends Omit<DefaultProps, 'spacing'> {
  children: ReactNode;
  loading?: boolean;
  theme?:
    | 'red'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'blue'
    | 'green'
    | 'border'
    | 'borderHover';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  inline?: DefaultProps['spacing'] | 'auto';
  dot?: boolean | 'pulse';
  dotColor?: 'red' | 'orange' | 'pink' | 'purple' | 'blue' | 'green' | 'borderHover';
}

export default function Badge(props: Props): JSX.Element {
  return (
    <BadgeStyled
      css={{
        ...props.css,
        ...(props.inline && {
          display: 'inline-flex',
          marginBottom: '0 !important',
          marginRight: props.inline === 'auto' ? 'auto' : `$${props.inline}`,
          [breakpoints.phone]: {
            marginRight:
              props.inline === 'auto' ? 'auto' : `calc($${props.inline} * 0.8)`,
          },
          verticalAlign: 'middle',
        }),
      }}
      id={props.id}
      onClick={props.onClick}
      theme={props.theme || 'default'}>
      {props.icon && (props.iconPosition === 'left' || !props.iconPosition) && (
        <BadgeIconStyled align='left'>{props.icon}</BadgeIconStyled>
      )}
      {props.dot && (
        <BadgeDotStyled
          dotColor={props.dotColor || 'default'}
          pulse={props.dot === 'pulse'}>
          <Circle weight='fill' />
        </BadgeDotStyled>
      )}
      {props.loading ? <Loading /> : props.children}
      {props.icon && props.iconPosition === 'right' && (
        <BadgeIconStyled align='right'>{props.icon}</BadgeIconStyled>
      )}
    </BadgeStyled>
  );
}
