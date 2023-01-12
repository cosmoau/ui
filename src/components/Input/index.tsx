import { Check, ClipboardText, Warning, Eye, EyeClosed } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
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
  const {
    copy,
    icon,
    mustRef,
    type,
    disabled,
    placeholder,
    width,
    css,
    value,
    onChange,
    success,
    successMessage,
    warning,
    warningMessage,
    error,
    errorMessage,
    reveal,
    loading,
    submit,
    submitFunction,
    submitValid,
    listen,
  } = props;
  const [inputValue, setInputValue] = useState(value || "");
  const [isCopied, setIsCopied] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

  function handleCopy(): void {
    if (copy) {
      navigator.clipboard.writeText(inputValue.toString());
      setIsCopied(true);
      toast("Copied to clipboard");
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
    if (listen && e.key === "Enter" && submitFunction && submitValid) {
      submitFunction(inputValue || "");
    }
  });

  return (
    <InputStyled
      css={{
        maxWidth: width || "100%",
        width: width || "100%",
      }}>
      <InputCoreStyled
        disabled={disabled}
        state={success ? "success" : warning ? "warning" : error ? "error" : "default"}>
        {icon && <InputIconStyled>{icon}</InputIconStyled>}
        <InputAreaStyled
          ref={mustRef || undefined}
          css={css}
          disabled={disabled}
          placeholder={placeholder}
          type={isRevealed ? "text" : type || "text"}
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            handleChange(e);
          }}
        />
        {(loading || submit || copy || reveal) && (
          <InputFunctionStyled>
            {loading && <Loading />}
            {copy && (
              <Button
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
                small
                onClick={(): void => {
                  handleCopy();
                }}>
                Copy
              </Button>
            )}
            {reveal && (
              <Button
                css={{
                  marginLeft: "$smaller",
                }}
                icon={!isRevealed ? <Eye weight="duotone" /> : <EyeClosed weight="duotone" />}
                small
                onClick={(): void => {
                  handleReveal();
                }}>
                {isRevealed ? "Hide" : "Show"}
              </Button>
            )}

            {submit && (
              <Button
                css={{
                  marginLeft: "$smaller",
                }}
                disabled={!submitValid}
                small
                onClick={(): void => {
                  if (submitFunction && submitValid) {
                    submitFunction(inputValue || "");
                  }
                }}>
                {submit}
              </Button>
            )}
          </InputFunctionStyled>
        )}
      </InputCoreStyled>
      <InputCallbackStyled>
        {error && !success && !warning && (
          <Badge
            css={{
              backgroundColor: "transparent",
              padding: 0,
            }}
            icon={<Warning weight="duotone" />}
            theme="red">
            {errorMessage || "Error"}
          </Badge>
        )}
        {success && !error && !warning && (
          <Badge
            css={{
              backgroundColor: "transparent",
              padding: 0,
            }}
            icon={<Check weight="duotone" />}
            theme="green">
            {successMessage || "Success"}
          </Badge>
        )}
        {warning && !success && !error && (
          <Badge
            css={{
              backgroundColor: "transparent",
              padding: 0,
            }}
            icon={<Warning weight="duotone" />}
            theme="orange">
            {warningMessage || "Invalid"}
          </Badge>
        )}
      </InputCallbackStyled>
    </InputStyled>
  );
}
