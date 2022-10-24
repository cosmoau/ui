// import React from 'react';
import { ReactNode } from 'react';

import { breakpoints, DefaultProps } from '../../stitches.config';

import { TextStyled } from './Text.styles';

interface Props extends Omit<DefaultProps, 'spacing'> {
  children: ReactNode;
  bold?: boolean;
  accent?: boolean;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'span';
  override?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'span';
  top?: DefaultProps['spacing'];
  bottom?: DefaultProps['spacing'];
  inline?: DefaultProps['spacing'] | 'auto';
  link?: 'border' | 'borderHover' | 'accent';
}

export default function Text(props: Props): JSX.Element {
  return (
    <TextStyled
      accent={props.accent}
      as={props.override || props.as}
      bold={props.bold}
      css={{
        ...props.css,
        ...(props.top && {
          paddingTop: `$${props.top}`,
          [breakpoints.phone]: {
            marginTop: props.top ? '0 !important' : 'inherit',
            paddingTop:
              props.top !== ('6' || '7' || '8' || '9')
                ? `calc($${props.top} * 0.8)`
                : `calc($${props.top} * 0.75)`,
          },
          [breakpoints.tabletX]: {
            marginTop: props.top ? '0 !important' : 'inherit',
            paddingTop:
              props.top !== ('6' || '7' || '8' || '9')
                ? `calc($${props.top} * 0.9)`
                : `calc($${props.top} * 0.85)`,
          },
        }),
        ...(props.bottom && {
          [breakpoints.phone]: {
            marginBottom: props.bottom ? '0 !important' : 'inherit',
            paddingBottom:
              props.bottom !== ('6' || '7' || '8' || '9')
                ? `calc($${props.bottom} * 0.8)`
                : `calc($${props.bottom} * 0.75)`,
          },
          [breakpoints.tabletX]: {
            marginBottom: props.bottom ? '0 !important' : 'inherit',
            paddingBottom:
              props.bottom !== ('6' || '7' || '8' || '9')
                ? `calc($${props.bottom} * 0.9)`
                : `calc($${props.bottom} * 0.9)`,
          },
          paddingBottom: `$${props.bottom}`,
        }),
        ...(props.inline && {
          alignSelf: 'center',
          display: 'inline-flex',
          marginBottom: '0 !important',
          marginRight: props.inline === 'auto' ? 'auto' : `$${props.inline}`,

          [breakpoints.phone]: {
            marginRight:
              props.inline === 'auto' ? 'auto' : `calc($${props.inline} * 0.8)`,
          },
        }),
        ...(props.link && {
          '&:hover': {
            color: '$accent',
            opacity: 0.7,
          },
          'borderBottom':
            props.link === 'borderHover'
              ? '0.1rem solid $borderHover'
              : props.link === 'border'
              ? '0.1rem solid $border'
              : 'none',

          'transition': '$default',
        }),
      }}
      size={props.as}>
      {props.children}
    </TextStyled>
  );
}
