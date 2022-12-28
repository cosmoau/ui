import { IconContext } from "phosphor-react";
import { useDarkMode } from "usehooks-ts";

import { lightTheme, theme } from "../../stitches.config";
import Toast from "../Toast/Toast";

import { ProviderProps } from "./Provider.props";
import { ProviderStyled, ProviderTriggerStyled, providerReset } from "./Provider.styles";

export default function Provider(props: ProviderProps): JSX.Element {
  const { isDarkMode } = useDarkMode(!props.locked && props.default === "dark");

  providerReset();
  const locked = props.locked === "dark" ? theme : lightTheme;
  const auto = isDarkMode ? theme : lightTheme;
  const active = props.locked ? locked : auto;

  return (
    <ProviderStyled className={active} css={props.css}>
      <IconContext.Provider value={{ mirrored: false, weight: "regular" }}>
        <Toast />
        {props.children}
      </IconContext.Provider>
    </ProviderStyled>
  );
}

export const CosmoProvider = Provider;

export function ProviderToggle(props: Omit<ProviderProps, "children">): JSX.Element {
  const { isDarkMode, toggle } = useDarkMode(false);

  return (
    <ProviderTriggerStyled css={props.css} onClick={toggle}>
      {isDarkMode ? props.triggerActive || props.trigger : props.trigger}
    </ProviderTriggerStyled>
  );
}
