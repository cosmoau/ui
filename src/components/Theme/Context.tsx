import React from 'react';
import { useDarkMode } from 'usehooks-ts';

import { theme as defaultTheme, darkTheme, globalStyles, styled } from '../../stitches.config';

export interface Props {
  children: React.ReactNode;
  theme?: typeof defaultTheme;
}

function Context({ children, theme = defaultTheme }: Props): JSX.Element {
  const { isDarkMode } = useDarkMode();

  const ContextWrapper = styled('div', {
    position: 'relative',
    background: isDarkMode ? 'black' : 'white',
  });

  globalStyles();

  return <ContextWrapper className={isDarkMode ? darkTheme : theme}>{children}</ContextWrapper>;
}
export default Context;
