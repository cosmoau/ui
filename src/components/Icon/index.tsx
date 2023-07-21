import { IIcon } from "../../types";

import { IconStyled } from "./styles";

export default function Icon({ css, inline, forceColor, forceSize, children }: IIcon): JSX.Element {
  return (
    <IconStyled
      css={{
        ...(inline && {
          display: "inline-flex",
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
          verticalAlign: "middle",
        }),
        ...(forceColor && {
          svg: {
            color: `$${forceColor} !important`,
          },
        }),
        ...(forceSize && {
          svg: {
            height: `${forceSize}px !important`,
            width: `${forceSize}px !important`,
          },
        }),

        ...css,
      }}>
      {children}
    </IconStyled>
  );
}
