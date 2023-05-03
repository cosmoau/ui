import { darkTheme } from "../../stitches.config";
import { IView } from "../../types";

import { ViewStyled, ViewContainerStyled } from "./View.styles";

export function View(props: IView): JSX.Element {
  const { container, inverted, gradient, top, bottom, css, children, noPrint } = props;

  const className = inverted ? darkTheme.className : undefined;

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
          print: {
            display: "none",
          },
        }),
        ...(inverted && {
          backgroundColor: darkTheme.colors.background,
          color: darkTheme.colors.text,
          ...(gradient && {
            backgroundImage: `linear-gradient(180deg, ${darkTheme.colors.background} 0%, ${darkTheme.colors.backgroundSpecial} 100%)`,
          }),
        }),
        ...css,
      }}>
      <ViewContainerStyled container={container}>{children}</ViewContainerStyled>
    </ViewStyled>
  );
}
