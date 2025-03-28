import { ChangeEvent, useState, type JSX } from "react";
import toast from "react-hot-toast";

import { Icons } from "../../icons";
import { Button, Loading, useEventListener, useBreakpoints, Text } from "../../index";
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
  css,
  disabled,
  error,
  errorMessage,
  id,
  listen,
  loading,
  mustRef,
  name,
  onChange,
  placeholder,
  reset,
  resetFunction,
  reveal,
  submit,
  submitFunction,
  submitValid,
  success,
  successMessage,
  type,
  value,
  warning,
  warningMessage,
  width,
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
          id={id || name}
          name={name}
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
                onClick={(): void => {
                  handleCopy();
                }}>
                {!isPhone ? "Copy" : <Icons.ClipboardText />}
              </Button>
            )}
            {reveal && (
              <Button
                disabled={disabled}
                icon={!isPhone ? !isRevealed ? <Icons.Eye /> : <Icons.EyeClosed /> : undefined}
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
                disabled={disabled}
                onClick={(): void => {
                  handleReset();
                }}>
                <Icons.X />
              </Button>
            )}

            {submit && (
              <Button
                disabled={!submitValid || !submitValid(inputValue) || isSubmitted || disabled}
                icon={!isPhone ? <Icons.ArrowRight weight="regular" /> : undefined}
                iconPosition="right"
                theme={submitValid && submitValid(inputValue) ? "solid" : "default"}
                type="submit"
                onClick={(): void => {
                  if (submitFunction && submitValid && submitValid(inputValue)) {
                    submitFunction(inputValue || "");
                    setIsSubmitted(true);
                  }
                }}>
                {!isPhone ? submit : <Icons.ArrowRight weight="regular" />}
              </Button>
            )}
          </InputFunctionStyled>
        )}
      </InputCoreStyled>
      {(error || success || warning) && (
        <InputCallbackStyled>
          {error && (
            <Text as="span" highlight="red">
              {errorMessage || <Icons.Warning />}
            </Text>
          )}
          {success && (
            <Text as="span" highlight="green">
              {successMessage || <Icons.CheckCircle />}
            </Text>
          )}
          {warning && (
            <Text as="span" highlight="orange">
              {warningMessage || <Icons.Warning />}
            </Text>
          )}
        </InputCallbackStyled>
      )}
    </InputStyled>
  );
}
