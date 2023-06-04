import { IIcon } from "../../types";

import { IconStyled } from "./Icon.styles";

export default function Icon({ css, inline, forceColor, forceSize, icon }: IIcon): JSX.Element {
  return (
    <IconStyled
      css={{
        ...(inline && {
          display: "inline-flex",
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
          verticalAlign: "middle",
        }),
        svg: {
          color: forceColor ? `$${forceColor} !important` : "inherit",
          height: forceSize ? `${forceSize}px !important` : "inherit",
          width: forceSize ? `${forceSize}px !important` : "inherit",
        },
        ...css,
      }}>
      {icon}
    </IconStyled>
  );
}
