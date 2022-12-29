import { ClipboardText } from "phosphor-react";
import { useState } from "react";

import { Button } from "../../index";
import { CodeProps } from "../../types";

import { CodeStyled, CodeFunctionStyled, CodeBlockStyled } from "./Code.styles";

export default function Code(props: CodeProps): JSX.Element {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy(): void {
    if (props.copy) {
      navigator.clipboard.writeText(props?.children?.toString() || "");
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }

  return (
    <CodeStyled css={props.css}>
      <CodeFunctionStyled>
        {props.copy && (
          <Button
            ariaLabel="Copy"
            icon={
              isCopied ? (
                <ClipboardText opacity={0.5} weight="duotone" />
              ) : (
                <ClipboardText weight="duotone" />
              )
            }
            name="copy"
            onClick={handleCopy}
            small>
            Copy
          </Button>
        )}
      </CodeFunctionStyled>
      <CodeBlockStyled>{props.children}</CodeBlockStyled>
    </CodeStyled>
  );
}
