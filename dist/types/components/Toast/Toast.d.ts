import { ComponentType, ElementType } from 'react';
import toast, { Toaster } from 'react-hot-toast';
declare type InferComponentProps<T extends ElementType> = T extends ComponentType<infer U> ? U : T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : Record<string, never>;
export declare type ToasterProps = InferComponentProps<typeof Toaster>;
export default function Toast(props: ToasterProps): JSX.Element;
export { toast };
//# sourceMappingURL=Toast.d.ts.map