import { ReactNode } from "react";

import { DefaultProps } from "../../index";

export interface DialogProps extends DefaultProps {
  children: ReactNode;
  trigger: ReactNode;
  locked?: boolean;
}
