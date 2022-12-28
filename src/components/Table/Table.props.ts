import { ReactNode } from "react";

export interface TableProps {
  headChildren?: Array<string>;
  bodyChildren?: Array<Array<ReactNode | string>>;
  sort?: boolean;
  sortDisabled?: number | number[];
}
