import toast, { useToaster } from "react-hot-toast";
import { useEventListener } from "usehooks-ts";

import { Icons } from "../../icons";
import { darkTheme } from "../../stitches.config";
import { IProvider, IToast } from "../../types";

import { ProviderStyled, ToastContainerStyled, ToastStyled, providerReset } from "./styles";

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
