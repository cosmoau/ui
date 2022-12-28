import { DefaultProps } from "../../stitches.config";

export interface DividerProps extends Omit<DefaultProps, "spacing"> {
  top?: DefaultProps["spacing"];
  bottom?: DefaultProps["spacing"];
}
