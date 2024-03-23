import { useEffect } from "react";
import toast, { useToaster } from "react-hot-toast";

import { Icons } from "../../../icons";
import { Text, useEventListener } from "../../../index";
import { IToast } from "../../../types";
import { ToastContainerStyled, ToastStyled } from "../styles";

export function ToastController(props: IToast): JSX.Element {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause } = handlers;
  const TOAST_LIMIT = 4;

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
            <Text
              as="span"
              highlight={t.type === "success" ? "green" : t.type === "error" ? "red" : "default"}
              inline="small">
              {t.type === "success" ? (
                <Icons.CheckCircle />
              ) : t.type === "error" ? (
                <Icons.Warning />
              ) : (
                <Icons.Info />
              )}
              &nbsp;
              {t.type === "success" ? "Success" : t.type === "error" ? "Error" : "Info"}
            </Text>
            {t.message?.toString() || t.message?.toString() || ""}
          </ToastStyled>
        );
      })}
    </ToastContainerStyled>
  );
}
