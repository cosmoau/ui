import { styled } from "../../stitches.config";

export const ButtonStyled = styled("button", {
  "&::-moz-focus-inner": {
    border: 0,
    outline: 0,
    outlineOffset: 0,
    padding: 0,
  },

  "&:active": {
    outline: 0,
  },

  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.6,
  },
  "&:focus": {
    outline: 0,
  },

  "&:hover": {
    backgroundColor: "$defaultHover",
    borderColor: "$border",
    boxShadow: "$large",
    color: "$text",
  },

  alignContent: "center",
  alignItems: "center",
  appearance: "none",
  border: "0.1rem solid $border",
  borderRadius: "$small",
  boxShadow: "$small",
  color: "$text",
  cursor: "pointer",
  display: "inline",
  fontFamily: "$default",
  fontSize: "$default",
  justifyContent: "center",
  margin: 0,
  outline: "none",
  padding: "$smallest $small",
  textOverflow: "ellipsis",
  transition: "$default",
  variants: {
    block: {
      true: {
        display: "block",
        width: "100%",
      },
    },
    small: {
      true: {
        fontSize: "$small",
        lineHeight: "$small",
        padding: "0.2rem $small",
      },
    },
    theme: {
      default: {
        backgroundColor: "transparent",
        borderColor: "$border",
      },
      fill: {
        backgroundColor: "$default",
      },
      minimal: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        boxShadow: "none",
      },
      solid: {
        backgroundColor: "$text",
        color: "$background",
      },
    },
  },
  verticalAlign: "middle",
  whiteSpace: "nowrap",
  width: "auto",
});

export const ButtonIconStyled = styled("span", {
  display: "inline-flex",
  justifyContent: "center",
  variants: {
    align: {
      left: {
        marginRight: "$smaller",
      },
      right: {
        marginLeft: "$smaller",
      },
    },
  },

  verticalAlign: "middle",
});

export default ButtonStyled;
