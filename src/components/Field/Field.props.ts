import { TextareaHTMLAttributes } from "react";

import { DefaultProps } from "../../index";

export interface FieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, DefaultProps {
  copy?: boolean;
  error?: boolean;
  errorMessage?: string;
  loading?: boolean;
  reveal?: boolean;
  submit?: string;
  submitFunction?: (value: string | number | unknown) => void;
  submitValid?: boolean;
  success?: boolean;
  successMessage?: string;
  warning?: boolean;
  warningMessage?: string;
  disabled?: boolean;
  width?: number | string;
}
