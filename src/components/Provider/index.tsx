import { useEffect } from "react";

import packageJson from "../../../package.json";
import { Icons } from "../../icons";
import { darkTheme } from "../../stitches.config";
import { IProvider } from "../../types";

import Portal from "./ProviderPortal";
import { ProviderStyled, providerReset } from "./styles";
import { ToastController } from "./ToastController";

const tag = `Cosmo UI v${packageJson.version}`;

export default function Provider({ children, css, dark }: IProvider): JSX.Element {
  providerReset();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(tag);
  }, []);

  return (
    <ProviderStyled
      className={dark ? darkTheme : ""}
      css={{
        ...css,
      }}>
      <Icons.IconContext.Provider value={{ alignmentBaseline: "middle", height: 20, width: 20 }}>
        <ToastController />
        {children}
        <Portal />
      </Icons.IconContext.Provider>
    </ProviderStyled>
  );
}
