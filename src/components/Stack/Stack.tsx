import { breakpoints } from "../../stitches.config";

import { StackProps } from "./Stack.props";
import { StackColumnStyled, StackRowStyled, StackElementStyled } from "./Stack.styles";

export default function Stack(props: StackProps): JSX.Element {
  const StackElement =
    props.direction === "row"
      ? StackRowStyled
      : props.direction === "column"
      ? StackColumnStyled
      : StackElementStyled;

  return (
    <StackElement
      css={{
        textAlign: props.align,
        ...(props.top && {
          marginTop: 0,
          paddingTop: `$${props.top}`,
        }),
        ...(props.bottom && {
          marginBottom: 0,
          paddingBottom: `$${props.bottom}`,
        }),
        ...(props.minimal && {
          paddingLeft: 0,
          paddingRight: 0,
        }),
        ...(props?.direction === "column" && {
          [breakpoints.phone]: {
            flex: props.widthPhone ? `0 0 ${props.widthPhone}%` : `0 0 100%`,
            marginLeft: props.offsetPhone ? `${props.offsetPhone}%` : 0,
            width: props.widthPhone ? `${props.widthPhone}%` : `100%`,
          },
          [breakpoints.tabletX]: {
            flex: props.widthTablet ? `0 0 ${props.widthTablet}%` : `0 0 ${props.width}%`,
            marginLeft: props.offsetTablet ? `${props.offsetTablet}%` : `${props.offset}%`,
            width: props.widthTablet ? `${props.widthTablet}%` : `${props.width}%`,
          },
          [breakpoints.laptopX]: {
            flex: props.widthLaptop ? `0 0 ${props.widthLaptop}%` : `0 0 ${props.width}%`,
            marginLeft: props.offsetLaptop ? `${props.offsetLaptop}%` : `${props.offset}%`,
            width: props.widthLaptop ? `${props.widthLaptop}%` : `${props.width}%`,
          },
          [breakpoints.desktopX]: {
            flex: props.widthDesktop ? `0 0 ${props.widthDesktop}%` : `0 0 ${props.width}%`,
            marginLeft: props.offsetDesktop ? `${props.offsetDesktop}%` : `${props.offset}%`,
            width: props.widthDesktop ? `${props.widthDesktop}%` : `${props.width}%`,
          },
          [breakpoints.wide]: {
            flex: props.widthWide ? `0 0 ${props.widthWide}%` : `0 0 ${props.width}%`,
            marginLeft: props.offsetWide ? `${props.offsetWide}%` : `${props.offset}%`,
            width: props.widthWide ? `${props.widthWide}%` : `${props.width}%`,
          },
        }),
        ...(props?.direction === "row" && {
          "*": {
            alignItems: props.flex || "normal",
          },
          alignItems: props.flex || "normal",
        }),
        ...props.css,
      }}
      flexduo={props.flexduo}>
      {props.children}
    </StackElement>
  );
}
