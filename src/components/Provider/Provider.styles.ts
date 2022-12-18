import { breakpoints, globalCss, lightTheme, styled, theme } from '../../stitches.config';

export const ProviderStyled = styled('main', {
  backgroundColor: '$background',
  color: '$text',

  minHeight: '100vh',
  position: 'relative',

  [`.${theme}`]: {
    backgroundColor: '$background',
    color: '$text',
  },
  [`.${lightTheme}`]: {
    backgroundColor: '$background',
    color: '$text',
  },
});

export const ProviderTriggerStyled = styled('div', {
  '*': {
    cursor: 'pointer',
  },
  'display': 'inline-flex',
  'position': 'relative',
  'verticalAlign': 'middle',
});

const bucketURL = 'https://xxxjddzdqkdtyqtywwfi.supabase.co/storage/v1/object/public/public';

export const providerReset = globalCss({
  '#Smallchat': {
    bottom: 0,
    position: 'fixed',
    right: 0,
    zIndex: 200,
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    marginBlock: 0,
    paddingBlock: 0,
  },
  '@font-face': [
    {
      fontDisplay: 'auto',
      fontFamily: 'Untitled Sans',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: `url(${bucketURL}/untitled-sans-web-regular.woff2) format("woff2"), url(${bucketURL}/untitled-sans-web-regular.woff) format("woff")`,
    },

    {
      fontDisplay: 'auto',
      fontFamily: 'Untitled Sans',
      fontStyle: 'normal',
      fontWeight: 'bold',
      src: `url(${bucketURL}/untitled-sans-web-medium.woff2) format("woff2"), url(${bucketURL}/untitled-sans-web-medium.woff) format("woff")`,
    },

    {
      fontDisplay: 'auto',
      fontFamily: 'Tiempos Headline',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: `url(${bucketURL}/tiempos-headline-regular.woff2) format("woff2"), url(${bucketURL}/tiempos-headline-regular.woff) format("woff")`,
    },
  ],

  'a, a:visited, a:active, a:hover': {
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    color: 'inherit',
    textDecoration: 'none',
  },

  'body': {
    fontFamily: 'Untitled Sans, system-ui, -apple-system, sans-serif',
    fontSize: '1.6rem',
    fontWeight: '400',
    lineHeight: '1.4',
    margin: 0,
    padding: 0,

    [breakpoints.retina]: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
    },
  },

  'html': {
    fontSize: '62.5%',
  },

  'img': {
    display: 'block',
    maxWidth: '100%',
  },

  'svg': {
    verticalAlign: 'middle',
  },
});

export default ProviderStyled;
