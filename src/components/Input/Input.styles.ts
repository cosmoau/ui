import { breakpoints, styled } from "../../stitches.config";

export const InputStyled = styled("div", {
  position: "relative",
});
export const InputCoreStyled = styled("div", {
  "&:focus-within": {
    boxShadow: "$small",
  },
  "&:hover": {
    boxShadow: "$medium",
  },
  "*": {
    verticalAlign: "middle",
  },
  alignContent: "center",
  alignSelf: "center",
  borderRadius: "$small",
  boxShadow: "$small",
  display: "inline-flex",
  justifyContent: "center",
  padding: "$smaller $small",
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
        border: "0.1rem solid $redOverlay",
      },
      success: {
        border: "0.1rem solid $greenOverlay",
      },
      warning: {
        border: "0.1rem solid $orangeOverlay",
      },
    },
  },
  width: "100%",
});

export const InputAreaStyled = styled("input", {
  "&::placeholder": {
    color: "$text",
    fontSize: "$default",
    opacity: "0.5",
  },

  "&:focus": {
    outline: "none",
  },
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  color: "$text",
  fontFamily: "$default",
  fontSize: "$default",
  letterSpacing: "0",
  margin: "0",
  minHeight: "2.4rem",
  outline: "none",
  padding: "0",
  textAlign: "left",
  transition: "$default",
  width: "100%",

  [breakpoints.phone]: {
    fontSize: "$default !important",
  },
});

export const InputFunctionStyled = styled("div", {
  display: "inline-flex",
  height: "100%",
  marginLeft: "$small",
  position: "relative",

  verticalAlign: "middle",
  width: "auto",
});

export const InputIconStyled = styled("div", {
  display: "inline-block",
  height: "100%",
  marginRight: "$small",
  paddingRight: "$small",
});

export const InputCallbackStyled = styled("div", {
  display: "block",
  paddingTop: "$smaller",
});

export default InputStyled;
