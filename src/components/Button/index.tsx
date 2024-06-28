import { Icons } from "../../icons";
import { Loading } from "../../index";
import { IButton } from "../../types";

import { ButtonIconStyled, ButtonStyled } from "./styles";

export default function Button({
  icon,
  iconPosition,
  loading,
  small,
  theme,
  disabled,
  inline,
  children,
  block,
  external,
  css,
  onClick,
  ...rest
}: IButton): JSX.Element {
  return (
    <ButtonStyled
      block={block}
      css={{
        ...(inline && {
          alignSelf: "center",
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
          verticalAlign: "middle",
        }),
        ...css,
      }}
      disabled={disabled || loading || false}
      small={small}
      theme={theme || "default"}
      onClick={!disabled ? onClick : undefined}
      {...rest}>
      {loading && (
        <ButtonIconStyled align="left">
          <Loading />
        </ButtonIconStyled>
      )}
      {icon && (iconPosition === "left" || !iconPosition) && !external && (
        <ButtonIconStyled align="left">{icon}</ButtonIconStyled>
      )}
      {children}
      {icon && iconPosition === "right" && !external && (
        <ButtonIconStyled align="right">{icon}</ButtonIconStyled>
      )}
      {external && (
        <ButtonIconStyled align="right">
          <Icons.ArrowUpRight />
        </ButtonIconStyled>
      )}
    </ButtonStyled>
  );
}
