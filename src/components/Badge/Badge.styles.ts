import { styled, fadeOut } from "../../stitches.config";

export const BadgeStyled = styled("div", {
  alignContent: "center !important",
  alignItems: "center !important",
  border: "0.1rem solid transparent",
  borderRadius: "$large",
  display: "inline-flex",
  fontSize: "$default",
  justifyContent: "center",
  lineHeight: "$default",
  marginBottom: "0 !important",
  padding: "$smallest $small",

  phone: {
    minHeight: "3.1rem",
  },

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

    link: {
      true: {
        "&:hover": {
          backgroundColor: "$defaultHover",
          borderColor: "$defaultHover",
        },
        cursor: "pointer",
        transition: "$default",
      },
    },

    small: {
      true: {
        fontSize: "$small",
        lineHeight: "$small",
      },
    },

    theme: {
      alternate: {
        backgroundColor: "$defaultHover",
      },
      blue: {
        backgroundColor: "$blueBackground",
        color: "$blueText",
      },
      border: {
        backgroundColor: "$background",
        borderColor: "$border",
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
    },
  },

  verticalAlign: "middle",
});

export const BadgeIconStyled = styled("span", {
  display: "inline-flex",
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
