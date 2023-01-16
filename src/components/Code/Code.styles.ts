import { breakpoints, styled } from "../../stitches.config";

export const CodeStyled = styled("div", {
  border: "0.1rem solid $border !important",
  borderRadius: "$small",
  padding: "$smaller $small",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",

  [breakpoints.tablet]: {
    display: "block",
    padding: "$small",
  },
});

export const CodeBlockStyled = styled("code", {
  alignSelf: "center",
  [breakpoints.tablet]: {
    display: "block",
    minWidth: "100%",
  },
});

export const CodeFunctionStyled = styled("div", {
  minWidth: "10rem",
  textAlign: "right",

  [breakpoints.tablet]: {
    display: "block",
    textAlign: "left",
    minWidth: "100%",
    marginTop: "$small",

    button: {
      width: "100%",
      display: "block",
    },
  },
});

export default CodeStyled;
