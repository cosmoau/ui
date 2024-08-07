import { fadeOut, styled } from "../../stitches.config";

export const paddingVariants = {
  padding: {
    default: {
      padding: "$medium",
    },
    none: {
      padding: 0,
    },
    small: {
      padding: "$small",
    },
  },
};

export const BoxStyled = styled("article", {
  border: "0.1rem solid transparent",
  borderRadius: "$large",
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
        animation: `${fadeOut} .15s linear`,
        animationFillMode: "forwards",
      },
    },
    collapsed: {
      true: {
        "&::after": {
          background: "linear-gradient(to bottom, rgba(14,22,35,0) 0%,rgba(14,22,35,0.1) 100%)",
          bottom: 0,
          content: "",
          darkModeSpec: {
            background: "linear-gradient(to bottom, rgba(14,22,35,0) 0%,rgba(14,22,35,1) 100%)",
          },
          height: "50%",
          left: 0,
          position: "absolute",
          right: 0,
        },
      },
    },
    footer: {
      true: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
    },
    hover: {
      true: {
        "&:hover": {
          boxShadow: "$large",
          img: {
            transform: "scale(1.1)",
            transition: "$default",
          },
        },
        img: {
          transition: "$default",
        },
      },
    },
    loading: {
      true: {
        cursor: "wait",
        opacity: 0.5,
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
  backgroundColor: "$defaultSubtle",
  borderBottom: "0.1rem solid $borderSubtle",
  padding: "$small $medium",
  variants: {
    padding: {
      default: {
        padding: "$small $medium",
      },
      none: {
        padding: 0,
      },
      small: {
        padding: "$small $small",
      },
    },
  },
});

export const BoxFooterStyled = styled("div", {
  padding: "0 $medium $medium $medium",
  variants: {
    padding: {
      default: {
        padding: "0 $medium $medium $medium",
      },
      none: {
        padding: 0,
      },
      small: {
        padding: "0 $small $small $small",
      },
    },
  },
});

export const BoxInnerStyled = styled("div", {
  variants: {
    ...paddingVariants,
  },
});

export const BoxFlexStyled = styled("div", {
  height: "100%",
  width: "100%",
});

export const BoxExitStyled = styled("div", {
  cursor: "pointer",
  padding: "1rem",
  position: "absolute",
  right: 0,
  top: 0,
  transition: "$default",
});

export const BoxLoadingStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$border",
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  left: 0,
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 1,
});

export const BoxExpanderTrigger = styled("div", {
  bottom: "$small",
  display: "flex",
  justifyContent: "center",
  left: 0,
  position: "absolute",
  right: 0,
  variants: {
    expanded: {
      true: {
        bottom: "auto",
        justifyContent: "flex-start",
        paddingBottom: "$smallest",
        paddingTop: "$medium",
        position: "relative",
      },
    },
  },

  zIndex: 1,
});
