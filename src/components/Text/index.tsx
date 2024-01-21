import { Fragment } from "react";
import Balancer from "react-wrap-balancer";

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
  balanced,
  link,
  ...rest
}: IText): JSX.Element {
  const TextBalancer = balanced ? Balancer : Fragment;

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
          // as is not strong or span
          ...(as !== "strong" &&
            as !== "span" && {
              alignSelf: "center",
              display: "inline-flex",
              marginBottom: "0 !important",
              verticalAlign: "middle",
            }),
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
        }),

        ...css,
      }}
      highlight={highlight}
      link={link}
      size={as || "p"}
      {...rest}>
      <TextBalancer>{children}</TextBalancer>
    </TextStyled>
  );
}
