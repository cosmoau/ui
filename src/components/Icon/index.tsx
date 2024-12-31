import type { JSX } from "react";

import { IIcon } from "../../types";

import { IconStyled } from "./styles";

export const BASE_SIZE = 21;

export default function Icon({
  css,
  inline,
  forceColor,
  forceSize = BASE_SIZE,
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
