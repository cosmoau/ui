import { darkTheme } from "../../stitches.config";
import { IView } from "../../types";

import { ViewStyled, ViewContainerStyled } from "./styles";

export default function View({ container, inverted, gradient, top, bottom, css, children, noPrint }: IView): JSX.Element {
  return (
    <ViewStyled
      className={inverted ? darkTheme.className : ""}
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
            backgroundImage: `linear-gradient(180deg, ${darkTheme.colors.background} 0%, ${darkTheme.colors.defaultTable} 100%)`,
          }),
        }),
        ...css,
      }}>
      <ViewContainerStyled container={container}>{children}</ViewContainerStyled>
    </ViewStyled>
  );
}
