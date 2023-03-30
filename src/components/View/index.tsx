import { breakpoints, darkTheme, theme } from "../../stitches.config";
import { ViewProps } from "../../types";

import { ViewStyled, ViewContainerStyled } from "./View.styles";

export function View(props: ViewProps): JSX.Element {
  const { container, inverted, top, bottom, css, children, noPrint } = props;

  const className = inverted ? darkTheme.className : theme.className;

  return (
    <ViewStyled
      className={className}
      css={{
        ...(top && {
          marginTop: 0,
          paddingTop: `$${top}`,
        }),
        ...(bottom && {
          marginBottom: 0,
          paddingBottom: `$${bottom}`,
        }),
        ...(noPrint && {
          [breakpoints.special.print]: {
            display: "none",
          },
        }),
        ...(inverted && {
          backgroundColor: darkTheme.colors.background,
          color: darkTheme.colors.text,
        }),
        ...css,
      }}>
      <ViewContainerStyled container={container}>{children}</ViewContainerStyled>
    </ViewStyled>
  );
}
