/** @format */
import { ReactNode } from 'react';
import { DefaultProps } from '../../stitches.config';
export interface Props extends DefaultProps {
    options: Array<{
        label: string;
        value: string;
    }>;
    align?: 'left' | 'right' | 'center';
    width?: number | string;
    actions?: any;
    trigger: ReactNode;
    active?: string;
    submenu?: boolean;
    locked?: boolean;
}
export default function Dropdown(props: Props): JSX.Element;
//# sourceMappingURL=Dropdown.d.ts.map