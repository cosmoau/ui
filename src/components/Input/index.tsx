import { Check, ClipboardText, Warning, Eye, EyeClosed } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import { useEventListener } from "usehooks-ts";

import { Button, Badge, Loading } from "../../index";
import { InputProps } from "../../types";

import {
  InputAreaStyled,
  InputCallbackStyled,
  InputFunctionStyled,
  InputStyled,
  InputCoreStyled,
  InputIconStyled,
} from "./Input.styles";

export default function Input(props: InputProps): JSX.Element {
  const [value, setValue] = useState(props.value || "");
  const [isCopied, setIsCopied] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  }

  function handleCopy(): void {
    if (props.copy) {
      navigator.clipboard.writeText(value as string);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }

  function handleReveal(): void {
    setIsRevealed(!isRevealed);
  }

  // event listener

  useEventListener("keydown", (e: KeyboardEvent) => {
    if (props.listen && e.key === "Enter" && props.submitFunction && props.submitValid) {
      props.submitFunction(value || "");
    }
  });

  return (
    <InputStyled
      css={{
        maxWidth: props.width || "100%",
        width: props.width || "100%",
      }}>
      <InputCoreStyled
        disabled={props.disabled}
        state={
          props.success ? "success" : props.warning ? "warning" : props.error ? "error" : "default"
        }>
        {props.icon && <InputIconStyled>{props.icon}</InputIconStyled>}
        <InputAreaStyled
          css={props.css}
          disabled={props.disabled}
          onChange={handleChange}
          placeholder={props.placeholder}
          ref={props.mustRef || undefined}
          type={isRevealed ? "text" : props.type || "text"}
          value={value}
        />
        {(props.loading || props.submit || props.copy || props.reveal) && (
          <InputFunctionStyled>
            {props.loading && <Loading />}
            {props.copy && (
              <Button
                ariaLabel="Copy"
                css={{
                  marginLeft: "$smaller",
                }}
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
            {props.reveal && (
              <Button
                ariaLabel="Reveal"
                css={{
                  marginLeft: "$smaller",
                }}
                icon={!isRevealed ? <Eye weight="duotone" /> : <EyeClosed weight="duotone" />}
                name="reveal"
                onClick={handleReveal}
                small>
                {isRevealed ? "Hide" : "Show"}
              </Button>
            )}

            {props.submit && (
              <Button
                ariaLabel="Submit"
                css={{
                  marginLeft: "$smaller",
                }}
                disabled={!props.submitValid}
                name="submit"
                onClick={(): void => {
                  if (props.submitFunction && props.submitValid) {
                    props.submitFunction(value || "");
                  }
                }}
                small>
                {props.submit}
              </Button>
            )}
          </InputFunctionStyled>
        )}
      </InputCoreStyled>
      <InputCallbackStyled>
        {props.error && !props.success && !props.warning && (
          <Badge
            css={{
              backgroundColor: "transparent",
              padding: 0,
            }}
            icon={<Warning weight="duotone" />}
            theme="red">
            {props.errorMessage || "Error"}
          </Badge>
        )}
        {props.success && !props.error && !props.warning && (
          <Badge
            css={{
              backgroundColor: "transparent",
              padding: 0,
            }}
            icon={<Check weight="duotone" />}
            theme="green">
            {props.successMessage || "Success"}
          </Badge>
        )}
        {props.warning && !props.success && !props.error && (
          <Badge
            css={{
              backgroundColor: "transparent",
              padding: 0,
            }}
            icon={<Warning weight="duotone" />}
            theme="orange">
            {props.warningMessage || "Invalid"}
          </Badge>
        )}
      </InputCallbackStyled>
    </InputStyled>
  );
}
