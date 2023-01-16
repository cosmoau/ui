import { styled, fadeOut } from "../../stitches.config";

export const BadgeStyled = styled("div", {
  alignItems: "center",
  borderRadius: "$large",
  display: "inline-flex",
  justifyContent: "center",
  padding: "$smallest $small",
  fontSize: "$default",
  lineHeight: "$default",

  marginBottom: "0 !important",

  svg: {
    marginTop: "-0.25rem",
  },
  variants: {
    animation: {
      true: {
        animation: `${fadeOut} .2s linear`,
        animationFillMode: "forwards",
      },
    },
    theme: {
      blue: {
        backgroundColor: "$blueOverlay",
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
        backgroundColor: "$greenOverlay",
        color: "$greenText",
      },
      orange: {
        backgroundColor: "$orangeOverlay",
        color: "$orangeText",
      },
      pink: {
        backgroundColor: "$pinkOverlay",
        color: "$pinkText",
      },
      purple: {
        backgroundColor: "$purpleOverlay",
        color: "$purpleText",
      },
      red: {
        backgroundColor: "$redOverlay",
        color: "$redText",
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
