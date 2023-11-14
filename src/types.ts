import { CSSProperties, CSS } from "@stitches/react";
import { ImageProps } from "next/image";
import {
  ReactNode,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  MouseEventHandler,
  ElementType,
  ComponentType,
  RefObject,
} from "react";
import { Toaster } from "react-hot-toast";

import { TextSizes } from "./components/Text/styles";
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
  copy?: string | number | undefined;
  css?: CSS;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  inline?: IThemeSpacing | "auto";
  link?: boolean;
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  small?: boolean;
  theme?: "red" | "orange" | "purple" | "blue" | "green" | "border" | "default" | "alternate";
}

export interface IBox {
  children: ReactNode;
  closable?: boolean;
  css?: CSS;
  footer?: ReactNode;
  header?: ReactNode;
  image?: string;
  imageAlt?: ImageProps["alt"];
  imageCTA?: string;
  imageFit?: CSSProperties["objectFit"];
  imageHeight?: string;
  imagePosition?: CSSProperties["objectPosition"];
  imageSizes?: ImageProps["sizes"];
  imageTarget?: "_blank" | "_self";
  loading?: boolean;
  minimal?: boolean;
  theme?: "default" | "success" | "warning" | "error" | "transparent" | "fill";
}

export interface IButton extends ComponentPropsWithoutRef<"button"> {
  block?: boolean;
  css?: CSS;
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
  disabled?: boolean;
  forceHeight?: number;
  lightbox?: boolean;
  small?: boolean;
  title: string;
  trigger?: ReactNode;
}

export interface ICommand {
  children: ReactNode;
  css?: CSS;
}

export interface IDivider {
  bottom?: IThemeSpacing;
  css?: CSS;
  top?: IThemeSpacing;
}

export interface IField extends ComponentPropsWithRef<"textarea"> {
  copy?: boolean;
  css?: CSS;
  error?: boolean;
  errorMessage?: string;
  loading?: boolean;
  reset?: boolean;
  resetFunction?: () => void;
  submit?: string;
  submitFunction?: (value: string) => void | Promise<void> | unknown;
  submitValid?: (value: string) => boolean;
  success?: boolean;
  successMessage?: string;
  warning?: boolean;
  warningMessage?: string;
  width?: number | string;
}

export interface IForm extends ComponentPropsWithRef<"form"> {
  children: ReactNode;
  css?: CSS;
  disabled?: boolean;
  listen?: boolean;
  loading?: boolean;
  submit?: string;
  submitFunction: () => void | Promise<void> | unknown;
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

export interface IInput extends ComponentPropsWithRef<"input"> {
  copy?: boolean;
  css?: CSS;
  error?: boolean;
  errorMessage?: string;
  listen?: boolean;
  loading?: boolean;
  mustRef?: RefObject<HTMLInputElement>;
  reset?: boolean;
  resetFunction?: () => void;
  reveal?: boolean;
  submit?: string;
  submitFunction?: (value: string) => void | Promise<void> | unknown;
  submitValid?: (value: string) => boolean;
  success?: boolean;
  successMessage?: string;
  warning?: boolean;
  warningMessage?: string;
  width?: number | string;
}

export interface ILoading {
  css?: CSS;
  horizontal?: "left" | "right";
  stroke?: string;
  vertical?: "top" | "bottom";
  width?: number | string;
}

export interface ILogo {
  css?: CSS;
  height?: number | string;
  inline?: IThemeSpacing | "auto";
  width?: number | string;
}

export interface IMenu {
  children?: ReactNode;
  css?: CSS;
  onSelection?: (value: string, label: string) => void;
  options: Array<{
    label: string;
    value: string;
  }>;
  selection?: string;
  trigger: ReactNode;
}

export interface IPlaces extends IInput {
  apiKey: string;
  country?: string | string[];
  handleAutocomplete?: (
    data: {
      address: string;
      city: string;
      restrictedAddress: string;
      state: string;
    } | null,
  ) => void;
  restrict?: boolean;
}

export interface IPopover {
  children: ReactNode;
  css?: CSS;
  disabled?: boolean;
  minimal?: boolean;
  small?: boolean;
  trigger: ReactNode;
}

export interface IProvider {
  children: ReactNode;
  css?: CSS;
  dark?: boolean;
}

export interface ISelect {
  css?: CSS;
  disabled?: boolean;
  filter?: boolean;
  height?: number | string;
  horizontal?: "left" | "right" | "center";
  label?: string;
  last?: boolean;
  loading?: boolean;
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
  as?: keyof JSX.IntrinsicElements;
  bottom?: IThemeSpacing;
  children: ReactNode;
  className?: string;
  css?: CSS;
  direction?: "row" | "column";
  flex?: CSSProperties["alignItems"];
  flexduo?: boolean;
  id?: string;
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
  bodyChildren?: Array<Array<{ label?: ReactNode; value: string | number; width?: string | number }>>;
  collapse?: boolean;
  collapseDisabled?: number[];
  css?: CSS;
  defaultDirection?: "asc" | "desc";
  defaultLimit?: 10 | 25 | 50 | 100 | 200;
  defaultSort?: number;
  filters?: ReactNode;
  headChildren?: Array<string>;
  header?: {
    count?: string | number;
    options?: ReactNode;
    title: string;
  } | null;
  identifier?: string;
  kbd?: boolean;
  loading?: boolean;
  pagination?: boolean;
  restrictLimit?: number;
  rowNumbers?: boolean;
  slim?: boolean;
  sortDisabled?: number[];
  sortable?: boolean;
}

export interface IText extends ComponentPropsWithoutRef<"div"> {
  accent?: boolean;
  as?: keyof typeof TextSizes;
  balanced?: boolean;
  bottom?: IThemeSpacing;
  children: ReactNode;
  css?: CSS;
  highlight?: "red" | "orange" | "purple" | "blue" | "green" | "default" | "alternate";
  inline?: IThemeSpacing | "auto";
  link?: "minimal" | "default" | "alternate";
  override?: keyof typeof TextSizes;
  top?: IThemeSpacing;
}

export type IToast = InferComponentProps<typeof Toaster>;

export interface IView {
  bottom?: IThemeSpacing;
  children: ReactNode;
  container?: boolean;
  css?: CSS;
  gradient?: boolean;
  inverted?: boolean;
  noPrint?: boolean;
  top?: IThemeSpacing;
}

export interface IIcon {
  children: ReactNode;
  css?: CSS;
  forceColor?: keyof typeof theme.colors;
  forceSize?: number;
  inline?: IThemeSpacing | "auto";
}
