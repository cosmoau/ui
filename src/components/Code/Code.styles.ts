import { breakpoints, styled } from "../../stitches.config";

export const CodeStyled = styled("div", {
  alignContent: "center",
  border: "0.1rem solid $border !important",
  borderRadius: "$small",
  display: "flex",
  justifyContent: "space-between",
  padding: "$smaller $small",
  width: "100%",

  [breakpoints.tablet]: {
    display: "block",
    padding: "$small",
  },
});

export const CodeBlockStyled = styled("code", {
  alignSelf: "center",
  fontSize: "$default !important",
  [breakpoints.tablet]: {
    display: "block",
    minWidth: "100%",
  },
});

export const CodeFunctionStyled = styled("div", {
  minWidth: "10rem",
  textAlign: "right",

  [breakpoints.tablet]: {
    button: {
      display: "block",
      width: "100%",
    },
    display: "block",
    marginTop: "$small",
    minWidth: "100%",

    textAlign: "left",
  },
});

export default CodeStyled;
