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
  borderRadius: "$small",
  color: "$text",
  display: "block",
  fontFamily: "$default",
  fontSize: "$default",
  height: "4rem",
  margin: "0 auto",
  padding: "0 $small",
  phone: {
    fontSize: "16px !important",
  },
  width: "100%",
});

export const InputFunctionStyled = styled("div", {
  alignItems: "center",
  alignSelf: "center",
  display: "flex",
  gap: "$smaller",
  height: "100%",
  justifyContent: "center",
  marginLeft: "$small",
  padding: "0 $small",
  verticalAlign: "middle",
});

export const InputCallbackStyled = styled("div", {
  display: "block",
  paddingTop: "$small",
  textAlign: "left",
});

export default InputStyled;
