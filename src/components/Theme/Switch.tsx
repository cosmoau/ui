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
      <Button onClick={toggle}>{isDarkMode ? 'Dark' : 'Light'}</Button>
    </Wrapper>
  );
}
