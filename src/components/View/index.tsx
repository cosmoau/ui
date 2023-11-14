import { darkTheme } from "../../stitches.config";
import { IView } from "../../types";

import { ViewStyled, ViewContainerStyled } from "./styles";

export default function View({
  container,
  inverted,
  gradient,
  top,
  bottom,
  css,
  children,
  noPrint,
}: IView): JSX.Element {
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
        ...css,
      }}
      gradient={inverted && gradient}
      inverted={inverted}
      noPrint={noPrint}>
      <ViewContainerStyled container={container}>{children}</ViewContainerStyled>
    </ViewStyled>
  );
}
