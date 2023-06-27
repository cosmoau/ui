import { IDivider } from "../../types";

import { DividerStyled } from "./Divider.styles";

export default function Divider({ top, bottom, css, ...rest }: IDivider): JSX.Element {
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
