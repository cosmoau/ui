/** @format */

import { globalCss, lightTheme, styled, theme } from '../../stitches.config';

export const ProviderStyled = styled('div', {
  backgroundColor: '$background',
  color: '$text',
  minHeight: '100vh',
  position: 'relative',
});

export const ProviderTriggerStyled = styled('div', {
  '*': {
    cursor: 'pointer',
  },
  'display': 'inline-flex',
  'position': 'relative',
  'verticalAlign': 'middle',
});

export const reset = globalCss({
  '*': {
    MozOsxFontSmoothing: 'grayscale',
    WebkitAppearance: 'none',
    WebkitFontSmoothing: 'antialiased',
    boxSizing: 'inherit',
    letterSpacing: 'normal',
    marginBlockEnd: 0,
    marginBlockStart: 0,
    marginInlineEnd: 0,
    marginInlineStart: 0,
    outline: 'none',
    paddingBlockEnd: 0,
    paddingBlockStart: 0,
    paddingInlineEnd: 0,
    paddingInlineStart: 0,
    wordSpacing: 'normal',
  },
  '*:after': {
    boxSizing: 'inherit',
  },
  '*:before': {
    boxSizing: 'inherit',
  },
  '@import':
    'url("https://xxxjddzdqkdtyqtywwfi.supabase.co/storage/v1/object/public/public/webfonts.css")',
  'a': {
    color: 'inherit',
    textDecoration: 'none',
  },
  'body': {
    backgroundColor: 'inherit',
    border: 0,
    color: '$text',
    fontFamily: '$sans, sans-serif',
    fontSize: '1.6rem',
    margin: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: 0,

    [`.${theme}`]: {
      backgroundColor: '$background',
      color: '$text',
    },
    [`.${lightTheme}`]: {
      backgroundColor: '$background',
      color: '$text',
    },
  },
  'button': {
    '&::-moz-focus-inner': {
      border: 0,
      outline: 0,
      outlineOffset: 0,
      padding: 0,
    },
    '&:active': {
      outline: 0,
    },
    '&:focus': {
      outline: 0,
    },
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitAppearance': 'none',
    'WebkitFontSmoothing': 'antialiased',
    'appearance': 'none',
    'backgroundColor': 'transparent',
    'border': 0,
    'cursor': 'pointer',
    'font': '$default',
    'fontFamily': 'inherit',
    'margin': 0,
    'outline': 'none',
    'overflow': 'visible',
    'textOverflow': 'ellipsis',
    'whiteSpace': 'nowrap',
    'width': 'auto',
  },
  'html': {
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    fontSize: '62.5%',
    lineHeight: '1.5',
    textRendering: 'optimizeLegibility',
  },
  'svg': {
    verticalAlign: 'middle',
  },
});

export default ProviderStyled;
