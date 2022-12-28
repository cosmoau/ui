import { breakpoints, styled } from "../../stitches.config";

export const InputStyled = styled("div", {
  position: "relative",
});
export const InputCoreStyled = styled("div", {
  "&:focus-within": {
    boxShadow: "$a",
  },
  "&:hover": {
    boxShadow: "$b",
  },
  "*": {
    verticalAlign: "middle",
  },
  alignContent: "center",
  alignSelf: "center",
  borderRadius: "$a",
  boxShadow: "$a",
  display: "inline-flex",
  justifyContent: "center",
  padding: "$b $d",
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
    fontSize: "16px",
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
  fontSize: "$p",
  letterSpacing: "0",
  margin: "0",
  minHeight: "2.4rem",
  outline: "none",
  padding: "0",
  textAlign: "left",
  transition: "$default",
  width: "100%",

  [breakpoints.phone]: {
    fontSize: "16px !important",
  },
});

export const InputFunctionStyled = styled("div", {
  display: "inline-flex",
  height: "100%",
  marginLeft: "$c",
  position: "relative",

  verticalAlign: "middle",
  width: "auto",
});

export const InputIconStyled = styled("div", {
  display: "inline-block",
  height: "100%",
  marginRight: "$c",
  paddingRight: "$c",
});

export const InputCallbackStyled = styled("div", {
  display: "block",
  paddingTop: "$b",
});

export default InputStyled;
