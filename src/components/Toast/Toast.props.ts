import { ElementType, ComponentType } from "react";
import { Toaster } from "react-hot-toast";

type InferComponentProps<T extends ElementType> = T extends ComponentType<infer U>
  ? U
  : T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : Record<string, never>;

export type ToastProps = InferComponentProps<typeof Toaster>;
