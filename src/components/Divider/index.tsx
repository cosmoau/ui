import { IDivider } from "../../types";

import { DividerStyled } from "./Divider.styles";

export function Divider(props: IDivider): JSX.Element {
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
