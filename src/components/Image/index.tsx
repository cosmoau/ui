import { default as NextImage } from "next/image";

import { ImageProps } from "../../types";

import { ImageStyled } from "./Image.styles";

export function Image(props: ImageProps): JSX.Element {
  const { css, borderRadius, hover, fill, fillFit, fillPosition, fillHeight, ...rest } = props;
  return (
    <ImageStyled
      css={{
        img: {
          objectFit: fillFit || "contain",
          objectPosition: fillPosition || "center",
        },
        ...(hover && {
          "&:hover": {
            opacity: 0.9,
          },
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
      <NextImage
        {...rest}
        fill={fill}
        style={{
          borderRadius: borderRadius ? "$" + borderRadius : undefined,
          objectFit: fillFit || "cover",
          objectPosition: fillPosition || "center",
        }}
      />
    </ImageStyled>
  );
}
