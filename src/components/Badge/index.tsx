import { Circle, X } from "phosphor-react";
import { useState } from "react";

import { Loading } from "../../index";
import { BadgeProps } from "../../types";

import { BadgeIconStyled, BadgeStyled, BadgeDotStyled, BadgeLoadingStyled } from "./Badge.styles";

export default function Badge(props: BadgeProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 250);
  }

  return isMounted ? (
    <BadgeStyled
      animation={!isOpen}
      css={{
        ...(props.inline && {
          display: "inline-flex",
          marginRight: props.inline === "auto" ? "auto" : `$${props.inline}`,
          verticalAlign: "middle",
        }),
        ...(props.block && {
          justifyContent: "initial",
          width: "100%",
        }),
        ...props.css,
      }}
      onClick={props.onClick}
      theme={props.theme || "default"}>
      {props.icon && (props.iconPosition === "left" || !props.iconPosition) && (
        <BadgeIconStyled align="left">{props.icon}</BadgeIconStyled>
      )}
      {props.dot && (
        <BadgeDotStyled
          dotColor={props.dotColor || props.theme || "default"}
          pulse={props.dot === "pulse"}>
          <Circle weight="fill" />
        </BadgeDotStyled>
      )}
      {props.loading ? (
        <BadgeLoadingStyled>
          <Loading />
        </BadgeLoadingStyled>
      ) : (
        props.children
      )}
      {props.icon && props.iconPosition === "right" && !props.closable && (
        <BadgeIconStyled align="right">{props.icon}</BadgeIconStyled>
      )}
      {props.closable && (
        <BadgeIconStyled align="right" onClick={(): void => handleClose()}>
          <X style={{ cursor: "pointer", opacity: 0.7 }} weight="fill" />
        </BadgeIconStyled>
      )}
    </BadgeStyled>
  ) : (
    <></>
  );
}
