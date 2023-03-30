import { breakpoints, darkTheme, globalCss, styled, theme } from "../../stitches.config";

export const ProviderStyled = styled("main", {
  backgroundColor: "$background",
  color: "$text",
  minHeight: "100vh",
  position: "relative",
});

const baseFontURL = "https://cosmogroup.io/fonts";

export const providerReset = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box",
    marginBlock: 0,
    paddingBlock: 0,
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
    fontFamily: "Untitled Sans, system-ui, -apple-system, sans-serif",
    fontSize: theme.fontSizes.default,
    fontWeight: "normal",
    lineHeight: theme.lineHeights.default,
    margin: 0,
    padding: 0,
    [`.${theme}`]: {
      backgroundColor: theme.colors.background,
      color: theme.colors.text,
    },

    [breakpoints.special.retina]: {
      MozOsxFontSmoothing: "grayscale",
      WebkitFontSmoothing: "antialiased",
    },
  },

  html: {
    fontSize: "62.5%",

    [breakpoints.special.micro]: {
      fontSize: "57%",
    },
    [breakpoints.phoneX]: {
      fontSize: "59%",
    },
    [breakpoints.tabletX]: {
      fontSize: "60%",
    },
    [breakpoints.special.print]: {
      fontSize: "62.5%",
    },
  },

  img: {
    display: "block",
    maxWidth: "100%",
  },

  svg: {
    alignSelf: "center",
    height: "1.8rem",
    verticalAlign: "middle",
    width: "1.8rem",
  },
});

export default ProviderStyled;
