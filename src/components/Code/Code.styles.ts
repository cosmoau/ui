import { breakpoints, styled } from "../../stitches.config";

export const CodeStyled = styled("div", {
  border: "0.1rem solid $border !important",
  borderRadius: "$small",
  padding: "$small",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",

  [breakpoints.tablet]: {
    display: "block",
  },
});

export const CodeBlockStyled = styled("code", {
  flex: "1 1 auto",

  [breakpoints.tablet]: {
    display: "block",
    flex: "0 0 auto",
    minWidth: "100%",
  },
});

export const CodeFunctionStyled = styled("div", {
  minWidth: "10rem",
  textAlign: "right",

  [breakpoints.tablet]: {
    marginTop: "$small",
    display: "block",
    textAlign: "left",
    minWidth: "100%",

    button: {
      width: "100%",
      display: "block",
    },
  },
});

export default CodeStyled;
