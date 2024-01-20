import { styled } from "../../stitches.config";

export const UploadStyled = styled("div", {
  border: "0.1rem solid $border",
  borderRadius: "$small",
});

export const UploadCoreStyled = styled("div", {
  padding: "$small",
  width: "100%",
});

export const UploadInputStyled = styled("input", {
  display: "none",
});

export const UploadFooterStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$defaultTable",
  borderTop: "0.1rem solid $border",
  display: "flex",
  justifyContent: "space-between",
  padding: "$small",
  width: "100%",
});
