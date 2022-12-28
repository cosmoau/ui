import { Image, Text } from "../../index";

import { AvatarProps } from "./Avatar.props";
import { AvatarStyled } from "./Avatar.styles";

export default function Avatar(props: AvatarProps): JSX.Element {
  const fontSize =
    Math.min((props.width || 35) / 0.9, (props.width || 35) / 0.9) / props.fallback?.length || 1;

  return (
    <AvatarStyled
      css={{
        "*": {
          fontSize: `${fontSize}px`,
        },
        height: props.width || 35,
        width: props.width || 35,

        ...props.css,
      }}>
      {props.src ? (
        <Image alt={props.alt || props.fallback} fill src={props.src} />
      ) : (
        <Text as="span">{props.fallback}</Text>
      )}
    </AvatarStyled>
  );
}
