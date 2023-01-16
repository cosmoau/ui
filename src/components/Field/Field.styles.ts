import { styled } from "../../stitches.config";

export const FieldStyled = styled("div", {
  "&:focus-within": {
    boxShadow: "$small",
  },
  "&:hover": {
    boxShadow: "$small",
  },
  "*": {
    verticalAlign: "middle",
  },
  alignContent: "center",
  alignSelf: "center",
  borderRadius: "$small",

  justifyContent: "center",

  position: "relative",
  transition: "$default",
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: "0.6",
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
  padding: "$smaller $small",
  width: "100%",
});

export const FieldFunctionStyled = styled("div", {
  borderBottom: "0.1rem solid $border",
  button: {
    marginLeft: "$smaller",
    paddingBottom: "$smallest",
    paddingLeft: "$small",
    paddingRight: "$small",
    paddingTop: "$smallest",
  },
  height: "100%",
  padding: "$smaller $small",
  position: "relative",
  svg: {
    marginTop: "-0.1rem",
  },
  verticalAlign: "middle",
  width: "100%",
});
