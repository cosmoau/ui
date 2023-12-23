import { default as NextImage } from "next/image";

import { IImage } from "../../types";

import { ImageStyled } from "./styles";

export default function Image({
  css,
  borderRadius,
  fill,
  fillFit,
  fillPosition = "center",
  fillHeight = "100%",
  quality = 60,
  ...rest
}: IImage): JSX.Element {
  return (
    <ImageStyled
      css={{
        ...(borderRadius && {
          borderRadius: `$${borderRadius}`,
          img: {
            borderRadius: `$${borderRadius}`,
          },
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
          objectFit: fill ? fillFit || "cover" : "contain",
          objectPosition: fillPosition,
        }}
      />
    </ImageStyled>
  );
}
