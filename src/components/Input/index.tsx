import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

import { Icons } from "../../icons";
import { Button, Loading, useEventListener, useBreakpoints, Badge } from "../../index";
import { IInput } from "../../types";

import {
  InputAreaStyled,
  InputCallbackStyled,
  InputFunctionStyled,
  InputStyled,
  InputCoreStyled,
} from "./styles";

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
  const { isPhone } = useBreakpoints();
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
            {loading && <Loading css={{ marginRight: "$smaller" }} />}
            {copy && (
              <Button
                disabled={isCopied || disabled}
                icon={!isPhone ? <Icons.ClipboardText /> : undefined}
                small
                onClick={(): void => {
                  handleCopy();
                }}>
                {!isPhone ? "Copy" : <Icons.ClipboardText />}
              </Button>
            )}
            {reveal && (
              <Button
                css={{
                  marginLeft: "$smaller",
                }}
                disabled={disabled}
                icon={!isPhone ? !isRevealed ? <Icons.Eye /> : <Icons.EyeClosed /> : undefined}
                small
                onClick={(): void => {
                  handleReveal();
                }}>
                {!isPhone ? (
                  !isRevealed ? (
                    "Reveal"
                  ) : (
                    "Hide"
                  )
                ) : !isRevealed ? (
                  <Icons.Eye />
                ) : (
                  <Icons.EyeClosed />
                )}
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
                <Icons.XCircle />
              </Button>
            )}

            {submit && (
              <Button
                css={{
                  marginLeft: "$smaller",
                }}
                disabled={!submitValid || !submitValid(inputValue) || isSubmitted || disabled}
                icon={!isPhone ? <Icons.ArrowRight /> : undefined}
                iconPosition="right"
                small
                theme={submitValid && submitValid(inputValue) ? "solid" : "default"}
                type="submit"
                onClick={(): void => {
                  if (submitFunction && submitValid && submitValid(inputValue)) {
                    submitFunction(inputValue || "");
                    setIsSubmitted(true);
                  }
                }}>
                {!isPhone ? submit : <Icons.ArrowRight />}
              </Button>
            )}
          </InputFunctionStyled>
        )}
      </InputCoreStyled>
      {(error || success || warning) && (
        <InputCallbackStyled>
          {error && (
            <Badge small theme="red">
              {errorMessage || <Icons.Warning />}
            </Badge>
          )}
          {success && (
            <Badge small theme="green">
              {successMessage || <Icons.CheckCircle />}
            </Badge>
          )}
          {warning && (
            <Badge small theme="orange">
              {warningMessage || <Icons.Warning />}
            </Badge>
          )}
        </InputCallbackStyled>
      )}
    </InputStyled>
  );
}
