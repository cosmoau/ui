import { ArrowSquareOut } from "phosphor-react";

import { Loading } from "../../index";
import { IButton } from "../../types";

import { ButtonIconStyled, ButtonStyled } from "./Button.styles";

export function Button(props: IButton): JSX.Element {
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
    block,
    css,
    onClick,
    ...rest
  } = props;

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
      onClick={onClick}
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
          <ArrowSquareOut />
        </ButtonIconStyled>
      )}
    </ButtonStyled>
  );
}
