import { TextProps } from "../../types";

import { TextStyled } from "./Text.styles";

export default function Text(props: TextProps): JSX.Element {
  const {
    accent,
    top,
    bottom,
    inline,
    as,
    ariaLabel,
    ariaTitle,
    ariaLabelledBy,
    override,
    css,
    children,
  } = props;
  if (as === "a" && !ariaLabel) {
    throw new Error('Text component with as="a" requires ariaLabel prop');
  }
  if (as === "a" && !ariaLabelledBy) {
    throw new Error('Text component with as="a" requires ariaLabelledBy prop');
  }
  if (as === "a" && !ariaTitle) {
    throw new Error('Text component with as="a" requires ariaTitle prop');
  }

  return (
    <TextStyled
      accent={accent}
      aria-label={ariaLabel || undefined}
      aria-labelledby={ariaLabelledBy || undefined}
      as={override || as || "p"}
      css={{
        ...(top && {
          marginTop: 0,
          paddingTop: `$${top}`,
        }),
        ...(bottom && {
          marginBottom: 0,
          paddingBottom: `$${bottom}`,
        }),
        ...(inline && {
          alignSelf: "center",
          display: "inline-flex",
          marginBottom: "0 !important",
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
          verticalAlign: "middle",
        }),

        ...css,
      }}
      size={as || "p"}
      title={ariaTitle || undefined}>
      {children}
    </TextStyled>
  );
}
