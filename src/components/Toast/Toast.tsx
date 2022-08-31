import React, { ComponentType, ElementType } from 'react';
import toast, { Toaster, useToaster } from 'react-hot-toast';
import { useEventListener } from 'usehooks-ts';

import { ToastContainerStyled, ToastStyled } from './Toast.styles';

type InferComponentProps<T extends ElementType> = T extends ComponentType<infer U> ? U : T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : Record<string, never>;

export type ToasterProps = InferComponentProps<typeof Toaster>;

export default function Toast(props: ToasterProps): JSX.Element {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause } = handlers;

  useEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      toast.dismiss();
    }
  });

  return (
    <ToastContainerStyled onMouseEnter={startPause} onMouseLeave={endPause} {...props}>
      {toasts.map((t) => {
        t.duration = 5000;
        return (
          <ToastStyled
            animation={t.visible}
            key={t.id}
            onClick={(): void => toast.dismiss(t.id)}
            theme={t.type === 'success' ? 'success' : t.type === 'error' ? 'error' : 'default'}>
            {t.message && t.message.toString().length > 50 ? `${t.message.toString().substring(0, 50)}...` : t.message?.toString()}
          </ToastStyled>
        );
      })}
    </ToastContainerStyled>
  );
}

// export react-hot-toast to hook
export { toast };
