import { CSSProperties } from "@stitches/react";
import { ImageProps as NextImageProps } from "next/image";

import { DefaultProps } from "../../index";

export interface ImageProps extends DefaultProps, NextImageProps {
  borderRadius?: 1 | 2 | 3;
  hover?: boolean;
  fillFit?: CSSProperties["objectFit"];
  fillPosition?: CSSProperties["objectPosition"];
  fillHeight?: string | number;
  fill?: boolean;
}
