import { IIcon } from "../../types";

import { IconStyled } from "./styles";

export default function Icon({
  css,
  inline,
  forceColor,
  forceSize = 20,
  children,
}: IIcon): JSX.Element {
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
        svg: {
          height: `${forceSize}px `,
          width: `${forceSize}px`,
        },

        ...css,
      }}>
      {children}
    </IconStyled>
  );
}
