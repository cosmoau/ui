import { ReactNode } from "react";

import { DefaultProps } from "../../index";

export interface BoxProps extends DefaultProps {
  children: ReactNode;
  loading?: boolean;
  image?: string;
  imageCTA?: string;
  imageHeight?: string;
  imageTarget?: "_blank" | "_self";
  imagePosition?: "center" | "top" | "bottom" | "left" | "right";
  imageFit?: "contain" | "cover";
  imageAlt?: string;
  hover?: boolean;
  theme?: "default" | "success" | "warning" | "error" | "transparent" | "fill";
  closable?: boolean;
  minimal?: boolean;
}
