import { IText } from "../../types";

import { TextStyled } from "./styles";

export default function Text({
  accent,
  top,
  bottom,
  highlight,
  inline,
  as,
  override,
  css,
  children,
  link,
  ...rest
}: IText): JSX.Element {
  return (
    <TextStyled
      accent={accent}
      as={override || as || "p"}
      css={{
        ...(top && {
          marginTop: 0,
          paddingTop: `$${top}`,
        }),
        ...(bottom && {
          marginBottom: 0,
          paddingBottom: `$${bottom}`,
        }),
        ...(inline && {
          alignSelf: "center",
          display: "inline-flex",
          marginBottom: "0 !important",
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
          verticalAlign: "middle",
        }),

        ...css,
      }}
      highlight={highlight}
      link={link}
      size={as || "p"}
      {...rest}>
      {children}
    </TextStyled>
  );
}
