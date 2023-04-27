import { Check, ClipboardText, Warning, Eye, EyeClosed, XCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { useEventListener } from "usehooks-ts";

import { Button, Badge, Loading } from "../../index";
import { IInput } from "../../types";

import {
  InputAreaStyled,
  InputCallbackStyled,
  InputFunctionStyled,
  InputStyled,
  InputCoreStyled,
  InputIconStyled,
} from "./Input.styles";

export function Input(props: IInput): JSX.Element {
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
  const [inputValue, setInputValue] = useState((value as string) || "");
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
      <InputCoreStyled disabled={disabled}>
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
                inline="smaller"
                small
                onClick={(): void => {
                  if (submitFunction && submitValid) {
                    submitFunction(inputValue || "");
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
            <Badge icon={errorMessage ? <Warning /> : undefined} small theme="red">
              {errorMessage || <Warning />}
            </Badge>
          )}
          {success && (
            <Badge icon={successMessage ? <Check /> : undefined} small theme="green">
              {successMessage || <Check />}
            </Badge>
          )}
          {warning && (
            <Badge icon={warningMessage ? <Warning /> : undefined} small theme="orange">
              {warningMessage || <Warning />}
            </Badge>
          )}
        </InputCallbackStyled>
      )}
    </InputStyled>
  );
}
