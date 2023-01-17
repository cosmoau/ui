import { breakpoints, fadeIn, fadeOut, styled } from "../../stitches.config";

export const ToastStyled = styled("div", {
  backgroundColor: "$background",
  border: "0.1rem solid $border",
  borderRadius: "$small",
  boxShadow: "$large",
  cursor: "pointer",
  fontSize: "$default",
  margin: "$small auto 0 auto !important",
  maxWidth: "60%",
  padding: "$smallest $small",
  pointerEvents: "all",
  transition: "$default",
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

  [breakpoints.phone]: {
    maxWidth: "100%",
  },
  width: "fit-content",
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
