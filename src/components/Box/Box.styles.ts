import { fadeOut, styled } from "../../stitches.config";

export const paddingVariants = {
  padding: {
    default: {
      padding: "$medium",
    },
    none: {
      padding: "0",
    },
  },
};
export const BoxStyled = styled("article", {
  border: "0.1rem solid transparent",
  borderRadius: "$medium",
  display: "block",
  height: "100%",
  margin: 0,
  paddingBlock: 0,
  position: "relative",
  transition: "$default",

  variants: {
    animation: {
      true: {
        animation: `${fadeOut} .2s linear`,
        animationFillMode: "forwards",
      },
    },
    hover: {
      true: {
        "&:hover": {
          boxShadow: "$medium",
        },
      },
    },
    loading: {
      true: {
        cursor: "wait",
      },
    },

    theme: {
      default: {
        backgroundColor: "$background",
        borderColor: "$border",
      },
      error: {
        backgroundColor: "$redOverlay",
        borderColor: "$redBorder",
        color: "$redText",
      },
      fill: {
        backgroundColor: "$default",
      },
      success: {
        backgroundColor: "$greenOverlay",
        borderColor: "$greenBorder",
        color: "$greenText",
      },
      transparent: {
        backgroundColor: "transparent",
        borderColor: "transparent",
      },
      warning: {
        backgroundColor: "$orangeOverlay",
        borderColor: "$orangeBorder",
        color: "$orangeText",
      },
    },
    ...paddingVariants,
  },
  width: "100%",
});

export const BoxImageChildrenStyled = styled("div", {
  variants: {
    ...paddingVariants,
  },
});

export const BoxExitStyled = styled("div", {
  cursor: "pointer",
  padding: "1rem",
  position: "absolute",
  right: 0,
  top: 0,
  transition: "$default",
});

export default BoxStyled;
