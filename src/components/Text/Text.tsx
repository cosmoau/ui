import { ReactNode } from 'react';

import { breakpoints, DefaultProps } from '../../stitches.config';

import { TextStyled, TextSizes } from './Text.styles';

interface Props extends Omit<DefaultProps, 'spacing'> {
  children: ReactNode;
  bold?: boolean;
  accent?: boolean;
  as?: keyof typeof TextSizes;
  override?: keyof typeof TextSizes;
  top?: DefaultProps['spacing'];
  bottom?: DefaultProps['spacing'];
  inline?: DefaultProps['spacing'] | 'auto';
}

export default function Text(props: Props): JSX.Element {
  return (
    <TextStyled
      accent={props.accent}
      as={props.override || props.as || 'p'}
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
            marginRight: props.inline === 'auto' ? 'auto' : `calc($${props.inline} * 0.9)`,
          },
        }),

        ...props.css,
      }}
      size={props.as || 'p'}>
      {props.children}
    </TextStyled>
  );
}
