import toast, { useToaster } from "react-hot-toast";
import { useEventListener } from "usehooks-ts";

import { ToastProps } from "../../types";

import { ToastContainerStyled, ToastStyled } from "./Toast.styles";

export function Toast(props: ToastProps): JSX.Element {
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
