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
        opacity: 0.6,
      },
    },
    state: {
      default: {
        border: "0.1rem solid $border",
      },
      error: {
        border: "0.1rem solid $redBackground",
      },
      success: {
        border: "0.1rem solid $greenBackground",
      },
      warning: {
        border: "0.1rem solid $orangeBackground",
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
  fontSize: "$default",
  margin: "0 auto",
  padding: "$smaller $small",
  phone: {
    fontSize: "16px !important",
  },
  resize: "none",
  whiteSpace: "pre-wrap",

  width: "100%",
});

export const FieldFunctionStyled = styled("div", {
  alignItems: "center",
  borderTop: "0.1rem solid $border",
  button: {
    marginLeft: "$small",
    paddingBottom: "$smallest",
    paddingLeft: "$small",
    paddingRight: "$small",
    paddingTop: "$smallest",
  },
  display: "flex",
  height: "100%",
  justifyContent: "flex-end",
  padding: "$smaller $small",
  position: "relative",
  svg: {
    marginTop: "-0.1rem",
  },
  verticalAlign: "middle",
  width: "100%",
});
