import { ReactNode } from "react";

import { DefaultProps } from "../../index";

export interface SelectProps extends DefaultProps {
  options: Array<{
    label: string;
    value: string;
  }>;
  align?: "left" | "right" | "center";
  width?: number | string;
  selection?: string;
  onSelection?: (value: string, label: string) => void;
  trigger: ReactNode;
  locked?: boolean;
  filter?: boolean;
  last?: boolean;
  loading?: boolean;
}
