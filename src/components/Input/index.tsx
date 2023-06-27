import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { useEventListener } from "usehooks-ts";

import { Icons } from "../../icons";
import { Button, Badge, Loading } from "../../index";
import { IInput } from "../../types";

import {
  InputAreaStyled,
  InputCallbackStyled,
  InputFunctionStyled,
  InputStyled,
  InputCoreStyled,
  InputIconStyled,
} from "./styles";

export default function Input({
  copy,
  icon,
  ref,
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
    if (
      listen &&
      event.key === "Enter" &&
      submitFunction &&
      submitValid &&
      submitValid(inputValue)
    ) {
      submitFunction(inputValue || "");
    }
  });

  return (
    <InputStyled
      css={{
        maxWidth: width || "100%",
        width: width || "100%",
      }}>
      <InputCoreStyled disabled={disabled}>
        {icon && <InputIconStyled>{icon}</InputIconStyled>}
        <InputAreaStyled
          ref={ref || undefined}
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
            {copy && (
              <Button
                disabled={isCopied}
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
                disabled={!submitValid || !submitValid(inputValue) || isSubmitted}
                inline={loading ? "small" : undefined}
                small
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
            <Badge icon={errorMessage ? <Icons.Warning /> : undefined} small theme="red">
              {errorMessage || <Icons.Warning />}
            </Badge>
          )}
          {success && (
            <Badge icon={successMessage ? <Icons.Check /> : undefined} small theme="green">
              {successMessage || <Icons.Check />}
            </Badge>
          )}
          {warning && (
            <Badge icon={warningMessage ? <Icons.Warning /> : undefined} small theme="orange">
              {warningMessage || <Icons.Warning />}
            </Badge>
          )}
        </InputCallbackStyled>
      )}
    </InputStyled>
  );
}
