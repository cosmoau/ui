import { IconContext } from "phosphor-react";

import { ProviderProps } from "../../types";
import { Toast } from "../Toast";

import { ProviderStyled, providerReset } from "./Provider.styles";

export function Provider(props: ProviderProps): JSX.Element {
  const { children, css } = props;

  providerReset();

  return (
    <ProviderStyled css={css}>
      <IconContext.Provider value={{ mirrored: false, weight: "regular" }}>
        <Toast />
        {children}
      </IconContext.Provider>
    </ProviderStyled>
  );
}
