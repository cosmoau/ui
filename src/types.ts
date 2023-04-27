import { CSSProperties, CSS } from "@stitches/react";
import { ImageProps } from "next/image";
import {
  ReactNode,
  TextareaHTMLAttributes,
  InputHTMLAttributes,
  RefObject,
  HTMLAttributes,
  MouseEventHandler,
  ElementType,
  ComponentType,
  SVGProps,
  FormHTMLAttributes,
} from "react";
import { Toaster } from "react-hot-toast";

import { TextSizes } from "./components/Text/Text.styles";
import { theme } from "./stitches.config";

type IThemeSpacing = keyof typeof theme.space;

type InferComponentProps<T extends ElementType> = T extends ComponentType<infer U>
  ? U
  : T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : Record<string, never>;

export interface IAvatar {
  alt?: string;
  colors?: boolean;
  css?: CSS;
  fallback: string;
  src?: string;
  width?: number;
}

export interface IBadge {
  block?: boolean;
  children?: ReactNode;
  closable?: boolean;
  copy?: boolean;
  copyText?: string | number | undefined;
  css?: CSS;
  dot?: boolean | "pulse";
  dotColor?: "red" | "orange" | "purple" | "blue" | "green" | "border" | "default";
  icon?: ReactNode;
  iconOnly?: boolean;
  iconPosition?: "left" | "right";
  inline?: IThemeSpacing | "auto";
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  small?: boolean;
  theme?: "red" | "orange" | "yellow" | "purple" | "blue" | "green" | "border" | "default";
}

export interface IBox {
  children: ReactNode;
  closable?: boolean;
  css?: CSS;
  header?: ReactNode;
  hover?: boolean;
  image?: string;
  imageAlt?: string;
  imageCTA?: string;
  imageFit?: CSSProperties["objectFit"];
  imageHeight?: string;
  imagePosition?: CSSProperties["objectPosition"];
  imageTarget?: "_blank" | "_self";
  loading?: boolean;
  minimal?: boolean;
  theme?: "default" | "success" | "warning" | "error" | "transparent" | "fill";
}

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  children: ReactNode | string;
  css?: CSS;
  disabled?: boolean;
  external?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  inline?: IThemeSpacing | "auto";
  loading?: boolean;
  small?: boolean;
  theme?: "default" | "fill" | "minimal" | "solid";
}

export interface ICode {
  children: ReactNode;
  css?: CSS;
}

export interface IDialog {
  children: ReactNode;
  close?: () => void;
  css?: CSS;
  height?: number | string;
  locked?: boolean;
  trigger: ReactNode;
  width?: number | string;
}

export interface ICommand {
  children: ReactNode;
  css?: CSS;
}

export interface IDivider extends HTMLAttributes<HTMLHRElement> {
  bottom?: IThemeSpacing;
  css?: CSS;
  top?: IThemeSpacing;
}

export interface IField extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  copy?: boolean;
  css?: CSS;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  loading?: boolean;
  submit?: string;
  submitFunction?: (value: string | number) => void | Promise<void>;
  submitValid?: boolean;
  success?: boolean;
  successMessage?: string;
  warning?: boolean;
  warningMessage?: string;
  width?: number | string;
}

export interface IForm extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  css?: CSS;
  disabled?: boolean;
  listen?: boolean;
  mustRef?: RefObject<HTMLFormElement>;
  submit?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  submitFunction?: any;
  submitValid?: boolean;
}

export interface IImage extends ImageProps {
  borderRadius?: keyof typeof theme.radii;
  css?: CSS;
  fill?: boolean;
  fillFit?: CSSProperties["objectFit"];
  fillHeight?: string | number;
  fillPosition?: CSSProperties["objectPosition"];
}

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  copy?: boolean;
  css?: CSS;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  icon?: ReactNode;
  listen?: boolean;
  loading?: boolean;
  mustRef?: RefObject<HTMLInputElement>;
  reset?: boolean;
  resetFunction?: () => void;
  reveal?: boolean;
  submit?: string;
  submitFunction?: (value: string | number) => void | Promise<void>;
  submitValid?: boolean;
  success?: boolean;
  successMessage?: string;
  warning?: boolean;
  warningMessage?: string;
  width?: number | string;
}

export interface ILoading {
  horizontal?: "left" | "right";
  stroke?: string;
  vertical?: "top" | "bottom";
  width?: number | string;
}

export interface ILogo extends SVGProps<SVGSVGElement> {
  css?: CSS;
  inline?: IThemeSpacing | "auto";
}

export interface IPopover {
  children: ReactNode;
  css?: CSS;
  horizontal?: "left" | "right" | "center";
  minimal?: boolean;
  trigger: ReactNode;
  type?: "click" | "hover";
  vertical?: "top" | "bottom";
  width?: number | string;
}

export interface IProvider {
  children: ReactNode;
  css?: CSS;
  initial?: "dark" | "light";
  locked?: "dark" | "light";
  trigger?: ReactNode;
  triggerActive?: ReactNode;
}

export interface ISelect {
  css?: CSS;
  filter?: boolean;
  height?: number | string;
  horizontal?: "left" | "right" | "center";
  label?: string;
  last?: boolean;
  loading?: boolean;
  locked?: boolean;
  onSelection?: (value: string, label: string) => void;
  options: Array<{
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    label: string;
    value: string;
  }>;
  selection?: string[];
  trigger: ReactNode;
  vertical?: "top" | "bottom";
  width?: number | string;
}

export interface IStack {
  align?: CSSProperties["textAlign"];
  bottom?: IThemeSpacing;
  children: ReactNode;
  className?: string;
  css?: CSS;
  direction?: "row" | "column";
  flex?: CSSProperties["alignItems"];
  flexduo?: boolean;
  minimal?: boolean;
  noPrint?: boolean;
  offset?: number;
  offsetDesktop?: number;
  offsetLaptop?: number;
  offsetPhone?: number;
  offsetTablet?: number;
  offsetWide?: number;
  top?: IThemeSpacing;
  width?: number;
  widthDesktop?: number;
  widthLaptop?: number;
  widthPhone?: number;
  widthTablet?: number;
  widthWide?: number;
}

export interface ITable {
  bodyChildren?: Array<
    Array<{ label?: ReactNode; value: string | number; width?: string | number }>
  >;
  css?: CSS;
  defaultDirection?: "asc" | "desc";
  defaultLimit?: 10 | 25 | 50 | 100 | 200;
  defaultSort?: number;
  headChildren?: Array<string>;
  hover?: boolean;
  identifier?: string;
  loading?: boolean;
  pagination?: boolean;
  restrictLimit?: number;
  rowNumbers?: boolean;
  sortDisabled?: number[];
  sortable?: boolean;
}

export interface IText extends HTMLAttributes<HTMLDivElement> {
  accent?: boolean;
  as?: keyof typeof TextSizes;
  bottom?: IThemeSpacing;
  children: ReactNode;
  css?: CSS;
  inline?: IThemeSpacing | "auto";
  override?: keyof typeof TextSizes;
  top?: IThemeSpacing;
}

export type IToast = InferComponentProps<typeof Toaster>;

export interface IView {
  bottom?: IThemeSpacing;
  children: ReactNode;
  container?: boolean;
  css?: CSS;
  inverted?: boolean;
  noPrint?: boolean;
  top?: IThemeSpacing;
}
