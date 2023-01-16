import { breakpoints, styled } from "../../stitches.config";

export const StackRowStyled = styled("div", {
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
  paddingLeft: "$small",
  paddingRight: "$small",
  width: "100%",

  [breakpoints.tablet]: {
    paddingLeft: "$smaller",
    paddingRight: "$smaller",
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
