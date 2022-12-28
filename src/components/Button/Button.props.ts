import { HTMLAttributes, ReactNode } from "react";

import { DefaultProps } from "../../index";

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    Omit<DefaultProps, "spacing"> {
  children: ReactNode | string;
  loading?: boolean;
  disabled?: boolean;
  theme?: "default" | "fill" | "minimal" | "solid";
  block?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  inline?: DefaultProps["spacing"] | "auto";
  small?: boolean;
  ariaLabel?: string;
  name?: string;
  external?: boolean;
}
