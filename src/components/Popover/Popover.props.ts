import { ReactNode } from "react";

import { DefaultProps } from "../../stitches.config";

export interface PopoverProps extends DefaultProps {
  children: ReactNode;
  type?: "click" | "hover";
  align?: "left" | "right" | "center";
  trigger: ReactNode;
  minimal?: boolean;
  width?: number | string;
}
