import { useEffect } from "react";
import toast, { useToaster } from "react-hot-toast";

import packageJson from "../../../package.json";
import { Icons } from "../../icons";
import { useEventListener } from "../../index";
import { darkTheme } from "../../stitches.config";
import { IProvider, IToast } from "../../types";

import { ProviderStyled, ToastContainerStyled, ToastStyled, providerReset } from "./styles";

const tag = ` ██████╗ ██████╗ ███████╗███╗   ███╗ ██████╗ 
██╔════╝██╔═══██╗██╔════╝████╗ ████║██╔═══██╗
██║     ██║   ██║███████╗██╔████╔██║██║   ██║
██║     ██║   ██║╚════██║██║╚██╔╝██║██║   ██║
╚██████╗╚██████╔╝███████║██║ ╚═╝ ██║╚██████╔╝
 ╚═════╝ ╚═════╝ ╚══════╝╚═╝     ╚═╝ ╚═════╝ \n Cosmo UI v${packageJson.version}, ${packageJson.homepage}
`;

function ToastController(props: IToast): JSX.Element {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause } = handlers;

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape" || event.key === "Enter") {
      event.preventDefault();
      toast.dismiss();
    }
  });

  return (
    <ToastContainerStyled onMouseEnter={startPause} onMouseLeave={endPause} {...props}>
      {toasts.map((t) => {
        t.duration = 4200;

        return (
          <ToastStyled key={t.id} animation={t.visible} onClick={(): void => toast.dismiss(t.id)}>
            {t.message?.toString() || t.message?.toString() || ""}
          </ToastStyled>
        );
      })}
    </ToastContainerStyled>
  );
}

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
      <Icons.IconContext.Provider value={{ weight: "regular" }}>
        <ToastController />
        {children}
      </Icons.IconContext.Provider>
    </ProviderStyled>
  );
}
