import { Image, Text } from "../../index";
import { AvatarProps } from "../../types";

import { AvatarStyled } from "./Avatar.styles";

export function Avatar(props: AvatarProps): JSX.Element {
  const { src, alt, fallback, width = 30, css } = props;

  return (
    <AvatarStyled
      css={{
        height: width,
        width: width,
        ...css,
      }}>
      {src ? (
        <Image alt={alt || fallback} fill src={src} />
      ) : (
        <Text as="span">89ekjfjksdnjfsdnkjfsjk{fallback}</Text>
      )}
    </AvatarStyled>
  );
}
