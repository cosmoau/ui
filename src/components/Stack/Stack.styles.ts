import { breakpoints, styled } from "../../stitches.config";

export const StackRowStyled = styled("div", {
  "*": {
    boxSizing: "border-box",
  },
  display: "flex",
  flexDirection: "row",
  flexFlow: "row wrap",
  maxWidth: "100%",
  minWidth: "100%",
  width: "100%",
});

export const StackColumnStyled = styled("div", {
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingLeft: "$d",
  paddingRight: "$d",
  width: "100%",

  [breakpoints.tablet]: {
    paddingLeft: "$c",
    paddingRight: "$c",
  },
});

export const StackElementStyled = styled("div", {
  marginBlockEnd: 0,
  marginBlockStart: 0,

  variants: {
    flexduo: {
      true: {
        "*": {
          alignSelf: "center",
          marginBottom: "0",
          marginTop: "0",
          verticalAlign: "middle",
        },
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        verticalAlign: "middle",
      },
    },
  },
});

export default StackElementStyled;
