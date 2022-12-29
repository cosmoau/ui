import { breakpoints, fadeIn, fadeOut, styled } from "../../stitches.config";
import { TextSizes } from "../Text/Text.styles";

export const ToastStyled = styled("div", {
  backgroundColor: "$background",
  border: "0.1rem solid $border",
  borderRadius: "$a",
  boxShadow: "$c",
  cursor: "pointer",
  height: "auto",
  justifyContent: "center",
  textAlign: "center",
  width: "auto",
  ...TextSizes.p,
  margin: "$c auto 0 auto !important",
  maxWidth: "60%",
  overflow: "hidden",
  padding: "$a $c",
  position: "relative",
  transition: "$default",

  [breakpoints.phone]: {
    maxWidth: "100%",
  },
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .2s linear`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeIn} .2s linear`,
        animationFillMode: "forwards",
      },
    },
  },
});

export const ToastContainerStyled = styled("div", {
  bottom: "$d",
  left: "$d",
  position: "fixed",

  right: "$d",

  zIndex: "$toast",
});

export default ToastStyled;
