import toast, { useToaster } from "react-hot-toast";
import { useEventListener } from "usehooks-ts";

import { ToastProps } from "./Toast.props";
import { ToastContainerStyled, ToastStyled } from "./Toast.styles";

export default function Toast(props: ToastProps): JSX.Element {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause } = handlers;

  useEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      toast.dismiss();
    }
  });

  return (
    <ToastContainerStyled onMouseEnter={startPause} onMouseLeave={endPause} {...props}>
      {toasts.map((t) => {
        t.duration = 5000;
        return (
          <ToastStyled animation={t.visible} key={t.id} onClick={(): void => toast.dismiss(t.id)}>
            {t.message?.toString() || t.message?.toString() || ""}
          </ToastStyled>
        );
      })}
    </ToastContainerStyled>
  );
}
