import { breakpoints, fadeIn, fadeOut, styled } from "../../stitches.config";
import { TextSizes } from "../Text/Text.styles";

export const ToastStyled = styled("div", {
  backgroundColor: "$background",
  border: "0.1rem solid $border",
  borderRadius: "$small",
  boxShadow: "large",
  cursor: "pointer",
  width: "fit-content",
  ...TextSizes.p,
  margin: "$medium auto 0 auto !important",
  maxWidth: "60%",
  padding: "$smallest $small",
  pointerEvents: "all",
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
  bottom: "$medium",
  left: "0",
  pointerEvents: "none",
  position: "fixed",
  right: "0",
  textAlign: "center",
  userSelect: "none",
  zIndex: "$toast",
});

export default ToastStyled;
