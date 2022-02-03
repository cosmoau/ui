import type * as Stitches from '@stitches/react';
import { ReactNode } from 'react';
import { useDarkMode } from 'usehooks-ts';

import { theme as defaultTheme, darkTheme, globalStyles, styled } from '../../stitches.config';

export interface Props {
  children: ReactNode;
  css?: Stitches.CSS;
  switchable?: boolean;
  theme?: typeof defaultTheme;
}

export default function Context({ children, css, switchable, theme = defaultTheme }: Props): JSX.Element {
  const { isDarkMode } = useDarkMode();

  const Wrapper = styled('div', {
    position: 'relative',
    background: switchable && isDarkMode ? 'black' : 'white',
  });

  globalStyles();

  return (
    <Wrapper className={switchable && isDarkMode ? darkTheme : theme} css={css}>
      {children}
    </Wrapper>
  );
}
