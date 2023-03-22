import { Image, Text } from "../../index";
import { AvatarProps } from "../../types";

import { AvatarStyled } from "./Avatar.styles";

export function Avatar(props: AvatarProps): JSX.Element {
  const { src, alt, fallback, width = 30, css } = props;

  return (
    <AvatarStyled css={css}>
      {src ? (
        <Image alt={alt || fallback} height={width} src={src} width={width} />
      ) : (
        <Text as="span">89ekjfjksdnjfsdnkjfsjk{fallback}</Text>
      )}
    </AvatarStyled>
  );
}
