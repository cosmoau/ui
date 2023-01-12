import { TextProps } from "../../types";

import { TextStyled } from "./Text.styles";

export default function Text(props: TextProps): JSX.Element {
  const { accent, top, bottom, inline, as, override, css, children, ...rest } = props;

  return (
    <TextStyled
      accent={accent}
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
      {...rest}>
      {children}
    </TextStyled>
  );
}
