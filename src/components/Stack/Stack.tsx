import { IStack } from "../../types";

import { StackStyled, StackColumnStyled, StackRowStyled } from "./Stack.styles";

export default function Stack({
  direction,
  align,
  top,
  bottom,
  flex,
  flexduo,
  minimal,
  width = 100,
  children,
  offset = 0,
  widthPhone,
  offsetPhone,
  widthTablet,
  offsetTablet,
  widthLaptop,
  offsetLaptop,
  widthDesktop,
  offsetDesktop,
  widthWide,
  className,
  offsetWide,
  css,
  noPrint,
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
        }}>
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
      css={{
        ...shared,
      }}
      flexduo={flexduo}
      {...rest}>
      {children}
    </StackStyled>
  );
}
