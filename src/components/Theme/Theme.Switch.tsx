import { Moon, Sun } from 'phosphor-react';
import React from 'react';
import { useDarkMode } from 'usehooks-ts';

import { styled } from '../../stitches.config';
import { Button } from '../Button';

export default function Switch(): JSX.Element {
  const { isDarkMode, toggle } = useDarkMode();

  const Wrapper = styled('div', {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  return (
    <Wrapper>
      <Button onClick={toggle}>{isDarkMode ? <Moon /> : <Sun />}</Button>
    </Wrapper>
  );
}
