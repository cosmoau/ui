import { styled } from "../../stitches.config";
import { TextSizes } from "../Text/Text.styles";

export const ButtonStyled = styled("button", {
  ...TextSizes.p,
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
    opacity: 0.7,
  },
  "&:focus": {
    outline: 0,
  },

  "&:hover": {
    backgroundColor: "$defaultHover",
    borderColor: "$border",
    boxShadow: "$medium",
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
  justifyContent: "center",
  margin: 0,
  "marginBottom:": "0 !important",
  outline: "none",
  padding: "$smallest $medium",
  svg: {
    marginTop: "-0.3rem",
  },
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
        ...TextSizes.small,
        display: "inline",
        marginBottom: "0 !important",

        svg: {
          height: "1.6rem",
          marginTop: "-0.25rem",
          width: "1.6rem",
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
});

export const ButtonIconStyled = styled("span", {
  alignContent: "center",
  alignItems: "center",
  alignSelf: "center",
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
