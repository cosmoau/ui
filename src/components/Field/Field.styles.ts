import { styled } from "../../stitches.config";

export const FieldStyled = styled("div", {
  "&:focus-within": {
    boxShadow: "$a",
  },
  "&:hover": {
    boxShadow: "$a",
  },
  "*": {
    verticalAlign: "middle",
  },
  alignContent: "center",
  alignSelf: "center",
  borderRadius: "$a",

  justifyContent: "center",

  position: "relative",
  transition: "$default",
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: "0.7",
      },
    },
    state: {
      default: {
        border: "0.1rem solid $border",
      },
      error: {
        border: "0.2rem solid $redOverlay",
      },
      success: {
        border: "0.2rem solid $greenOverlay",
      },
      warning: {
        border: "0.2rem solid $orangeOverlay",
      },
    },
  },
  width: "100%",
});

export const FieldAreaStyled = styled("textarea", {
  "&:after": {
    clear: "both",
    content: '""',
  },
  "&:focus": {
    outline: "none",
  },
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  color: "$text",
  display: "block",
  fontFamily: "$default",
  fontSize: "16px",
  margin: "0 auto",
  padding: "$c $d",
  width: "100%",
});

export const FieldFunctionStyled = styled("div", {
  borderBottom: "0.1rem solid $border",
  button: {
    marginLeft: "$b",
    paddingBottom: "$a",
    paddingLeft: "$c",
    paddingRight: "$c",
    paddingTop: "$a",
  },
  height: "100%",
  padding: "$b $d",
  position: "relative",
  svg: {
    marginTop: "-0.1rem",
  },
  verticalAlign: "middle",
  width: "100%",
});
