import { CSS } from '@stitches/react/types/css-util';
import type { InputHTMLAttributes } from 'react';
export interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
    changeFunction?: any;
    copy?: boolean;
    css: CSS;
    maxLength?: number;
    rows?: number;
}
export default function Input({ changeFunction, copy, css, maxLength, rows, disabled, value, ...props }: Props): JSX.Element;
//# sourceMappingURL=Input.Textarea.d.ts.map