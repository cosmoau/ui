import { fadeIn, fadeOut, styled } from "../../stitches.config";

export const ToastStyled = styled("div", {
  backgroundColor: "$background",
  border: "0.1rem solid $border",
  borderRadius: "$small",
  boxShadow: "$large",
  cursor: "pointer",
  fontSize: "$small",
  margin: "$small auto 0 auto !important",
  maxWidth: "60%",
  padding: "$smallest $small",
  phone: {
    maxWidth: "80%",
  },
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
  width: "fit-content",
});

export const ToastContainerStyled = styled("div", {
  bottom: "$medium",
  left: 0,
  phone: {
    bottom: "auto",
    top: "$medium",
  },
  pointerEvents: "none",
  position: "fixed",
  right: 0,
  textAlign: "center",
  userSelect: "none",

  zIndex: "$toast",
});

export default ToastStyled;
