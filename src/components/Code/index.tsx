import { ClipboardText } from "phosphor-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

import { Button } from "../../index";
import { CodeProps } from "../../types";

import { CodeStyled, CodeFunctionStyled, CodeBlockStyled } from "./Code.styles";

export default function Code(props: CodeProps): JSX.Element {
  const { children, css, ...rest } = props;
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy(): void {
    navigator.clipboard.writeText(children?.toString() || "");
    setIsCopied(true);
    toast("Copied to clipboard");
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }

  return (
    <CodeStyled css={css}>
      <CodeBlockStyled {...rest}>{children}</CodeBlockStyled>
      <CodeFunctionStyled>
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
      </CodeFunctionStyled>
    </CodeStyled>
  );
}
