import { styled } from "../../stitches.config";

export const ButtonStyled = styled("button", {
  "&:active": {
    outline: 0,
  },

  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  "&:focus": {
    outline: 0,
  },

  "&:not(:disabled):hover": {
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
  display: "inline-flex",
  fontFamily: "$default",
  fontSize: "$default",
  justifyContent: "center",
  lineHeight: "$default",
  margin: 0,
  minHeight: "3.4rem",
  outline: 0,
  padding: "$smallest $small",

  position: "relative",
  textOverflow: "ellipsis",

  transition: "$default",
  phone: {
    minHeight: "3.4rem",
    padding: "$smallest calc($small * 1.1)",
  },
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
        minHeight: "3rem",

        phone: {
          minHeight: "3.1rem",
        },
      },
    },
    theme: {
      cosmo: {
        backgroundColor: "$accentCosmo",
        color: "$background",
        darkModeSpec: {
          color: "$text",
        },
      },
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
  zIndex: 1,
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
