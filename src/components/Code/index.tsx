import { ClipboardText } from "phosphor-react";
import { useState } from "react";

import { Button } from "../../index";
import { CodeProps } from "../../types";

import { CodeStyled, CodeFunctionStyled, CodeBlockStyled } from "./Code.styles";

export default function Code(props: CodeProps): JSX.Element {
  const { copy, children, css } = props;
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy(): void {
    if (copy) {
      navigator.clipboard.writeText(children?.toString() || "");
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }

  return (
    <CodeStyled css={css}>
      <CodeFunctionStyled>
        {copy && (
          <Button
            icon={
              isCopied ? (
                <ClipboardText opacity={0.5} weight="duotone" />
              ) : (
                <ClipboardText weight="duotone" />
              )
            }
            small
            onClick={
              isCopied
                ? undefined
                : (): void => {
                    handleCopy();
                  }
            }>
            Copy
          </Button>
        )}
      </CodeFunctionStyled>
      <CodeBlockStyled>{children}</CodeBlockStyled>
    </CodeStyled>
  );
}
