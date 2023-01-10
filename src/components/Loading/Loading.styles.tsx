import { styled } from "../../stitches.config";

export const LoadingOverlayStyled = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  pointerEvents: "none",
  userSelect: "none",

  variants: {
    vertical: {
      top: {
        top: "$medium",
        bottom: "auto",
      },
      bottom: {
        top: "auto",
        bottom: "$medium",
      },
    },
    horizontal: {
      left: {
        left: "$medium",
        right: "auto",
      },
      right: {
        left: "auto",
        right: "$medium",
      },
    },
  },
});
