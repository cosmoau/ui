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
    iconOnly: {
      false: {
        svg: {
          marginTop: "-0.3rem",
        },
      },
      true: {
        height: "3rem",
        svg: {
          alignSelf: "center",
          verticalAlign: "middle",
        },
        width: "3rem",
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
  svg: {
    marginTop: "-0.4rem",
  },
  verticalAlign: "middle",
});

export default BadgeStyled;
