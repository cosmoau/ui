import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

import { Icons } from "../../icons";
import { Button, Badge, Loading } from "../../index";
import { IField } from "../../types";

import { FieldStyled, FieldAreaStyled, FieldFunctionStyled } from "./Field.styles";

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
      disabled={disabled}>
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
            <Badge icon={<Icons.Warning />} small theme="red">
              {errorMessage || "Error"}
            </Badge>
          )}
          {success && (
            <Badge icon={<Icons.Check />} small theme="green">
              {successMessage || "Success"}
            </Badge>
          )}
          {warning && (
            <Badge icon={<Icons.Warning />} small theme="orange">
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
              icon={<Icons.ClipboardText />}
              small
              onClick={(): void => {
                handleCopy();
              }}>
              Copy
            </Button>
          )}

          {submit && (
            <Button
              disabled={!submitValid || !submitValid(inputValue)}
              small
              onClick={(): void => {
                if (submitFunction && submitValid && submitValid(inputValue)) {
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
