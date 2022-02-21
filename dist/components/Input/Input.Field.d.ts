import { CSS } from '@stitches/react/types/css-util';
import { InputHTMLAttributes, ReactNode } from 'react';
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    changeFunction?: any;
    copy?: boolean;
    css?: CSS;
    error?: boolean;
    icon?: ReactNode;
    inputRef?: any;
    loader?: boolean;
    reset?: boolean;
    reveal?: boolean;
    submit?: boolean;
    submitFunction?: any;
    submitOverride?: any;
    width?: 1 | 2 | 3 | 4 | 5;
}
export default function InputField({ changeFunction, copy, css, error, icon, inputRef, loader, reset, reveal, submit, submitFunction, submitOverride, width, id, type, value, ...props }: Props): JSX.Element;
//# sourceMappingURL=Input.Field.d.ts.map