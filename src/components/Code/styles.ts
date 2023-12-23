import { styled } from "../../stitches.config";

export const CodeStyled = styled("div", {
  alignContent: "center",
  border: "0.1rem solid $border !important",
  borderRadius: "$large",
  display: "flex",
  justifyContent: "space-between",
  padding: "$small $medium",
  tablet: {
    display: "block",
  },

  width: "100%",
});

export const CodeBlockStyled = styled("code", {
  alignSelf: "center",
  fontSize: "$small",
  tablet: {
    display: "block",
    width: "100%",
  },
});

export const CodeFunctionStyled = styled("div", {
  tablet: {
    button: {
      display: "block",
      textAlign: "center",
      width: "100%",
    },
    display: "block",
    marginTop: "$small",
    width: "100%",
  },
  textAlign: "right",
  width: "10rem",
});

export default CodeStyled;
