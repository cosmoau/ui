import { CSSProperties } from "@stitches/react";
import { ImageProps as NextImageProps } from "next/image";

import { DefaultProps } from "../../index";

export interface ImageProps extends DefaultProps, NextImageProps {
  borderRadius?: "a" | "b" | "c";
  hover?: boolean;
  fillFit?: CSSProperties["objectFit"];
  fillPosition?: CSSProperties["objectPosition"];
  fillHeight?: string | number;
  fill?: boolean;
}
