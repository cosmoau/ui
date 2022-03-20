import { CSS } from '@stitches/react/types/css-util';
import { ReactNode } from 'react';
export interface Props {
    align?: 'left' | 'right' | 'center';
    css?: CSS;
    id?: string;
    options: Array<{
        name: string;
        value: string;
    }>;
    passKey?: string;
    trigger: ReactNode;
    width?: number | string;
}
export default function Submenu({ align, css, id, options, passKey, trigger, width }: Props): JSX.Element;
//# sourceMappingURL=Dropdown.Submenu.d.ts.map