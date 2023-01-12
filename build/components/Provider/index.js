import { IconContext } from "phosphor-react";
import { useDarkMode } from "usehooks-ts";
import { lightTheme, theme } from "../../stitches.config";
import { Toast } from "../Toast";
import { ProviderStyled, ProviderTriggerStyled, providerReset } from "./Provider.styles";
export function Provider(props) {
  var locked = props.locked,
    initial = props.initial,
    children = props.children,
    css = props.css;
  providerReset();
  var isDarkMode = useDarkMode(locked === "dark" || initial === "dark").isDarkMode;
  var active = locked === "dark" ? theme : isDarkMode ? theme : lightTheme;
  return /*#__PURE__*/ React.createElement(
    ProviderStyled,
    {
      className: active,
      css: css,
    },
    /*#__PURE__*/ React.createElement(
      IconContext.Provider,
      {
        value: {
          mirrored: false,
          weight: "regular",
        },
      },
      /*#__PURE__*/ React.createElement(Toast, null),
      children
    )
  );
}
export function ProviderToggle(props) {
  var trigger = props.trigger,
    triggerActive = props.triggerActive,
    css = props.css;
  var _useDarkMode = useDarkMode(false),
    isDarkMode = _useDarkMode.isDarkMode,
    toggle = _useDarkMode.toggle;
  return /*#__PURE__*/ React.createElement(
    ProviderTriggerStyled,
    {
      css: css,
      onClick: toggle,
    },
    isDarkMode ? triggerActive || trigger : trigger
  );
}
