import { CSSProperties, CSS } from "@stitches/react";
import { ImageProps as NextImageProps } from "next/image";
import {
  ReactNode,
  TextareaHTMLAttributes,
  InputHTMLAttributes,
  RefObject,
  HTMLAttributes,
  MouseEventHandler,
  ElementType,
  ComponentType,
} from "react";
import { Toaster } from "react-hot-toast";

import { TextSizes } from "./components/Text/Text.styles";
import { theme } from "./stitches.config";

type ThemeSpacing = keyof typeof theme.space;

type InferComponentProps<T extends ElementType> = T extends ComponentType<infer U>
  ? U
  : T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : Record<string, never>;

export interface AvatarProps {
  css?: CSS;
  src?: string;
  alt?: string;
  fallback: string;
  width?: number;
}

export interface BadgeProps {
  css?: CSS;
  children: ReactNode;
  loading?: boolean;
  theme?: "red" | "orange" | "pink" | "purple" | "blue" | "green" | "border" | "default";
  onClick?: MouseEventHandler<HTMLDivElement>;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  inline?: ThemeSpacing | "auto";
  dot?: boolean | "pulse";
  dotColor?: "red" | "orange" | "pink" | "purple" | "blue" | "green" | "border" | "default";
  closable?: boolean;
  block?: boolean;
}

export interface BoxProps {
  css?: CSS;
  children: ReactNode;
  loading?: boolean;
  image?: string;
  imageCTA?: string;
  imageHeight?: string;
  imageTarget?: "_blank" | "_self";
  imagePosition?: CSSProperties["objectPosition"];
  imageFit?: CSSProperties["objectFit"];
  imageAlt?: string;
  hover?: boolean;
  theme?: "default" | "success" | "warning" | "error" | "transparent" | "fill";
  closable?: boolean;
  minimal?: boolean;
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  css?: CSS;
  children: ReactNode | string;
  loading?: boolean;
  disabled?: boolean;
  theme?: "default" | "fill" | "minimal" | "solid";
  block?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  inline?: ThemeSpacing | "auto";
  small?: boolean;
  ariaLabel?: string;
  name?: string;
  external?: boolean;
}

export interface CodeProps {
  css?: CSS;
  children: ReactNode;
  copy?: boolean;
}

export interface DialogProps {
  css?: CSS;
  children: ReactNode;
  trigger: ReactNode;
  locked?: boolean;
}

export interface DividerProps {
  css?: CSS;
  top?: ThemeSpacing;
  bottom?: ThemeSpacing;
}

export interface FieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  css?: CSS;
  copy?: boolean;
  error?: boolean;
  errorMessage?: string;
  loading?: boolean;
  reveal?: boolean;
  submit?: string;
  submitFunction?: (value: string | number | unknown) => void;
  submitValid?: boolean;
  success?: boolean;
  successMessage?: string;
  warning?: boolean;
  warningMessage?: string;
  disabled?: boolean;
  width?: number | string;
}

export interface ImageProps extends NextImageProps {
  css?: CSS;
  borderRadius?: keyof typeof theme.radii;
  hover?: boolean;
  fillFit?: CSSProperties["objectFit"];
  fillPosition?: CSSProperties["objectPosition"];
  fillHeight?: string | number;
  fill?: boolean;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  css?: CSS;
  copy?: boolean;
  error?: boolean;
  errorMessage?: string;
  loading?: boolean;
  reveal?: boolean;
  submit?: string;
  icon?: ReactNode;
  submitFunction?: (value: string | number | unknown) => void;
  submitValid?: boolean;
  success?: boolean;
  successMessage?: string;
  warning?: boolean;
  warningMessage?: string;
  disabled?: boolean;
  width?: number | string;
  listen?: boolean;
  mustRef?: RefObject<HTMLInputElement>;
}

export interface LoadingProps {
  stroke?: string;
  width?: number | string;
}

export interface PopoverProps {
  css?: CSS;
  children: ReactNode;
  type?: "click" | "hover";
  align?: "left" | "right" | "center";
  trigger: ReactNode;
  minimal?: boolean;
  width?: number | string;
}

export interface ProviderProps {
  css?: CSS;
  children: ReactNode;
  default?: "dark" | "light";
  locked?: "dark" | "light";
  trigger?: ReactNode;
  triggerActive?: ReactNode;
}

export interface SelectProps {
  css?: CSS;
  options: Array<{
    label: string;
    value: string;
  }>;
  align?: "left" | "right" | "center";
  width?: number | string;
  selection?: string;
  onSelection?: (value: string, label: string) => void;
  trigger: ReactNode;
  locked?: boolean;
  filter?: boolean;
  last?: boolean;
  loading?: boolean;
}

export interface StackProps {
  css?: CSS;
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
  top?: ThemeSpacing;
  bottom?: ThemeSpacing;
  flexduo?: boolean;
}

export interface TableProps {
  css?: CSS;
  headChildren?: Array<string>;
  bodyChildren?: Array<Array<ReactNode | string>>;
  sort?: boolean;
  sortDisabled?: number | number[];
}

export interface TextProps {
  css?: CSS;
  children: ReactNode;
  bold?: boolean;
  accent?: boolean;
  as?: keyof typeof TextSizes;
  override?: keyof typeof TextSizes;
  top?: ThemeSpacing;
  bottom?: ThemeSpacing;
  inline?: ThemeSpacing | "auto";
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaTitle?: string;
}

export type ToastProps = InferComponentProps<typeof Toaster>;

export interface ViewProps {
  css?: CSS;
  children: ReactNode;
  container?: boolean;
  top?: ThemeSpacing;
  bottom?: ThemeSpacing;
  inverted?: boolean;
  soft?: boolean;
}
