import { Image, Text, theme } from "../../index";
import { IAvatar } from "../../types";

import { AvatarStyled } from "./Avatar.styles";

const hexToRgba = (hex: string, opacity: number): string => {
  const hexValue = hex.replace("#", "");
  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const getLetter = (
  text: string
): {
  backgroundColor: string;
  borderColor: string;
  color: string;
} => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const backgroundOptions = [
    hexToRgba(theme.colors.blueBackground.value, 0.4),
    hexToRgba(theme.colors.greenBackground.value, 0.4),
    hexToRgba(theme.colors.orangeBackground.value, 0.4),
    hexToRgba(theme.colors.redBackground.value, 0.4),
    hexToRgba(theme.colors.purpleBackground.value, 0.4),
  ];
  const colorOptions = [
    theme.colors.blueText.value,
    theme.colors.greenText.value,
    theme.colors.orangeText.value,
    theme.colors.redText.value,
    theme.colors.purpleText.value,
  ];
  const borderColorOptions = [
    hexToRgba(theme.colors.blueText.value, 0.2),
    hexToRgba(theme.colors.greenText.value, 0.2),
    hexToRgba(theme.colors.orangeText.value, 0.2),
    hexToRgba(theme.colors.redText.value, 0.2),
    hexToRgba(theme.colors.purpleText.value, 0.2),
  ];

  const letter = text.charAt(0).toUpperCase();
  const index = letters.indexOf(letter);
  const color = colorOptions[index % colorOptions.length];
  const backgroundColor = backgroundOptions[index % backgroundOptions.length] + " !important";
  const borderColor = borderColorOptions[index % borderColorOptions.length];

  return {
    backgroundColor,
    borderColor,
    color,
  };
};

export function Avatar(props: IAvatar): JSX.Element {
  const { src, alt, fallback, width = 22, css, colors } = props;

  const { color, backgroundColor, borderColor } = getLetter(fallback);

  return (
    <AvatarStyled
      css={{
        height: width,
        width: width,
        ...(colors && {
          backgroundColor,
          border: `0.1rem solid ${borderColor}`,
          span: {
            color,
          },
        }),
        ...css,
      }}>
      {src ? (
        <Image alt={alt || fallback} fillFit="cover" height={width} src={src} width={width} />
      ) : (
        <Text as="span">{fallback}</Text>
      )}
    </AvatarStyled>
  );
}
