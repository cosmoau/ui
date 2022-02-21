import { Moon, Sun } from 'phosphor-react';
import React from 'react';
import { useDarkMode } from 'usehooks-ts';

import { Button } from '../Button';

import ThemeStyles from './Theme.styles';

const { SwitchWrapper } = ThemeStyles();

export default function Switch(): JSX.Element {
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <SwitchWrapper>
      <Button onClick={toggle}>{isDarkMode ? <Moon /> : <Sun />}</Button>
    </SwitchWrapper>
  );
}
