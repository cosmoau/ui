import { default as NextImage } from "next/image";

import { IImage } from "../../types";

import { ImageStyled } from "./Image.styles";

export function Image(props: IImage): JSX.Element {
  const { css, borderRadius, fill, fillFit, fillPosition, fillHeight, sizes, quality, ...rest } =
    props;

  if (fill && !sizes) {
    throw new Error(
      "Define responsive sizes when using fill. See https://nextjs.org/docs/pages/api-reference/components/image#sizes"
    );
  }

  return (
    <ImageStyled
      css={{
        img: {
          objectFit: fillFit || "contain",
          objectPosition: fillPosition || "center",
        },

        ...(fill && {
          overflow: "hidden",
        }),

        ...(borderRadius && {
          borderRadius: `$${borderRadius}`,

          img: {
            borderRadius: `$${borderRadius}`,
          },
        }),
        height: fillHeight || "100%",
        ...css,
      }}>
      <NextImage {...rest} decoding="async" fill={fill} quality={quality || 70} sizes={sizes} />
    </ImageStyled>
  );
}
