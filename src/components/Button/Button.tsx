import React, { HTMLAttributes, ReactNode } from 'react';

import { breakpoints, DefaultProps } from '../../stitches.config';
import { Loading } from '../Loading';

import { ButtonIconStyled, ButtonStyled } from './Button.styles';

export interface Props extends HTMLAttributes<HTMLButtonElement>, Omit<DefaultProps, 'spacing'> {
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  theme?: 'default' | 'border' | 'minimal' | 'solid';
  block?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  inline?: DefaultProps['spacing'] | 'auto';
  small?: boolean;
}

export default function Button(props: Props): JSX.Element {
  return (
    <ButtonStyled
      css={{
        ...props.css,
        ...(props.inline && {
          display: 'inline-flex',
          marginBottom: '0 !important',
          marginRight: props.inline === 'auto' ? 'auto' : `$${props.inline}`,
          verticalAlign: 'middle',
          alignSelf: 'center',
          [breakpoints.phone]: {
            marginRight: props.inline === 'auto' ? 'auto' : `calc($${props.inline} * 0.8)`,
          },
        }),
      }}
      id={props.id}
      small={props.small}
      block={props.block || false}
      theme={props.theme || 'default'}
      disabled={props.disabled || false}
      onClick={props.onClick}>
      {props.icon && (props.iconPosition === 'left' || !props.iconPosition) && <ButtonIconStyled align='left'>{props.icon}</ButtonIconStyled>}
      {props.loading ? <Loading /> : props.children}
      {props.icon && props.iconPosition === 'right' && <ButtonIconStyled align='right'>{props.icon}</ButtonIconStyled>}
    </ButtonStyled>
  );
}
