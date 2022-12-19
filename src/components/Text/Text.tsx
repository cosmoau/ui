import { ReactNode } from 'react';

import { DefaultProps } from '../../stitches.config';

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
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaTitle?: string;
}

export default function Text(props: Props): JSX.Element {
  if (props.as === 'a' && !props.ariaLabel) {
    throw new Error('Text component with as="a" requires ariaLabel prop');
  }
  if (props.as === 'a' && !props.ariaLabelledBy) {
    throw new Error('Text component with as="a" requires ariaLabelledBy prop');
  }
  if (props.as === 'a' && !props.ariaTitle) {
    throw new Error('Text component with as="a" requires ariaTitle prop');
  }

  return (
    <TextStyled
      accent={props.accent}
      aria-label={props.ariaLabel || undefined}
      aria-labelledby={props.ariaLabelledBy || undefined}
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
        }),

        ...props.css,
      }}
      size={props.as || 'p'}
      title={props.ariaTitle || undefined}>
      {props.children}
    </TextStyled>
  );
}
