import { IconContext } from 'phosphor-react';
import { ReactNode } from 'react';
import { useDarkMode } from 'usehooks-ts';

import { DefaultProps, lightTheme, theme } from '../../stitches.config';

import { ProviderStyled, ProviderTriggerStyled, reset } from './Provider.styles';
import Toast from './Toast/Toast';

interface Props extends DefaultProps {
  children: ReactNode;
  default?: 'dark' | 'light';
  locked?: 'dark' | 'light';
  trigger?: ReactNode;
  triggerActive?: ReactNode;
}

export default function Provider(props: Props): JSX.Element {
  const { isDarkMode } = useDarkMode(!props.locked && props.default === 'dark');

  reset();
  const locked = props.locked === 'dark' ? theme : lightTheme;
  const auto = isDarkMode ? theme : lightTheme;
  const active = props.locked ? locked : auto;

  return (
    <ProviderStyled className={active} css={props.css}>
      <IconContext.Provider value={{ mirrored: false, weight: 'regular' }}>
        <Toast />
        {props.children}
      </IconContext.Provider>
    </ProviderStyled>
  );
}

export const CosmoProvider = Provider;

export function ProviderToggle(props: Omit<Props, 'children'>): JSX.Element {
  const { isDarkMode, toggle } = useDarkMode(false);

  return (
    <ProviderTriggerStyled css={props.css} onClick={toggle}>
      {isDarkMode ? props.triggerActive || props.trigger : props.trigger}
    </ProviderTriggerStyled>
  );
}
