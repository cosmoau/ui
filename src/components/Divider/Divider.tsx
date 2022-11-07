import { DefaultProps } from '../../stitches.config';

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
        }),
        ...(props.bottom && {
          marginBottom: `$${props.bottom}`,
        }),
        ...props.css,
      }}
      id={props.id}
    />
  );
}
