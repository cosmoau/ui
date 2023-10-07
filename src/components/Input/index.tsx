import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

import { Icons } from "../../icons";
import { Button, Loading, useEventListener, Text } from "../../index";
import { IInput } from "../../types";

import { InputAreaStyled, InputCallbackStyled, InputFunctionStyled, InputStyled, InputCoreStyled } from "./styles";

export default function Input({
  copy,
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
}: IInput): JSX.Element {
  const [inputValue, setInputValue] = useState((value as string) || "");
  const [isCopied, setIsCopied] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.target.value);
    setIsSubmitted(false);
    if (onChange) {
      onChange(event);
    }
  }

  function handleCopy(): void {
    if (copy && inputValue) {
      navigator?.clipboard?.writeText(inputValue.toString());
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
    if (listen && event.key === "Enter" && submitFunction && submitValid && submitValid(inputValue)) {
      submitFunction(inputValue || "");
    }
  });

  return (
    <InputStyled
      css={{
        maxWidth: width || "100%",
        width: width || "100%",
        ...css,
      }}
      disabled={disabled}>
      <InputCoreStyled>
        <InputAreaStyled
          ref={mustRef || undefined}
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
            {copy && (
              <Button
                disabled={isCopied || disabled}
                icon={<Icons.ClipboardText />}
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
                disabled={disabled}
                icon={!isRevealed ? <Icons.Eye /> : <Icons.EyeClosed />}
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
                disabled={disabled}
                small
                onClick={(): void => {
                  handleReset();
                }}>
                <Icons.X />
              </Button>
            )}

            {submit && (
              <Button
                css={{
                  marginLeft: "$smaller",
                }}
                disabled={!submitValid || !submitValid(inputValue) || isSubmitted || disabled}
                inline={loading ? "small" : undefined}
                small
                theme={submitValid && submitValid(inputValue) ? "solid" : "default"}
                type="submit"
                onClick={(): void => {
                  if (submitFunction && submitValid && submitValid(inputValue)) {
                    submitFunction(inputValue || "");
                    setIsSubmitted(true);
                  }
                }}>
                {submit}
              </Button>
            )}
            {loading && <Loading />}
          </InputFunctionStyled>
        )}
      </InputCoreStyled>
      {(error || success || warning) && (
        <InputCallbackStyled>
          {error && (
            <Text as="small">
              <Text as="span" highlight="red">
                {errorMessage || <Icons.Warning />}
              </Text>
            </Text>
          )}
          {success && (
            <Text as="small">
              <Text as="span" highlight="green">
                {successMessage || <Icons.Check />}
              </Text>
            </Text>
          )}
          {warning && (
            <Text as="small">
              <Text as="span" highlight="orange">
                {warningMessage || <Icons.Warning />}
              </Text>
            </Text>
          )}
        </InputCallbackStyled>
      )}
    </InputStyled>
  );
}
