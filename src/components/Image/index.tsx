import { default as NextImage } from "next/image";

import { IImage } from "../../types";

import { ImageStyled } from "./Image.styles";

export function Image(props: IImage): JSX.Element {
  const {
    css,
    borderRadius,
    fill,
    fillFit,
    fillPosition,
    fillHeight = "100%",
    sizes,
    quality,
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
        decoding="async"
        fill={fill}
        quality={quality || 70}
        sizes={sizes}
        style={{
          borderRadius: `$${borderRadius} `,
          objectFit: fill ? fillFit || "cover" : "contain",
          objectPosition: fillPosition,
        }}
      />
    </ImageStyled>
  );
}
