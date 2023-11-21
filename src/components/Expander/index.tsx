import { useState } from "react";

import { Button } from "../..";
import { Icons } from "../../icons";
import { IExpander } from "../../types";

import { ExpanderStyled, ExpanderTrigger } from "./styles";

export default function Expander({ height, disabled, children, css }: IExpander): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = (): void => {
    setExpanded(!expanded);
  };

  return (
    <ExpanderStyled
      css={{
        ...(!expanded && !disabled && { maxHeight: height }),
        ...css,
      }}
      expanded={expanded || disabled}>
      {!disabled && (
        <ExpanderTrigger expanded={expanded}>
          <Button
            icon={expanded ? undefined : <Icons.ArrowsOutSimple />}
            small={expanded}
            theme={!expanded ? "solid" : "default"}
            onClick={toggleExpanded}>
            {expanded ? <Icons.ArrowsInSimple /> : "Expand"}
          </Button>
        </ExpanderTrigger>
      )}

      {children}
    </ExpanderStyled>
  );
}
