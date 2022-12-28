import { ArrowSquareOut } from "phosphor-react";

import { Loading } from "../../index";

import { ButtonProps } from "./Button.props";
import { ButtonIconStyled, ButtonStyled } from "./Button.styles";

export default function Button(props: ButtonProps): JSX.Element {
  return (
    <ButtonStyled
      aria-label={
        props.ariaLabel || props.name || typeof props.children === "string"
          ? props?.children?.toString()
          : ""
      }
      block={props.block}
      css={{
        ...(props.inline && {
          alignSelf: "center",
          marginRight: props.inline === "auto" ? "auto" : `$${props.inline}`,
          verticalAlign: "middle",
        }),

        ...props.css,
      }}
      disabled={props.disabled || props.loading || false}
      name={props.name}
      onClick={props.onClick}
      small={props.small}
      theme={props.theme || "default"}>
      {props.loading && (
        <ButtonIconStyled align="left">
          <Loading />
        </ButtonIconStyled>
      )}
      {props.icon && (props.iconPosition === "left" || !props.iconPosition) && !props.external && (
        <ButtonIconStyled align="left">{props.icon}</ButtonIconStyled>
      )}
      {props.children}
      {props.icon && props.iconPosition === "right" && !props.external && (
        <ButtonIconStyled align="right">{props.icon}</ButtonIconStyled>
      )}
      {props.external && (
        <ButtonIconStyled align="right">
          <ArrowSquareOut />
        </ButtonIconStyled>
      )}
    </ButtonStyled>
  );
}
