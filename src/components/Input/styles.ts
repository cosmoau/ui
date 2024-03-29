import { styled } from "../../stitches.config";

export const InputStyled = styled("div", {
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
export const InputCoreStyled = styled("div", {
  "&:focus-within": {
    boxShadow: "$small",
  },
  "&:hover": {
    boxShadow: "$small",
  },
  alignContent: "center",
  alignSelf: "center",
  border: "0.1rem solid $border",
  borderRadius: "$small",
  display: "flex",
  justifyContent: "center",
  transition: "$default",
  width: "100%",
});

export const InputAreaStyled = styled("input", {
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
  width: "100%",
});

export const InputFunctionStyled = styled("div", {
  backgroundColor: "$defaultTable",
  borderLeft: "0.1rem solid $border",
  display: "flex",
  gap: "$smaller",

  height: "100%",

  // gap between items
  justifyContent: "center",

  marginLeft: "$small",

  padding: "$smallest $smaller",

  position: "relative",
  verticalAlign: "middle",
});

export const InputCallbackStyled = styled("div", {
  display: "block",
  paddingTop: "$smaller",
  textAlign: "left",
});

export default InputStyled;
