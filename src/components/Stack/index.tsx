import { breakpoints } from "../../stitches.config";
import { StackProps } from "../../types";

import { StackColumnStyled, StackRowStyled, StackElementStyled } from "./Stack.styles";

export function Stack(props: StackProps): JSX.Element {
  const {
    direction,
    align,
    top,
    bottom,
    flex,
    flexduo,
    minimal,
    width,
    children,
    offset,
    widthPhone,
    offsetPhone,
    widthTablet,
    offsetTablet,
    widthLaptop,
    offsetLaptop,
    widthDesktop,
    offsetDesktop,
    widthWide,
    offsetWide,
    css,
    noPrint,
    ...rest
  } = props;

  const StackElement = direction === "row" ? StackRowStyled : direction === "column" ? StackColumnStyled : StackElementStyled;

  return (
    <StackElement
      css={{
        textAlign: align,
        ...(top && {
          marginTop: 0,
          paddingTop: `$${top}`,
        }),
        ...(bottom && {
          marginBottom: 0,
          paddingBottom: `$${bottom}`,
        }),
        ...(minimal && {
          paddingLeft: 0,
          paddingRight: 0,
        }),
        ...(direction === "column" && {
          desktopX: {
            flex: widthDesktop ? `0 0 ${widthDesktop}%` : `0 0 ${width}%`,
            marginLeft: offsetDesktop ? `${offsetDesktop}%` : `${offset}%`,
            width: widthDesktop ? `${widthDesktop}%` : `${width}%`,
          },
          laptopX: {
            flex: widthLaptop ? `0 0 ${widthLaptop}%` : `0 0 ${width}%`,
            marginLeft: offsetLaptop ? `${offsetLaptop}%` : `${offset}%`,
            width: widthLaptop ? `${widthLaptop}%` : `${width}%`,
          },
          phone: {
            flex: widthPhone ? `0 0 ${widthPhone}%` : `0 0 100%`,
            marginLeft: offsetPhone ? `${offsetPhone}%` : 0,
            width: widthPhone ? `${widthPhone}%` : `100%`,
          },
          tabletX: {
            flex: widthTablet ? `0 0 ${widthTablet}%` : `0 0 ${width}%`,
            marginLeft: offsetTablet ? `${offsetTablet}%` : `${offset}%`,
            width: widthTablet ? `${widthTablet}%` : `${width}%`,
          },
          wide: {
            flex: widthWide ? `0 0 ${widthWide}%` : `0 0 ${width}%`,
            marginLeft: offsetWide ? `${offsetWide}%` : `${offset}%`,
            width: widthWide ? `${widthWide}%` : `${width}%`,
          },
        }),
        ...(direction === "row" && {
          "*": {
            alignItems: flex || "normal",
          },
          alignItems: flex || "normal",
        }),
        ...(noPrint && {
          [breakpoints.special.print]: {
            display: "none",
          },
        }),
        ...css,
      }}
      flexduo={flexduo}
      {...rest}>
      {children}
    </StackElement>
  );
}
