/** @format */

import { IconContext } from 'phosphor-react';
import React, { ReactNode } from 'react';
import { useDarkMode } from 'usehooks-ts';

import { DefaultProps, lightTheme, theme } from '../../stitches.config';
import { Toast } from '../Toast';

import { ProviderStyled, ProviderTriggerStyled, reset } from './Provider.styles';

export interface Props extends DefaultProps {
  children: ReactNode | ReactNode[];
  default?: 'dark' | 'light';
  locked?: 'dark' | 'light';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  trigger?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  triggerActive?: any;
}

export default function Provider(props: Props): JSX.Element {
  const { isDarkMode } = useDarkMode(!props.locked && props.default === 'dark');

  reset();
  const locked = props.locked === 'dark' ? theme : lightTheme;
  const auto = isDarkMode ? theme : lightTheme;
  const active = props.locked ? locked : auto;

  return (
    <ProviderStyled className={active} css={props.css}>
      <IconContext.Provider value={{ mirrored: false, weight: 'duotone' }}>
        <Toast />
        {props.children}
      </IconContext.Provider>
    </ProviderStyled>
  );
}

export const ThemeProvider = Provider;

export function ProviderToggle(props: Omit<Props, 'children'>): JSX.Element {
  const { isDarkMode, toggle } = useDarkMode(false);

  return (
    <ProviderTriggerStyled css={props.css} onClick={toggle}>
      {isDarkMode ? props.triggerActive || props.trigger : props.trigger}
    </ProviderTriggerStyled>
  );
}
