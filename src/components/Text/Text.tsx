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
        ...(props.top && {
          marginTop: 0,
          paddingTop: `$${props.top}`,
        }),
        ...(props.bottom && {
          marginBottom: 0,
          paddingBottom: `$${props.bottom}`,
        }),
        ...(props.inline && {
          alignSelf: 'center',
          display: 'inline-flex',
          marginBottom: '0 !important',
          marginRight: props.inline === 'auto' ? 'auto' : `$${props.inline}`,
          verticalAlign: 'middle',

          [breakpoints.phone]: {
            marginRight:
              props.inline === 'auto' ? 'auto' : `calc($${props.inline} * 0.9)`,
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
        ...props.css,
      }}
      size={props.as}>
      {props.children}
    </TextStyled>
  );
}
