import { useState, type JSX } from "react";
import { toast } from "react-hot-toast";

import { Icons } from "../../icons";
import { Loading } from "../../index";
import { IBadge } from "../../types";
import { BadgeIconStyled, BadgeStyled, BadgeLoadingStyled } from "./styles";

export default function Badge({
  block,
  children,
  closable,
  copy,
  css,
  icon,
  iconPosition,
  inline,
  link,
  loading,
  onClick,
  small,
  theme,
}: IBadge): JSX.Element | null {
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 250);
  }

  function handleCopy(): void {
    if (copy) {
      navigator.clipboard.writeText(
        copy?.toString() ||
          "There was an error copying that value. Try again, or manually copy it.",
      );
      toast("Copied to clipboard");
    } else {
      toast("Nothing to copy");
    }
  }

  if (!isMounted) return null;

  return (
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
      link={link || !!onClick || !!copy}
      small={small}
      theme={theme || "default"}
      onClick={copy ? (): void => handleCopy() : onClick}>
      {icon && iconPosition !== "right" && !copy && (
        <BadgeIconStyled align={small ? "smallLeft" : "left"}>{icon}</BadgeIconStyled>
      )}
      {copy && (
        <BadgeIconStyled align={small ? "smallLeft" : "left"}>
          <Icons.ClipboardText style={{ cursor: "pointer" }} />
        </BadgeIconStyled>
      )}

      {loading ? (
        <BadgeLoadingStyled>
          <Loading />
        </BadgeLoadingStyled>
      ) : (
        children || ""
      )}
      {icon && iconPosition === "right" && !closable && !copy && (
        <BadgeIconStyled align={small ? "smallRight" : "right"}>{icon}</BadgeIconStyled>
      )}

      {closable && (
        <BadgeIconStyled align={small ? "smallRight" : "right"} onClick={(): void => handleClose()}>
          <Icons.X style={{ cursor: "pointer" }} />
        </BadgeIconStyled>
      )}
    </BadgeStyled>
  );
}
