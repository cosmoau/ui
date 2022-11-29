import { globalCss, lightTheme, styled, theme } from '../../stitches.config';

export const ProviderStyled = styled('main', {
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
  '@import':
    'url("https://xxxjddzdqkdtyqtywwfi.supabase.co/storage/v1/object/public/public/webfonts-oct22.css")',
  // eslint-disable-next-line sort-keys-fix/sort-keys-fix
  '*': {
    MozOsxFontSmoothing: 'grayscale',
    WebkitAppearance: 'none',
    WebkitFontSmoothing: 'antialiased',
    boxSizing: 'border-box',
    marginBlock: 0,
    paddingBlock: 0,
    textRendering: 'optimizeLegibility',
  },

  'a': {
    color: '$text',
    textDecoration: 'none',
  },
  'body': {
    backgroundColor: '$background',
    color: '$text',
    fontFamily: '$default',
    fontSize: '1.5rem',
    lineHeight: 1.4,
    margin: 0,
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
  'html': {
    fontSize: '62.5%',
  },
  'svg': {
    verticalAlign: 'middle',
  },
});

export default ProviderStyled;
