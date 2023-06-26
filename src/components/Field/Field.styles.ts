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
  border: "0.1rem solid $border",
  borderRadius: "$small",
  justifyContent: "center",
  position: "relative",
  transition: "$default",
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: 0.7,
      },
    },
  },
  width: "100%",
});

export const FieldAreaStyled = styled("textarea", {
  "&::placeholder": {
    color: "$accent",
    opacity: 0.7,
  },
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
  borderTop: "0.1rem solid $borderTable",
  button: {
    marginLeft: "$small",
  },
  display: "flex",
  height: "100%",
  justifyContent: "flex-end",
  padding: "$smaller $small",
  position: "relative",
  verticalAlign: "middle",
  width: "100%",
});
