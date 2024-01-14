import { Image, Text, theme } from "../../index";
import { IAvatar } from "../../types";

import { AvatarStyled } from "./styles";

const hexToRGB = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5), 16);

  return `${r}, ${g}, ${b}`;
};

const getLetter = (
  text: string,
): {
  backgroundColor: string;
  borderColor: string;
  color: string;
} => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const backgroundOptions = [
    hexToRGB(theme.colors.blueBackground.value),
    hexToRGB(theme.colors.greenBackground.value),
    hexToRGB(theme.colors.orangeBackground.value),
    hexToRGB(theme.colors.redBackground.value),
    hexToRGB(theme.colors.purpleBackground.value),
  ];
  const colorOptions = [
    theme.colors.blueText.value,
    theme.colors.greenText.value,
    theme.colors.orangeText.value,
    theme.colors.redText.value,
    theme.colors.purpleText.value,
  ];
  const borderColorOptions = [
    hexToRGB(theme.colors.blueText.value),
    hexToRGB(theme.colors.greenText.value),
    hexToRGB(theme.colors.orangeText.value),
    hexToRGB(theme.colors.redText.value),
    hexToRGB(theme.colors.purpleText.value),
  ];

  const letter = text.charAt(0).toUpperCase();
  const index = letters.indexOf(letter);
  const color = colorOptions[index % colorOptions.length];
  const backgroundColor = backgroundOptions[index % backgroundOptions.length];
  const borderColor = borderColorOptions[index % borderColorOptions.length];

  return {
    backgroundColor,
    borderColor,
    color,
  };
};

export default function Avatar({ src, alt, fallback, width = 24, css, colors }: IAvatar): JSX.Element {
  const { color, backgroundColor, borderColor } = getLetter(fallback);

  return (
    <AvatarStyled
      css={{
        height: width,
        maxHeight: width,
        maxWidth: width,
        minHeight: width,
        minWidth: width,
        width: width,
        ...(colors && {
          backgroundColor: `rgba(${backgroundColor}, 0.475)`,
          border: `0.1rem solid ${borderColor}`,
          darkModeSpec: {
            backgroundColor: `rgba(${backgroundColor}, 0.95)`,
          },
          span: {
            color,
          },
        }),
        ...css,
      }}>
      {src ? (
        <Image alt={alt || fallback} fill fillFit="cover" sizes={`${width}px`} src={src} />
      ) : (
        <Text as="span">{fallback}</Text>
      )}
    </AvatarStyled>
  );
}
