import { ReactNode } from "react";

import { DefaultProps } from "../../index";

export interface CodeProps extends DefaultProps {
  children: ReactNode;
  copy?: boolean;
}
