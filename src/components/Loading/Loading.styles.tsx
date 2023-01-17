import { styled } from "../../stitches.config";

export const LoadingOverlayStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$background",
  border: "0.1rem solid $border",
  borderRadius: "$medium",
  bottom: 0,
  boxShadow: "$medium",
  display: "flex",
  justifyContent: "center",
  left: 0,
  padding: "$smaller",
  pointerEvents: "none",
  position: "fixed",
  right: 0,
  svg: {
    height: "auto",
    width: "auto",
  },
  top: 0,
  userSelect: "none",

  variants: {
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
    vertical: {
      bottom: {
        bottom: "$medium",
        top: "auto",
      },
      top: {
        bottom: "auto",
        top: "$medium",
      },
    },
  },

  zIndex: 1000,
});
