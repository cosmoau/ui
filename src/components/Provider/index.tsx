import { useEffect } from "react";
import toast, { useToaster } from "react-hot-toast";

import { Icons } from "../../icons";
import { Badge, useEventListener } from "../../index";
import { darkTheme } from "../../stitches.config";
import { IProvider, IToast } from "../../types";

import { ProviderStyled, ToastContainerStyled, ToastStyled, providerReset } from "./styles";

// tag followed by 2 new lines and ";)"
const tag = ` ██████╗ ██████╗ ███████╗███╗   ███╗ ██████╗ 
██╔════╝██╔═══██╗██╔════╝████╗ ████║██╔═══██╗
██║     ██║   ██║███████╗██╔████╔██║██║   ██║
██║     ██║   ██║╚════██║██║╚██╔╝██║██║   ██║
╚██████╗╚██████╔╝███████║██║ ╚═╝ ██║╚██████╔╝
 ╚═════╝ ╚═════╝ ╚══════╝╚═╝     ╚═╝ ╚═════╝ 
  \n \n ;)`;

function ToastController(props: IToast): JSX.Element {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause } = handlers;
  const TOAST_LIMIT = 3;

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape" || event.key === "Enter") {
      event.preventDefault();
      toast.dismiss();
    }
  });

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <ToastContainerStyled onMouseEnter={startPause} onMouseLeave={endPause} {...props}>
      {toasts.map((t) => {
        t.duration = 5000;

        return (
          <ToastStyled key={t.id} animation={t.visible} onClick={(): void => toast.dismiss(t.id)}>
            {t.type === "success" && (
              <Badge inline="medium" theme="green">
                <Icons.Check />
              </Badge>
            )}
            {t.type === "error" && (
              <Badge inline="medium" theme="red">
                <Icons.Warning />
              </Badge>
            )}
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
