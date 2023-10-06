import { IIconWrapper } from "../../types";

import { IconWrapperStyled } from "./styles";

export default function IconWrapper({ css, inline, forceColor, forceSize, children }: IIconWrapper): JSX.Element {
  return (
    <IconWrapperStyled
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
    </IconWrapperStyled>
  );
}
