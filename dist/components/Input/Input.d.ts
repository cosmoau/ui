/** @format */
import { InputHTMLAttributes } from 'react';
import { DefaultProps } from '../../stitches.config';
export interface Props extends InputHTMLAttributes<HTMLInputElement>, DefaultProps {
    copy?: boolean;
    error?: boolean;
    errorMessage?: string;
    loading?: boolean;
    reveal?: boolean;
    submit?: string;
    submitFunction?: any;
    submitValid?: boolean;
    success?: boolean;
    successMessage?: string;
    warning?: boolean;
    warningMessage?: string;
    disabled?: boolean;
    width?: number | string;
    listen?: boolean;
    mustRef?: any;
}
export default function Input(props: Props): JSX.Element;
//# sourceMappingURL=Input.d.ts.map