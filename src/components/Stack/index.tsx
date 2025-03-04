import type { JSX } from "react";

import { IStack } from "../../types";
import { StackStyled, StackColumnStyled, StackRowStyled } from "./styles";

export default function Stack({
  align,
  bottom,
  children,
  className,
  collapseduo,
  css,
  direction,
  flex,
  flexduo,
  id,
  minimal,
  noPrint,
  offset = 0,
  offsetDesktop,
  offsetLaptop,
  offsetPhone,
  offsetTablet,
  offsetWide,
  top,
  width = 100,
  widthDesktop,
  widthLaptop,
  widthPhone,
  widthTablet,
  widthWide,
  ...rest
}: IStack): JSX.Element {
  const shared = {
    ...(align && {
      textAlign: align,
    }),
    ...(top && {
      marginTop: 0,
      paddingTop: `$${top}`,
    }),
    ...(bottom && {
      marginBottom: 0,
      paddingBottom: `$${bottom}`,
    }),
    ...(noPrint && {
      print: {
        display: "none",
      },
    }),
    ...css,
  };

  if (direction === "row") {
    return (
      <StackRowStyled
        className={className}
        css={{
          alignItems: flex || "normal",
          justifyContent: flex || "normal",
          ...shared,
        }}
        id={id}>
        {children}
      </StackRowStyled>
    );
  }

  if (direction === "column") {
    return (
      <StackColumnStyled
        className={className}
        css={{
          desktopX: {
            flex: `0 0 ${widthDesktop || width}%`,
            marginLeft: `${offsetDesktop || offset}%`,
            width: `${widthDesktop || width}%`,
          },
          laptopX: {
            flex: `0 0 ${widthLaptop || width}%`,
            marginLeft: `${offsetLaptop || offset}%`,
            width: `${widthLaptop || width}%`,
          },
          phone: {
            flex: `0 0 ${widthPhone || 100}%`,
            marginLeft: `${offsetPhone || 0}%`,
            width: `${widthPhone || 100}%`,
          },
          tabletX: {
            flex: `0 0 ${widthTablet || width}%`,
            marginLeft: `${offsetTablet || offset}%`,
            width: `${widthTablet || width}%`,
          },
          wide: {
            flex: `0 0 ${widthWide || width}%`,
            marginLeft: `${offsetWide || offset}%`,
            width: `${widthWide || width}%`,
          },
          ...shared,
        }}
        minimal={minimal}>
        {children}
      </StackColumnStyled>
    );
  }

  return (
    <StackStyled
      className={className}
      collapseduo={collapseduo}
      css={{
        ...shared,
      }}
      flexduo={flexduo}
      {...rest}>
      {children}
    </StackStyled>
  );
}
