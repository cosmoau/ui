import { fadeOut, styled } from "../../stitches.config";

export const paddingVariants = {
  padding: {
    default: {
      padding: "$medium",
    },
    none: {
      padding: 0,
    },
  },
};

export const BoxStyled = styled("article", {
  border: "0.1rem solid transparent",
  borderRadius: "$small",
  display: "block",
  height: "100%",
  margin: 0,
  overflow: "hidden",
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
        backgroundColor: "$redBackground",
        color: "$redText",
      },
      fill: {
        backgroundColor: "$default",
      },
      success: {
        backgroundColor: "$greenBackground",
        color: "$greenText",
      },
      transparent: {
        backgroundColor: "transparent",
        borderColor: "transparent",
      },
      warning: {
        backgroundColor: "$orangeBackground",
        color: "$orangeText",
      },
    },
    ...paddingVariants,
  },
  width: "100%",
});

export const BoxHeaderStyled = styled("div", {
  backgroundColor: "$default",
  borderBottom: "0.1rem solid $border",
  padding: "$small $medium",
});

export const BoxInnerStyled = styled("div", {
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
