import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

import { Icons } from "../../icons";
import { Button, Loading, Text } from "../../index";
import { IField } from "../../types";

import { FieldStyled, FieldAreaStyled, FieldFunctionStyled, FieldCallbackStyled, FieldCoreStyled } from "./styles";

export default function Field({
  copy,
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
  reset,
  resetFunction,
  error,
  errorMessage,
  loading,
  submit,
  submitFunction,
  submitValid,
  rows,
  cols,
}: IField): JSX.Element {
  const [inputValue, setInputValue] = useState(value || "") as [string, (value: string) => void];
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    setInputValue(event.target.value);
    setIsSubmitted(false);
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

  function handleReset(): void {
    setInputValue("");

    if (resetFunction) {
      resetFunction();
    }
  }

  return (
    <FieldStyled>
      <FieldCoreStyled
        css={{
          maxWidth: width || "100%",
          width: width || "100%",
        }}
        disabled={disabled}>
        <FieldAreaStyled
          cols={cols}
          css={css}
          disabled={disabled}
          placeholder={placeholder}
          rows={rows}
          value={inputValue}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>): void => {
            handleChange(event);
          }}
        />
        {(loading || submit || copy) && (
          <FieldFunctionStyled>
            {loading && <Loading css={{ marginRight: "$smaller" }} />}
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
                disabled={!submitValid || !submitValid(inputValue) || isSubmitted}
                inline={loading ? "small" : undefined}
                small
                type="submit"
                onClick={(): void => {
                  if (submitFunction && submitValid && submitValid(inputValue)) {
                    submitFunction(inputValue);
                    setIsSubmitted(true);
                  }
                }}>
                {submit}
              </Button>
            )}
          </FieldFunctionStyled>
        )}
      </FieldCoreStyled>
      {(error || success || warning) && (
        <FieldCallbackStyled>
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
        </FieldCallbackStyled>
      )}
    </FieldStyled>
  );
}
