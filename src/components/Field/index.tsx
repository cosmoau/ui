import { Check, ClipboardText, Warning } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

import { Button, Badge, Loading } from "../../index";
import { FieldProps } from "../../types";

import { FieldStyled, FieldAreaStyled, FieldFunctionStyled } from "./Field.styles";

export function Field(props: FieldProps): JSX.Element {
  const {
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
    error,
    errorMessage,
    loading,
    submit,
    submitFunction,
    submitValid,
    rows,
    cols,
  } = props;

  const [inputValue, setInputValue] = useState(value || "") as [string, (value: string) => void];
  const [isCopied, setIsCopied] = useState(false);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>): void {
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

  return (
    <FieldStyled
      css={{
        maxWidth: width || "80%",
        width: width || "80%",
      }}
      disabled={disabled}
>
      <FieldAreaStyled
        cols={cols}
        css={css}
        disabled={disabled}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>): void => {
          handleChange(event);
        }}
      />
      {(error || success || warning || loading || submit || copy) && (
        <FieldFunctionStyled>
          {error && (
            <Badge icon={<Warning />} small theme="red">
              {errorMessage || "Error"}
            </Badge>
          )}
          {success && (
            <Badge icon={<Check />} small theme="green">
              {successMessage || "Success"}
            </Badge>
          )}
          {warning && (
            <Badge icon={<Warning />} small theme="orange">
              {warningMessage || "Warning"}
            </Badge>
          )}
          {loading && (
            <Badge small>
              <Loading />
            </Badge>
          )}
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

          {submit && (
            <Button
              disabled={!submitValid}
              small
              onClick={(): void => {
                if (submitFunction && submitValid) {
                  submitFunction(inputValue);
                }
              }}>
              {submit}
            </Button>
          )}
        </FieldFunctionStyled>
      )}
    </FieldStyled>
  );
}
