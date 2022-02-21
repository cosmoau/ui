import { CSS } from '@stitches/react/types/css-util';
import { ReactNode } from 'react';
export interface Props {
    checked?: boolean;
    children?: ReactNode;
    css?: CSS;
    disabled?: boolean;
    id?: string;
    size?: 1 | 2;
    tooltip?: string;
}
export default function Checkbox({ checked, children, css, disabled, id, size, tooltip }: Props): JSX.Element;
//# sourceMappingURL=Input.Checkbox.d.ts.map