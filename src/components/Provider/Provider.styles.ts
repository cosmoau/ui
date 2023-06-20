import {
  breakpoints,
  darkTheme,
  fadeIn,
  fadeOut,
  globalCss,
  styled,
  theme,
} from "../../stitches.config";
import { placesReset } from "../Places/Places.styles";

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
  fontSize: "$default",
  margin: "$small auto 0 auto !important",
  maxWidth: "60%",
  padding: "$smallest $small",
  phone: {
    fontSize: "$small",
    maxWidth: "80%",
  },
  pointerEvents: "all",
  transition: "$default",

  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .2s linear`,
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
  bottom: "$medium",
  left: 0,
  phone: {
    bottom: "auto",
    top: "$medium",
  },
  pointerEvents: "none",
  position: "fixed",
  right: 0,
  textAlign: "center",
  userSelect: "none",

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

    /*  {
      fontDisplay: "auto",
      fontFamily: "Tiempos Headline",
      fontStyle: "normal",
      fontWeight: "bold",
      src: `url(${baseFontURL}/tiempos-headline-regular.woff2)`,
    }, */

    {
      fontDisplay: "auto",
      fontFamily: "Martina Plantijn",
      fontStyle: "normal",
      fontWeight: "bold",
      src: `url(${baseFontURL}/martina-plantijn-medium.woff2)`,
    },
  ],

  "a, a:visited, a:active, a:hover": {
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    color: "inherit",
    textDecoration: "none",
  },

  body: {
    ...placesReset,
    [`.${darkTheme}`]: {
      backgroundColor: darkTheme.colors.background,
      color: darkTheme.colors.text,
    },
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    backgroundColor: theme.colors.background,
    boxSizing: "border-box",
    color: theme.colors.text,
    fontFamily: "Untitled Sans, system-ui, -apple-system, sans-serif",
    fontSize: "16px",
    fontWeight: "normal",
    lineHeight: 1.4,
    margin: 0,
    padding: 0,
  },

  html: {
    fontSize: "62.5%",
    [breakpoints.special.micro]: {
      fontSize: "53%",
    },
    [breakpoints.phoneX]: {
      fontSize: "57%",
    },
    [breakpoints.tabletX]: {
      fontSize: "59%",
    },
    [breakpoints.special.print]: {
      fontSize: "62.5%",
    },
    [breakpoints.wide]: {
      fontSize: "69%",
    },
  },

  img: {
    display: "block",
    maxWidth: "100%",
  },

  svg: {
    alignSelf: "center",
    height: "19px",
    verticalAlign: "middle",
    [breakpoints.phone]: {
      height: "18px",
      width: "18px",
    },
    width: "19px",
  },
});

export default ProviderStyled;
