import { Icons } from "../../icons";
import { darkTheme } from "../../stitches.config";
import { IProvider } from "../../types";
import { Toast } from "../Toast";

import { ProviderStyled, providerReset } from "./Provider.styles";

export function Provider(props: IProvider): JSX.Element {
  const { children, css, dark } = props;

  providerReset();

  return (
    <ProviderStyled
      className={dark ? darkTheme : ""}
      css={{
        ...css,
      }}>
      <Icons.IconContext.Provider
        value={{ height: 19, mirrored: false, weight: "regular", width: 19 }}>
        <Toast />
        {children}
      </Icons.IconContext.Provider>
    </ProviderStyled>
  );
}
