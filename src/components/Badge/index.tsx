import { X } from "phosphor-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

import { Loading } from "../../index";
import { IBadge } from "../../types";

import { BadgeIconStyled, BadgeStyled, BadgeLoadingStyled } from "./Badge.styles";

export function Badge(props: IBadge): JSX.Element {
  const {
    closable,
    icon,
    iconPosition,
    loading,
    theme,
    small,
    inline,
    block,
    css,
    onClick,
    children,
    copy,
    copyText,
  } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 250);
  }

  function handleCopy(): void {
    if (copyText) {
      navigator.clipboard.writeText(copyText.toString());
      toast("Copied to clipboard");
    } else {
      toast("Nothing to copy");
    }
  }

  return isMounted ? (
    <BadgeStyled
      animation={!isOpen}
      block={block}
      css={{
        ...(inline && {
          display: "inline-flex",
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
          verticalAlign: "middle",
        }),
        ...css,
      }}
      small={small}
      theme={theme || "default"}
      onClick={copy ? (): void => handleCopy() : onClick}>
      {icon && (iconPosition === "left" || !iconPosition) && (
        <BadgeIconStyled align="left">{icon}</BadgeIconStyled>
      )}

      {loading ? (
        <BadgeLoadingStyled>
          <Loading />
        </BadgeLoadingStyled>
      ) : (
        children || ""
      )}
      {icon && iconPosition === "right" && !closable && (
        <BadgeIconStyled align="right">{icon}</BadgeIconStyled>
      )}
      {closable && (
        <BadgeIconStyled align="right" onClick={(): void => handleClose()}>
          <X style={{ cursor: "pointer" }} />
        </BadgeIconStyled>
      )}
    </BadgeStyled>
  ) : (
    <> </>
  );
}
