import { IconContext } from "phosphor-react";

import { IProvider } from "../../types";
import { Toast } from "../Toast";

import { ProviderStyled, providerReset } from "./Provider.styles";

export function Provider(props: IProvider): JSX.Element {
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
