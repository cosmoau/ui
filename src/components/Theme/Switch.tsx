import React from 'react';
import { useDarkMode } from 'usehooks-ts';

import { styled } from '../../stitches.config';
import { Button } from '../Button';

function Switch(): JSX.Element {
  const { isDarkMode, toggle } = useDarkMode();

  const SwitchWrapper = styled('div', {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  return (
    <SwitchWrapper>
      <Button onClick={toggle}>{isDarkMode ? 'Dark' : 'Light'}</Button>
    </SwitchWrapper>
  );
}
export default Switch;
