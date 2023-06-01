import { IIcon } from "../../types";

import { IconStyled } from "./Icon.styles";

export default function Icon({ css, inline, forceSize, children }: IIcon): JSX.Element {
  return (
    <IconStyled
      css={{
        ...(inline && {
          display: "inline-flex",
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
          verticalAlign: "middle",
        }),
        ...(forceSize && {
          height: `$${forceSize}`,
          width: `$${forceSize}`,
        }),
        ...css,
      }}>
      {children}
    </IconStyled>
  );
}
