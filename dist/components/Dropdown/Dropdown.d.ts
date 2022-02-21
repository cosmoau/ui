import { CSS } from '@stitches/react/types/css-util';
import { ReactNode } from 'react';
export interface Props {
    actions: any;
    align?: 'left' | 'right' | 'center';
    css?: CSS;
    id?: string;
    label: string | ReactNode;
    options: Array<{
        icon?: ReactNode;
        name: string;
        value: string;
    }>;
    passKey: string;
    width?: number;
}
export default function Dropdown({ actions, align, css, id, label, options, passKey, width }: Props): JSX.Element;
//# sourceMappingURL=Dropdown.d.ts.map