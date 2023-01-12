import { Image, Text } from "../../index";
import { AvatarProps } from "../../types";

import { AvatarStyled } from "./Avatar.styles";

export function Avatar(props: AvatarProps): JSX.Element {
  const { src, alt, fallback, width, css } = props;
  const fontSize = Math.min((width || 35) / 0.9, (width || 35) / 0.9) / fallback?.length || 1;

  return (
    <AvatarStyled
      css={{
        "*": {
          fontSize: `${fontSize}px`,
        },
        height: width || 35,
        width: width || 35,

        ...css,
      }}>
      {src ? <Image alt={alt || fallback} fill src={src} /> : <Text as="span">{fallback}</Text>}
    </AvatarStyled>
  );
}
