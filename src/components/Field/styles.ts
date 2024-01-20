import { styled } from "../../stitches.config";

export const FieldStyled = styled("div", {
  position: "relative",

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: 0.5,
      },
    },
  },
  width: "100%",
});
export const FieldCoreStyled = styled("div", {
  "&:focus-within": {
    boxShadow: "$small",
  },
  "&:hover": {
    boxShadow: "$small",
  },
  "*": {
    verticalAlign: "middle",
  },
  border: "0.1rem solid $border",
  borderRadius: "$small",
  transition: "$default",
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: 0.5,
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
  backgroundColor: "$defaultTable",
  borderTop: "0.1rem solid $borderTable",
  button: {
    marginLeft: "$small",
  },

  display: "flex",
  height: "100%",
  justifyContent: "flex-end",
  padding: "$smaller $small",
  phone: {
    button: {
      marginLeft: 0,
    },
    justifyContent: "flex-start",
  },
  position: "relative",
  verticalAlign: "middle",

  width: "100%",
});

export const FieldCallbackStyled = styled("div", {
  display: "block",
  paddingTop: "$small",
});
