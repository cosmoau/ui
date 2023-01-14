import { darkTheme } from "../../stitches.config";
import { ViewProps } from "../../types";

import { ViewStyled, ViewContainerStyled } from "./View.styles";

export function View(props: ViewProps): JSX.Element {
  const { container, inverted, top, bottom, css, children } = props;

  return (
    <ViewStyled
      className={inverted ? darkTheme : undefined}
      css={{
        ...(top && {
          marginTop: 0,
          paddingTop: `$${top}`,
        }),
        ...(bottom && {
          marginBottom: 0,
          paddingBottom: `$${bottom}`,
        }),
        ...css,
      }}>
      <ViewContainerStyled container={container}>{children}</ViewContainerStyled>
    </ViewStyled>
  );
}
