import { DividerProps } from "./Divider.props";
import DividerStyled from "./Divider.styles";

export default function Divider(props: DividerProps): JSX.Element {
  return (
    <DividerStyled
      css={{
        ...(props.top && {
          marginTop: `$${props.top}`,
        }),
        ...(props.bottom && {
          marginBottom: `$${props.bottom}`,
        }),
        ...props.css,
      }}
    />
  );
}
