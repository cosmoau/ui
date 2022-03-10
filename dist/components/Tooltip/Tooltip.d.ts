import { CSS } from '@stitches/react/types/css-util';
import { ReactNode } from 'react';
export interface Props {
    align?: 'left' | 'right' | 'center';
    children: ReactNode;
    css?: CSS;
    id?: string;
    passKey?: string;
    trigger: ReactNode;
    type?: 'hover' | 'click';
}
export default function Tooltip({ align, children, css, id, passKey, trigger, type }: Props): JSX.Element;
//# sourceMappingURL=Tooltip.d.ts.map