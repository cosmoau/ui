import { breakpoints, DefaultProps } from '../../stitches.config';

import DividerStyled from './Divider.styles';

interface Props extends Omit<DefaultProps, 'spacing'> {
  top?: DefaultProps['spacing'];
  bottom?: DefaultProps['spacing'];
  theme?: 'border' | 'borderHover';
}

export default function Divider(props: Props): JSX.Element {
  return (
    <DividerStyled
      css={{
        backgroundColor: props.theme ? `$${props.theme}` : '$border',
        ...(props.top && {
          marginTop: `$${props.top}`,
          [breakpoints.phone]: {
            marginTop: `calc($${props.top} * 0.8)`,
          },
          [breakpoints.tabletX]: {
            marginTop: `calc($${props.top} * 0.9)`,
          },
        }),
        ...(props.bottom && {
          marginBottom: `$${props.bottom}`,
          [breakpoints.phone]: {
            marginBottom: `calc($${props.bottom} * 0.8)`,
          },
          [breakpoints.tabletX]: {
            marginBottom: `calc($${props.bottom} * 0.9)`,
          },
        }),
        ...props.css,
      }}
      id={props.id}
    />
  );
}
