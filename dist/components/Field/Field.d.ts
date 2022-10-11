import { TextareaHTMLAttributes } from 'react';
import { DefaultProps } from '../../stitches.config';
export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement>, DefaultProps {
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
}
export default function Field(props: Props): JSX.Element;
//# sourceMappingURL=Field.d.ts.map