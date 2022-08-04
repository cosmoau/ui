/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react';
import { useDarkMode } from 'usehooks-ts';

import { DefaultProps, lightTheme, theme } from '../../stitches.config';
import { Toast } from '../Toast';

import { ProviderStyled, ProviderTriggerStyled, reset } from './Provider.styles';

export interface Props extends DefaultProps {
  children: ReactNode | ReactNode[];
  default?: 'dark' | 'light';
  locked?: 'dark' | 'light';
  trigger?: any;
  triggerActive?: any;
}

export default function Provider(props: Props): JSX.Element {
  const { isDarkMode } = useDarkMode(props.default === 'dark');

  reset();

  return (
    <ProviderStyled
      className={props.locked ? (props.locked === 'dark' ? theme.toString() : lightTheme.toString()) : isDarkMode ? theme.toString() : lightTheme.toString()}
      css={props.css}>
      <Toast />
      {props.children}
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
