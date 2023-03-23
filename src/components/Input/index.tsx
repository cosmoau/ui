import { Check, ClipboardText, Warning, Eye, EyeClosed, XCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { useEventListener } from "usehooks-ts";

import { Button, Badge, Loading } from "../../index";
import { InputProps } from "../../types";

import { InputAreaStyled, InputCallbackStyled, InputFunctionStyled, InputStyled, InputCoreStyled, InputIconStyled } from "./Input.styles";

export function Input(props: InputProps): JSX.Element {
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
    reset,
    resetFunction,
  } = props;
  const [inputValue, setInputValue] = useState(value || "") as [string, (value: string) => void];
  const [isCopied, setIsCopied] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  }

  function handleCopy(): void {
    if (copy && inputValue) {
      navigator.clipboard.writeText(inputValue.toString());
      setIsCopied(true);
      toast("Copied to clipboard");
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } else {
      toast("Nothing to copy");
    }
  }

  function handleReveal(): void {
    setIsRevealed(!isRevealed);
  }

  function handleReset(): void {
    setInputValue("");

    if (resetFunction) {
      resetFunction();
    }
  }

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (listen && event.key === "Enter" && submitFunction && submitValid) {
      submitFunction(inputValue || "");
    }
  });

  return (
    <InputStyled
      css={{
        maxWidth: width || "100%",
        width: width || "100%",
      }}>
      <InputCoreStyled disabled={disabled} state={success ? "success" : warning ? "warning" : error ? "error" : "default"}>
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
        {(loading || submit || copy || reveal || reset) && (
          <InputFunctionStyled>
            {loading && <Loading />}
            {copy && (
              <Button
                disabled={isCopied}
                icon={<ClipboardText />}
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
                icon={!isRevealed ? <Eye /> : <EyeClosed />}
                small
                onClick={(): void => {
                  handleReveal();
                }}>
                {isRevealed ? "Hide" : "Show"}
              </Button>
            )}

            {reset && inputValue && (
              <Button
                css={{
                  marginLeft: "$smaller",
                }}
                small
                onClick={(): void => {
                  handleReset();
                }}>
                <XCircle />
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
            icon={<Warning />}
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
            icon={<Check />}
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
            icon={<Warning />}
            theme="orange">
            {warningMessage || "Invalid"}
          </Badge>
        )}
      </InputCallbackStyled>
    </InputStyled>
  );
}
