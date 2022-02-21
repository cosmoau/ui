import { CSS } from '@stitches/react/types/css-util';
import { ReactNode } from 'react';
export interface Props {
    children: ReactNode;
    css?: CSS;
    id?: string;
    trigger: ReactNode;
}
export default function Dialog({ children, css, id, trigger }: Props): JSX.Element;
//# sourceMappingURL=Dialog.d.ts.map