import { styled } from "../../stitches.config";

export const CodeStyled = styled("div", {
  alignContent: "center",
  border: "0.1rem solid $border !important",
  borderRadius: "$small",
  display: "flex",
  justifyContent: "space-between",
  padding: "$smaller $small",
  tablet: {
    display: "block",
    padding: "$small",
  },

  width: "100%",
});

export const CodeBlockStyled = styled("code", {
  alignSelf: "center",
  fontSize: "$small",
  tablet: {
    display: "block",
    minWidth: "100%",
  },
});

export const CodeFunctionStyled = styled("div", {
  minWidth: "10rem",
  tablet: {
    button: {
      display: "block",
      textAlign: "center",
      width: "100%",
    },
    display: "block",
    marginTop: "$small",
    minWidth: "100%",
  },
  textAlign: "right",
});

export default CodeStyled;
