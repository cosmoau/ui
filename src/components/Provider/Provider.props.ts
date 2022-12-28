import { ReactNode } from "react";

import { DefaultProps } from "../../index";

export interface ProviderProps extends DefaultProps {
  children: ReactNode;
  default?: "dark" | "light";
  locked?: "dark" | "light";
  trigger?: ReactNode;
  triggerActive?: ReactNode;
}
