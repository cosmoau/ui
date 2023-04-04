import { DividerProps } from "../../types";

import { DividerStyled } from "./Divider.styles";

export function Divider(props: DividerProps): JSX.Element {
  const { top, bottom, css, ...rest } = props;

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
      {...rest}
    />
  );
}
