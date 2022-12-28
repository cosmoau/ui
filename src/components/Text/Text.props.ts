import { ReactNode } from "react";

import { DefaultProps } from "../../index";

import { TextSizes } from "./Text.styles";

export interface TextProps extends Omit<DefaultProps, "spacing"> {
  children: ReactNode;
  bold?: boolean;
  accent?: boolean;
  as?: keyof typeof TextSizes;
  override?: keyof typeof TextSizes;
  top?: DefaultProps["spacing"];
  bottom?: DefaultProps["spacing"];
  inline?: DefaultProps["spacing"] | "auto";
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaTitle?: string;
}
