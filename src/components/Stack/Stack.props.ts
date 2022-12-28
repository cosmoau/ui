import { CSSProperties } from "@stitches/react";
import { ReactNode } from "react";

import { DefaultProps } from "../../index";

export interface StackProps extends Omit<DefaultProps, "spacing"> {
  children: ReactNode;
  direction?: "row" | "column";
  flex?: CSSProperties["alignItems"];
  align?: CSSProperties["textAlign"];
  minimal?: boolean;
  offset?: number;
  offsetDesktop?: number;
  offsetLaptop?: number;
  offsetPhone?: number;
  offsetTablet?: number;
  offsetWide?: number;
  width?: number;
  widthDesktop?: number;
  widthLaptop?: number;
  widthPhone?: number;
  widthTablet?: number;
  widthWide?: number;
  top?: DefaultProps["spacing"];
  bottom?: DefaultProps["spacing"];
  flexduo?: boolean;
}
