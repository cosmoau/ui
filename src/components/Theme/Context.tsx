import React from 'react';
import { useDarkMode } from 'usehooks-ts';

import { theme as defaultTheme, darkTheme, globalStyles, styled } from '../../stitches.config';

export interface Props {
  children: React.ReactNode;
  switchable?: boolean;
  theme?: typeof defaultTheme;
}

function Context({ children, switchable, theme = defaultTheme }: Props): JSX.Element {
  const { isDarkMode } = useDarkMode();

  const ContextWrapper = styled('div', {
    position: 'relative',
    background: switchable && isDarkMode ? 'black' : 'white',
  });

  globalStyles();

  return <ContextWrapper className={switchable && isDarkMode ? darkTheme : theme}>{children}</ContextWrapper>;
}
export default Context;
