import { default as NextImage } from "next/image";

import { IImage } from "../../types";

import { ImageStyled } from "./Image.styles";

export function Image(props: IImage): JSX.Element {
  const {
    css,
    borderRadius,
    fill,
    fillFit,
    fillPosition = "center",
    fillHeight = "100%",
    quality = 60,
    ...rest
  } = props;

  return (
    <ImageStyled
      css={{
        ...(borderRadius && {
          borderRadius: `$${borderRadius}`,
        }),
        height: fillHeight,
        overflow: "hidden",
        ...css,
      }}>
      <NextImage
        {...rest}
        fill={fill}
        quality={quality}
        style={{
          ...(borderRadius && {
            borderRadius: `$${borderRadius}`,
          }),
          objectFit: fill ? fillFit || "cover" : "contain",
          objectPosition: fillPosition,
        }}
      />
    </ImageStyled>
  );
}
