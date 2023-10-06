import { IImageWrapper } from "../../types";

import { ImageWrapperStyled } from "./styles";

export default function ImageWrapper({
  css,
  borderRadius,
  fill,
  fillFit,
  hover,
  fillPosition = "center",
  fillHeight = "100%",
  children,
}: IImageWrapper): JSX.Element {
  return (
    <ImageWrapperStyled
      css={{
        img: {
          objectFit: fill ? fillFit || "cover" : "contain",
          objectPosition: fillPosition,
          ...(borderRadius && {
            borderRadius: `$${borderRadius}`,
          }),
          ...(fill && {
            height: fillHeight,
            width: "100%",
          }),
          ...css,
        },
      }}
      hover={hover}>
      {children}
    </ImageWrapperStyled>
  );
}
