import { IconContext } from "phosphor-react";
import { useDarkMode } from "usehooks-ts";

import { lightTheme, theme } from "../../stitches.config";
import { ProviderProps } from "../../types";
import { Toast } from "../Toast";

import { ProviderStyled, ProviderTriggerStyled, providerReset } from "./Provider.styles";

export function Provider(props: ProviderProps): JSX.Element {
  const { locked, initial, children, css } = props;
  providerReset();

  const { isDarkMode } = useDarkMode(locked === "dark" || initial === "dark");

  const active = locked === "dark" ? theme : isDarkMode ? theme : lightTheme;

  return (
    <ProviderStyled className={active} css={css}>
      <IconContext.Provider value={{ mirrored: false, weight: "regular" }}>
        <Toast />
        {children}
      </IconContext.Provider>
    </ProviderStyled>
  );
}

export function ProviderToggle(props: Omit<ProviderProps, "children">): JSX.Element {
  const { trigger, triggerActive, css } = props;

  const { isDarkMode, toggle } = useDarkMode(false);

  return (
    <ProviderTriggerStyled css={css} onClick={toggle}>
      {isDarkMode ? triggerActive || trigger : trigger}
    </ProviderTriggerStyled>
  );
}
