import { breakpoints, darkTheme, globalCss, styled, theme } from "../../stitches.config";

export const ProviderStyled = styled("main", {
  minHeight: "100vh",
  position: "relative",
});

const baseFontURL = "https://cosmogroup.io/fonts";

export const providerReset = globalCss({
  "*": {
    boxSizing: "border-box",
    marginBlock: 0,
    paddingBlock: 0,
  },

  "::selection": {
    backgroundColor: theme.colors.yellowBackground,
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
      fontDisplay: "auto",
      fontFamily: "Tiempos Headline",
      fontStyle: "normal",
      fontWeight: "bold",
      src: `url(${baseFontURL}/tiempos-headline-regular.woff2)`,
    },
  ],

  "a, a:visited, a:active, a:hover": {
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    color: "inherit",
    textDecoration: "none",
  },

  body: {
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
    padding: 0,

    [breakpoints.special.retina]: {
      MozOsxFontSmoothing: "grayscale",
      WebkitFontSmoothing: "antialiased",
    },
  },

  html: {
    fontSize: "62.5%",

    [breakpoints.special.micro]: {
      fontSize: "52%",
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
      fontSize: "65%",
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
