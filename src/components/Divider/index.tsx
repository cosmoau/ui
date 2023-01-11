import { DividerProps } from "../../types";

import { DividerStyled } from "./Divider.styles";

export default function Divider(props: DividerProps): JSX.Element {
  const { top = "medium", bottom = "medium", css } = props;
  return (
    <DividerStyled
      css={{
        ...(top && {
          marginTop: `$${top}`,
        }),
        ...(bottom && {
          marginBottom: `$${bottom}`,
        }),
        ...css,
      }}
    />
  );
}
