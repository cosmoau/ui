import { default as NextImage } from "next/image";

import { IImage } from "../../types";

import { ImageStyled } from "./Image.styles";

export function Image(props: IImage): JSX.Element {
  const { css, borderRadius, fill, fillFit = 'contain', fillPosition, fillHeight = "100%", sizes, quality, ...rest } =
    props;

  if (fill && !sizes) {
    // eslint-disable-next-line no-console
    console.warn(
      "Define responsive sizes when using fill. See https://nextjs.org/docs/pages/api-reference/components/image#sizes"
    );
  }

  return (
    <ImageStyled
      css={{
        ...(borderRadius && {
          borderRadius: `$${borderRadius}`,
        }),
        height: fillHeight,
        ...css,
      }}>
      <NextImage
        {...rest}
        decoding="async"
        fill={fill}
        quality={quality || 70}
        sizes={sizes}
        style={{
          borderRadius: `$${borderRadius}`,
          objectFit: fillFit || (fill ? 'cover' : "contain"),
          objectPosition: fillPosition,
        }}
      />
    </ImageStyled>
  );
}
