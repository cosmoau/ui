import { X } from "phosphor-react";
import { useState } from "react";

import { Loading } from "../../index";
import { BadgeProps } from "../../types";

import { BadgeIconStyled, BadgeStyled, BadgeLoadingStyled } from "./Badge.styles";

export function Badge(props: BadgeProps): JSX.Element {
  const { closable, icon, iconPosition, loading, theme, inline, block, css, onClick, children } =
    props;
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
        ...(inline && {
          display: "inline-flex",
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
          verticalAlign: "middle",
        }),
        ...(block && {
          justifyContent: "initial",
          width: "100%",
        }),
        ...css,
      }}
      theme={theme || "default"}
      onClick={onClick}>
      {icon && (iconPosition === "left" || !iconPosition) && (
        <BadgeIconStyled align="left">{icon}</BadgeIconStyled>
      )}

      {loading ? (
        <BadgeLoadingStyled>
          <Loading />
        </BadgeLoadingStyled>
      ) : (
        children
      )}
      {icon && iconPosition === "right" && !closable && (
        <BadgeIconStyled align="right">{icon}</BadgeIconStyled>
      )}
      {closable && (
        <BadgeIconStyled align="right" onClick={(): void => handleClose()}>
          <X style={{ cursor: "pointer" }} weight="fill" />
        </BadgeIconStyled>
      )}
    </BadgeStyled>
  ) : (
    <> </>
  );
}
