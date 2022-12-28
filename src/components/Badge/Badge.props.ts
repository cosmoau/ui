import { ReactNode, MouseEventHandler } from "react";

import { DefaultProps } from "../../index";

type PermittedThemes =
  | "red"
  | "orange"
  | "pink"
  | "purple"
  | "blue"
  | "green"
  | "border"
  | "default";
export interface BadgeProps extends Omit<DefaultProps, "spacing"> {
  children: ReactNode;
  loading?: boolean;
  theme?: PermittedThemes;
  onClick?: MouseEventHandler<HTMLDivElement>;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  inline?: DefaultProps["spacing"] | "auto";
  dot?: boolean | "pulse";
  dotColor?: PermittedThemes;
  closable?: boolean;
  block?: boolean;
}
