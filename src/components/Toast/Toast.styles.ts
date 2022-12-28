import { fadeIn, fadeOut, styled } from "../../stitches.config";
import { TextSizes } from "../Text/Text.styles";

export const ToastStyled = styled("div", {
  backgroundColor: "$background",
  border: "0.1rem solid $border",
  borderRadius: "$a",
  boxShadow: "$c",
  cursor: "pointer",
  height: "auto",
  justifyContent: "center",
  marginTop: "$c",
  textAlign: "center",
  ...TextSizes.p,
  marginBottom: "0 !important",

  overflow: "hidden",
  padding: "$a $c",
  position: "relative",
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
});

export const ToastContainerStyled = styled("div", {
  bottom: "$b",
  left: "50%",
  position: "fixed",
  transform: "translateX(-50%)",
  zIndex: "$toast",
});

export default ToastStyled;
