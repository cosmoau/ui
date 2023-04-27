import { fadeIn, fadeOut, styled } from "../../stitches.config";

export const CommandStyled = styled("div", {
  display: "inline-block",
  position: "relative",
  verticalAlign: "middle",
});

export const CommandOverlayStyled = styled("div", {
  backgroundColor: "rgba(116, 116, 121, 0.4)",
  bottom: 0,
  left: 0,
  overflowY: "scroll",
  position: "fixed",
  right: 0,
  top: 0,
  transition: "$default",
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .3s linear`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeIn} .2s linear`,
        animationFillMode: "forwards",
      },
    },
  },
  width: "100vw",
  zIndex: "$dialog",
});

export const CommandContentStyled = styled("div", {
  backgroundColor: "$background",
  borderRadius: "$medium",
  boxShadow: "$large",
  left: "50%",
  maxHeight: "60vh",
  overflowX: "hidden",
  overflowY: "auto",
  padding: "$large",
  phone: {
    maxWidth: "90%",
    minWidth: "90%",
    padding: "calc($large - $small) $medium",
  },
  position: "fixed",
  textAlign: "left",
  top: "50%",
  transform: "translate(-50%, -50%)",
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
  width: "40%",
});

export const CommandExitStyled = styled("div", {
  cursor: "pointer",
  padding: "$smaller",
  position: "absolute",
  right: 0,
  top: 0,
});

export default CommandStyled;
