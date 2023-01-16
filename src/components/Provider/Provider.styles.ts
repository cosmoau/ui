import { breakpoints, globalCss, styled } from "../../stitches.config";

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
      fontDisplay: "auto",
      fontFamily: "Untitled Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      src: `url(${baseFontURL}/untitled-sans-web-regular.woff2)`,
    },

    {
      fontDisplay: "auto",
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
    fontFamily: "Untitled Sans, system-ui, -apple-system, sans-serif",
    fontSize: "1.6rem",
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
  },

  img: {
    display: "block",
    maxWidth: "100%",
  },

  svg: {
    height: "1.8rem",
    verticalAlign: "middle",
    width: "1.8rem",
  },
});

export default ProviderStyled;
