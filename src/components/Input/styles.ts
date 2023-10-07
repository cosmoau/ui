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
  backgroundColor: "$background",
  border: "0.1rem solid $border",
  borderRadius: "$small",
  display: "flex",
  justifyContent: "center",
  padding: "$smaller $small",
  phone: {
    display: "block",
    padding: 0,
  },
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
  padding: "$smaller 0",
  phone: {
    fontSize: "16px !important",
    padding: "$smaller $small",
  },
  width: "100%",
});

export const InputFunctionStyled = styled("div", {
  display: "inline-flex",
  height: "100%",
  marginLeft: "$small",
  phone: {
    borderTop: "0.1rem solid $border",
    display: "flex",
    gap: "$small",
    height: "100%",
    marginLeft: 0,
    padding: "$small $smallest",
    width: "100%",
  },
  position: "relative",
  verticalAlign: "middle",
});

export const InputCallbackStyled = styled("div", {
  display: "block",
  paddingTop: "$small",
});

export default InputStyled;
