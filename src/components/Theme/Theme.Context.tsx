import { CSS } from '@stitches/react/types/css-util';
import React, { ReactNode } from 'react';
import { useDarkMode } from 'usehooks-ts';

import { theme as defaultTheme, darkTheme } from '../../stitches.config';

import ThemeStyles from './Theme.styles';

export interface Props {
  children: ReactNode;
  css?: CSS;
  switchable?: boolean;
  theme?: typeof defaultTheme;
}

const { ContextWrapper, globalStyles } = ThemeStyles();

export default function Context({ children, css, switchable, theme = defaultTheme }: Props): JSX.Element {
  const { isDarkMode } = useDarkMode();

  globalStyles();

  return (
    <ContextWrapper className={switchable && isDarkMode ? darkTheme : theme} css={css}>
      {children}
    </ContextWrapper>
  );
}
