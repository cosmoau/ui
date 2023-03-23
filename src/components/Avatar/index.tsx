import { Image, Text, theme } from "../../index";
import { AvatarProps } from "../../types";

import { AvatarStyled } from "./Avatar.styles";

const getLetter = (text: string): string => {
  const letters = "DQWERTYUIOPASDFGHJKLZXCVBNM".split("");
  const colorOptions = [
    theme.colors.blueBackground.value,
    theme.colors.greenBackground.value,
    theme.colors.yellowBackground.value,
    theme.colors.orangeBackground.value,
    theme.colors.redBackground.value,
    theme.colors.purpleBackground.value,
  ];

  const firstLetter = text.charAt(0).toUpperCase();
  const letterIndex = letters.indexOf(firstLetter);
  const lettersPerColor = Math.floor(letters.length / colorOptions.length);
  const colorIndex = Math.floor(letterIndex / lettersPerColor);
  const color = colorOptions[colorIndex];
  const soften = color?.replace("rgb", "rgba").replace(")", ",0.4)");
  return soften;
};

export function Avatar(props: AvatarProps): JSX.Element {
  const { src, alt, fallback, width = 30, css, colors } = props;

  const backgroundColor = colors ? getLetter(fallback) : "transparent";
  return (
    <AvatarStyled
      css={{
        height: width,
        width: width,
        ...(colors && {
          backgroundColor: `${backgroundColor} !important`,
          span: {
            opacity: 1,
          },
        }),
        ...css,
      }}>
      {src ? <Image alt={alt || fallback} height={width} src={src} width={width} /> : <Text as="span">{fallback}</Text>}
    </AvatarStyled>
  );
}
