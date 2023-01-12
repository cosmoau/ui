import { Check, ClipboardText, Warning } from "phosphor-react";
import { ChangeEvent, useState } from "react";

import { Button, Badge, Loading } from "../../index";
import { FieldProps } from "../../types";

import { FieldStyled, FieldAreaStyled, FieldFunctionStyled } from "./Field.styles";

export default function Field(props: FieldProps): JSX.Element {
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
    reveal,
    loading,
    submit,
    submitFunction,
    submitValid,
    rows,
    cols,
  } = props;

  const [isCopied, setIsCopied] = useState(false);

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>): void {
    if (onChange) {
      onChange(e);
    }
  }

  function handleCopy(): void {
    if (copy) {
      navigator.clipboard.writeText(value as string);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }

  return (
    <FieldStyled
      css={{
        maxWidth: width || "80%",
        width: width || "80%",
      }}
      disabled={disabled}
      state={success ? "success" : warning ? "warning" : error ? "error" : "default"}>
      {(error || success || warning || loading || submit || copy || reveal) && (
        <FieldFunctionStyled>
          {error && (
            <Badge icon={<Warning weight="duotone" />} theme="red">
              {errorMessage || "Error"}
            </Badge>
          )}
          {success && (
            <Badge icon={<Check weight="duotone" />} theme="green">
              {successMessage || "Success"}
            </Badge>
          )}
          {warning && (
            <Badge icon={<Warning weight="duotone" />} theme="orange">
              {warningMessage || "Warning"}
            </Badge>
          )}
          {loading && (
            <Badge>
              <Loading />
            </Badge>
          )}
          {copy && (
            <Button
              icon={
                isCopied ? (
                  <ClipboardText opacity={0.5} weight="duotone" />
                ) : (
                  <ClipboardText weight="duotone" />
                )
              }
              onClick={(): void => {
                handleCopy();
              }}>
              Copy
            </Button>
          )}

          {submit && (
            <Button
              disabled={!submitValid}
              onClick={(): void => {
                if (submitFunction && submitValid) {
                  submitFunction(value || "");
                }
              }}>
              {submit}
            </Button>
          )}
        </FieldFunctionStyled>
      )}
      <FieldAreaStyled
        cols={cols}
        css={css}
        disabled={disabled}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>): void => {
          handleChange(e);
        }}
      />
    </FieldStyled>
  );
}
