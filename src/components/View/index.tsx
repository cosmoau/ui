import { theme } from "../../stitches.config";
import { ViewProps } from "../../types";

import { ViewStyled, ViewContainerStyled } from "./View.styles";

export default function View(props: ViewProps): JSX.Element {
  return (
    <ViewStyled
      className={props.inverted ? theme.toString() : undefined}
      css={{
        ...(props.top && {
          marginTop: 0,
          paddingTop: `$${props.top}`,
        }),
        ...(props.bottom && {
          marginBottom: 0,
          paddingBottom: `$${props.bottom}`,
        }),
        ...props.css,
      }}
      soft={props.soft}>
      <ViewContainerStyled container={props.container}>{props.children}</ViewContainerStyled>
    </ViewStyled>
  );
}
