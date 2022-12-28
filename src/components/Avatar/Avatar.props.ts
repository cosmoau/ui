import { DefaultProps } from "../../index";

export interface AvatarProps extends DefaultProps {
  src?: string;
  alt?: string;
  fallback: string;
  width?: number;
}
