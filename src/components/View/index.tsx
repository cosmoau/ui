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
  app,
  id,
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
      id={`view-${id}`}
      inverted={inverted}
      noPrint={noPrint}>
      <ViewContainerStyled app={app} container={container}>
        {children}
      </ViewContainerStyled>
    </ViewStyled>
  );
}
