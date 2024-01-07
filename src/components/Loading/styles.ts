import { styled } from "../../stitches.config";

export const LoadingOverlayStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$defaultTable",
  border: "0.1rem solid $border",
  borderRadius: "$small",
  bottom: "$medium",
  boxShadow: "$large",
  display: "flex",
  justifyContent: "center",
  padding: "$smaller $small",
  pointerEvents: "none",
  position: "fixed",
  right: "$medium",
  userSelect: "none",
  zIndex: 1000,
});

export const LoadingOverlayTitledStyled = styled("div", {
  marginLeft: "$small",
});
