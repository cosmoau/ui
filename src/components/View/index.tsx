import type { JSX } from "react";

import { darkTheme } from "../../stitches.config";
import { IView } from "../../types";
import { ViewStyled, ViewContainerStyled } from "./styles";

export default function View({
  app,
  bottom,
  children,
  container,
  css,
  gradient,
  id,
  inverted,
  noPrint,
  top,
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
