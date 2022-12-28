import { InputHTMLAttributes, ReactNode, RefObject } from "react";

import { DefaultProps } from "../../index";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, DefaultProps {
  copy?: boolean;
  error?: boolean;
  errorMessage?: string;
  loading?: boolean;
  reveal?: boolean;
  submit?: string;
  icon?: ReactNode;
  submitFunction?: (value: string | number | unknown) => void;
  submitValid?: boolean;
  success?: boolean;
  successMessage?: string;
  warning?: boolean;
  warningMessage?: string;
  disabled?: boolean;
  width?: number | string;
  listen?: boolean;
  mustRef?: RefObject<HTMLInputElement>;
}
