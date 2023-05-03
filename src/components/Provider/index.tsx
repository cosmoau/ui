import { IconContext } from "phosphor-react";

import { darkTheme } from "../../stitches.config";
import { IProvider } from "../../types";
import { Toast } from "../Toast";

import { ProviderStyled, providerReset } from "./Provider.styles";

export function Provider(props: IProvider): JSX.Element {
  const { children, css, dark } = props;

  providerReset();

  return (
    <ProviderStyled className={dark ? darkTheme : undefined} css={css}>
      <IconContext.Provider value={{ mirrored: false, weight: "regular" }}>
        <Toast />
        {children}
      </IconContext.Provider>
    </ProviderStyled>
  );
}
