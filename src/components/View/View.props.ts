import { ReactNode } from "react";

import { DefaultProps } from "../../index";

export interface ViewProps extends Omit<DefaultProps, "spacing"> {
  children: ReactNode;
  container?: boolean;
  top?: DefaultProps["spacing"];
  bottom?: DefaultProps["spacing"];
  inverted?: boolean;
  soft?: boolean;
}
