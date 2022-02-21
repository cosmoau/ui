import { CSS } from '@stitches/react/types/css-util';
import { ReactNode } from 'react';
export interface Props {
    action: ReactNode;
    cancel: ReactNode;
    css?: CSS;
    description: ReactNode | string;
    id?: string;
    title: ReactNode | string;
    trigger: ReactNode | string;
}
export default function Alert({ action, cancel, css, description, id, title, trigger }: Props): JSX.Element;
//# sourceMappingURL=Dialog.Alert.d.ts.map