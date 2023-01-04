import { breakpoints, globalCss, lightTheme, styled, theme } from "../../stitches.config";

export const ProviderStyled = styled("main", {
  backgroundColor: "$background",
  color: "$text",

  minHeight: "100vh",
  position: "relative",

  [`.${theme}`]: {
    backgroundColor: "$background",
    color: "$text",
  },
  [`.${lightTheme}`]: {
    backgroundColor: "$background",
    color: "$text",
  },
});

export const ProviderTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

const bucketURL = "https://xxxjddzdqkdtyqtywwfi.supabase.co/storage/v1/object/public/public";

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
      src: `url(${bucketURL}/untitled-sans-web-regular.woff2)`,
    },

    {
      fontDisplay: "auto",
      fontFamily: "Untitled Sans",
      fontStyle: "normal",
      fontWeight: "bold",
      src: `url(${bucketURL}/untitled-sans-web-medium.woff2)`,
    },

    {
      fontDisplay: "auto",
      fontFamily: "Tiempos Headline",
      fontStyle: "normal",
      fontWeight: "normal",
      src: `url(${bucketURL}/tiempos-headline-regular.woff2)`,
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
    fontWeight: "400",
    lineHeight: "1.4",
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
      fontSize: "55%",
    },

    [breakpoints.phone]: {
      fontSize: "57%",
    },
    [breakpoints.tabletX]: {
      fontSize: "59%",
    },
    [breakpoints.laptopX]: {
      fontSize: "61.5%",
    },
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
