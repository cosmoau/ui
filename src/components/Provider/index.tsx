import { IconContext } from "phosphor-react";

import { darkTheme, theme } from "../../stitches.config";
import { ProviderProps } from "../../types";
import { Toast } from "../Toast";

import { ProviderStyled, providerReset } from "./Provider.styles";

export function checkTheme(): "dark" | "light" {
  if (typeof window !== "undefined") {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }
  return "light";
}

export function Provider(props: ProviderProps): JSX.Element {
  const { locked, children, css } = props;

  providerReset();

  const className = locked ? locked : checkTheme();

  return (
    <ProviderStyled
      className={className === "dark" ? darkTheme.toString() : theme.toString()}
      css={css}>
      <IconContext.Provider value={{ mirrored: false, weight: "regular" }}>
        <Toast />
        {children}
      </IconContext.Provider>
    </ProviderStyled>
  );
}
