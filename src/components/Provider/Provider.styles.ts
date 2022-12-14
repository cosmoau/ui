import { globalCss, lightTheme, styled, theme } from '../../stitches.config';

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

export const reset = globalCss({
  '@import': 'url("https://xxxjddzdqkdtyqtywwfi.supabase.co/storage/v1/object/public/public/fonts.css")',
});

export default ProviderStyled;
