import { DefaultProps } from "../../stitches.config";

import DividerStyled from "./Divider.styles";

interface Props extends Omit<DefaultProps, "spacing"> {
  top?: DefaultProps["spacing"];
  bottom?: DefaultProps["spacing"];
}

export default function Divider(props: Props): JSX.Element {
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
