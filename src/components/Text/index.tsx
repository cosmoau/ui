import { Fragment, type JSX } from "react";
import { Balancer } from "react-wrap-balancer";

import { Icons } from "../../icons";
import { IText } from "../../types";
import Icon from "../Icon";
import { TextStyled } from "./styles";

export default function Text({
  accent,
  as = "p",
  balanced,
  bottom,
  children,
  css,
  highlight,
  href,
  inline,
  link,
  override,
  rel,
  target,
  top,
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
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
        }),

        ...css,
      }}
      highlight={highlight}
      href={as === "a" ? href : undefined}
      inline={inline && !["span", "strong"].includes(as) ? true : false}
      link={link || (as === "a" ? "default" : undefined)}
      rel={as === "a" ? rel : undefined}
      size={as || "p"}
      target={as === "a" ? target : undefined}
      {...rest}>
      <TextBalancer>{children}</TextBalancer>
      {as === "a" && target === "_blank" && (
        <Icon
          css={{
            marginLeft: "$smallest",
            marginTop: "-$smallest",
          }}
          forceSize={18}>
          <Icons.ArrowUpRight weight="regular" />
        </Icon>
      )}
    </TextStyled>
  );
}
