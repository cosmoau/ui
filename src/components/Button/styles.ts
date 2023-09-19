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
  minHeight: "3.2rem",
  outline: 0,
  padding: "$smallest $small",
  phone: {
    minHeight: "3.4rem",
    minWidth: "6.8rem",
  },
  position: "relative",
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
        minHeight: "2.9rem",
        padding: "0.2rem $small",

        phone: {
          minHeight: "3rem",
          minWidth: "6rem",
        },

        svg: {
          height: "18px",
          width: "18px",
        },
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
