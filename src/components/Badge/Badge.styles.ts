import { styled, fadeOut } from "../../stitches.config";

export const BadgeStyled = styled("div", {
  "*": {
    alignContent: "center !important",
  },
  alignContent: "center !important",
  alignItems: "center !important",
  borderRadius: "$large",
  display: "inline-flex",
  fontSize: "$default",
  justifyContent: "center",
  lineHeight: "$default",
  marginBottom: "0 !important",
  padding: "$smallest $small",

  variants: {
    animation: {
      true: {
        animation: `${fadeOut} .2s linear`,
        animationFillMode: "forwards",
      },
    },
    block: {
      true: {
        justifyContent: "initial",
        width: "100%",
      },
    },
    iconOnly: {
      true: {
        height: "3rem",
        width: "3rem",
      },
    },
    small: {
      true: {
        fontSize: "$small",
        lineHeight: "$small",
      },
    },
    theme: {
      blue: {
        backgroundColor: "$blueBackground",
        color: "$blueText",
      },
      border: {
        border: "0.1rem solid $border",
        color: "$text",
      },
      default: {
        backgroundColor: "$default",
        color: "$text",
      },
      green: {
        backgroundColor: "$greenBackground",
        color: "$greenText",
      },
      orange: {
        backgroundColor: "$orangeBackground",
        color: "$orangeText",
      },

      purple: {
        backgroundColor: "$purpleBackground",
        color: "$purpleText",
      },
      red: {
        backgroundColor: "$redBackground",
        color: "$redText",
      },
      yellow: {
        backgroundColor: "$yellowBackground",
        color: "$yellowText",
      },
    },
  },

  verticalAlign: "middle",
});

export const BadgeIconStyled = styled("span", {
  display: "inline",
  variants: {
    align: {
      left: {
        marginRight: "$small",
      },
      right: {
        marginLeft: "$small",
      },
    },
  },
  verticalAlign: "middle",
});

export const BadgeLoadingStyled = styled("span", {
  display: "inline",
  verticalAlign: "middle",
});

export default BadgeStyled;
