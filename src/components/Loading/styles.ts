import { styled } from "../../stitches.config";

export const LoadingOverlayStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$defaultSubtle",
  border: "0.1rem solid $border",
  borderRadius: "$small",
  bottom: "$medium",
  boxShadow: "$large",
  display: "flex",
  justifyContent: "center",
  maxWidth: "60rem",
  padding: "$smaller $small",

  pointerEvents: "none",
  position: "fixed",
  right: "$medium",
  userSelect: "none",

  zIndex: 1000,
  phone: {
    left: "50%",
    maxWidth: "95%",
    textAlign: "center",
    transform: "translateX(-50%)",
    width: "fit-content",
  },
});

export const LoadingOverlayTitledStyled = styled("div", {
  marginLeft: "$small",
});
