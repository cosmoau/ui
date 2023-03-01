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
    reveal,
    loading,
    submit,
    submitFunction,
    submitValid,
    rows,
    cols,
  } = props;

  const [isCopied, setIsCopied] = useState(false);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    if (onChange) {
      onChange(event);
    }
  }

  function handleCopy(): void {
    if (copy && value) {
      navigator.clipboard.writeText(value.toString());
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
      state={success ? "success" : warning ? "warning" : error ? "error" : "default"}>
      {(error || success || warning || loading || submit || copy || reveal) && (
        <FieldFunctionStyled>
          {error && (
            <Badge icon={<Warning />} theme="red">
              {errorMessage || "Error"}
            </Badge>
          )}
          {success && (
            <Badge icon={<Check />} theme="green">
              {successMessage || "Success"}
            </Badge>
          )}
          {warning && (
            <Badge icon={<Warning />} theme="orange">
              {warningMessage || "Warning"}
            </Badge>
          )}
          {loading && (
            <Badge>
              <Loading />
            </Badge>
          )}
          <Button
            disabled={isCopied}
            icon={<ClipboardText />}
            small
            onClick={(): void => {
              handleCopy();
            }}>
            Copy
          </Button>

          {submit && (
            <Button
              disabled={!submitValid}
              small
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
        onChange={(event: ChangeEvent<HTMLTextAreaElement>): void => {
          handleChange(event);
        }}
      />
    </FieldStyled>
  );
}
