import { IText } from "../../types";

import { TextStyled } from "./Text.styles";

export function Text(props: IText): JSX.Element {
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
