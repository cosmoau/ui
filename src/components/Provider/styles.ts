import {
  breakpoints,
  darkTheme,
  fadeIn,
  fadeOut,
  globalCss,
  styled,
  theme,
} from "../../stitches.config";
import { placesReset } from "../Places/styles";

export const ProviderStyled = styled("main", {
  minHeight: "100vh",
  position: "relative",
});

export const ToastStyled = styled("div", {
  backgroundColor: "$background",
  border: "0.1rem solid $border",
  borderRadius: "$small",
  boxShadow: "$large",
  cursor: "pointer",
  marginBottom: "$small",
  maxWidth: "60rem",
  padding: "$smaller $small",
  phone: {
    "&:last-child": {
      marginBottom: "$small",
    },
    margin: "0 auto",
    marginBottom: "0",
    marginTop: "$small",
    maxWidth: "90%",
    textAlign: "center",
  },
  pointerEvents: "all",
  transition: "$default",

  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .15s linear`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeIn} .2s linear`,
        animationFillMode: "forwards",
      },
    },
  },
  width: "fit-content",
});

export const ToastContainerStyled = styled("div", {
  background: "linear-gradient(to bottom, rgba(14,22,35,0) 0%,rgba(14,22,35,0.25) 100%)",
  bottom: "0",
  darkModeSpec: {
    background:
      "linear-gradient(to bottom, rgba(254, 248, 244,0) 0%,rgba(254, 248, 244,0.075) 100%)",
  },
  left: "0",
  paddingLeft: "$small",
  phone: {
    background: "linear-gradient(to top, rgba(14,22,35,0) 0%,rgba(14,22,35,0.15) 100%) !important",
    bottom: "auto",
    darkModeSpec: {
      background:
        "linear-gradient(to top, rgba(254, 248, 244,0) 0%,rgba(254, 248, 244,0.15) 100%) !important",
    },
    left: "50%",
    top: "0",
    transform: "translateX(-50%)",
  },
  pointerEvents: "none",
  position: "fixed",
  transition: "$default",
  userSelect: "none",
  width: "100%",
  zIndex: "$toast",
});

const baseFontURL = "https://cosmogroup.io/fonts";

export const providerReset = globalCss({
  "*": {
    boxSizing: "border-box",
    marginBlock: 0,
    paddingBlock: 0,
  },

  "::selection": {
    backgroundColor: theme.colors.orangeSelection,
    color: "#000",
  },

  "@font-face": [
    {
      fontDisplay: "swap",
      fontFamily: "Untitled Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      src: `url(${baseFontURL}/untitled-sans-web-regular.woff2)`,
    },

    {
      fontDisplay: "swap",
      fontFamily: "Untitled Sans",
      fontStyle: "normal",
      fontWeight: "bold",
      src: `url(${baseFontURL}/untitled-sans-web-medium.woff2)`,
    },
    {
      fontDisplay: "swap",
      fontFamily: "Tiempos Headline",
      fontStyle: "normal",
      fontWeight: "bold",
      src: `url(${baseFontURL}/tiempos-headline-regular.woff2)`,
    },
    {
      fontDisplay: "swap",
      fontFamily: "Tiempos Text",
      fontStyle: "normal",
      fontWeight: "normal",
      src: `url(${baseFontURL}/tiempos-text-regular.woff2)`,
    },
  ],

  "a, a:visited, a:active, a:hover": {
    color: "inherit",
    textDecoration: "none",
    WebkitTapHighlightColor: "rgba(15, 23, 36, 0)",
  },

  body: {
    ...placesReset,
    [`.${darkTheme}`]: {
      backgroundColor: darkTheme.colors.background,
      color: darkTheme.colors.text,
    },
    backgroundColor: theme.colors.background,
    boxSizing: "border-box",
    color: theme.colors.text,
    fontFamily: "Untitled Sans, system-ui, -apple-system, sans-serif",
    fontSize: "16px",
    fontWeight: "normal",
    lineHeight: 1.4,
    margin: 0,
    MozOsxFontSmoothing: "grayscale",
    padding: 0,
    WebkitFontSmoothing: "antialiased",
  },

  html: {
    [breakpoints.phoneX]: {
      fontSize: "60.5%",
    },
    [breakpoints.special.micro]: {
      fontSize: "57.5%",
    },
    [breakpoints.special.print]: {
      fontSize: "62.5%",
    },
    [breakpoints.tabletX]: {
      fontSize: "61.5%",
    },
    [breakpoints.wide]: {
      fontSize: "68.5%",
    },
    fontSize: "62.5%",
  },

  img: {
    display: "block",
    maxWidth: "100%",
  },

  svg: {
    alignSelf: "center",
    verticalAlign: "middle",
  },
});

export default ProviderStyled;
