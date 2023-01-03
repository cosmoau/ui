import { ArrowSquareOut } from "phosphor-react";

import { Loading } from "../../index";
import { ButtonProps } from "../../types";

import { ButtonIconStyled, ButtonStyled } from "./Button.styles";

export default function Button(props: ButtonProps): JSX.Element {
  const {
    external,
    icon,
    iconPosition,
    loading,
    small,
    theme,
    disabled,
    inline,
    children,
    ariaLabel,
    name,
    block,
    css,
    onClick,
  } = props;
  return (
    <ButtonStyled
      aria-label={ariaLabel || name || typeof children === "string" ? children?.toString() : ""}
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
      name={name}
      small={small}
      theme={theme || "default"}
      onClick={onClick}>
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
          <ArrowSquareOut />
        </ButtonIconStyled>
      )}
    </ButtonStyled>
  );
}
