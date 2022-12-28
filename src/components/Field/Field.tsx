import { Check, ClipboardText, Warning } from "phosphor-react";
import { useState } from "react";

import { Button, Badge, Loading } from "../../index";

import { FieldProps } from "./Field.props";
import { FieldStyled, FieldAreaStyled, FieldFunctionStyled } from "./Field.styles";

export default function Field(props: FieldProps): JSX.Element {
  const [value, setValue] = useState(props.value || "");
  const [isCopied, setIsCopied] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  }

  function handleCopy(): void {
    if (props.copy) {
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
        maxWidth: props.width || "80%",
        width: props.width || "80%",
      }}
      disabled={props.disabled}
      state={
        props.success ? "success" : props.warning ? "warning" : props.error ? "error" : "default"
      }>
      {(props.error ||
        props.success ||
        props.warning ||
        props.loading ||
        props.submit ||
        props.copy ||
        props.reveal) && (
        <FieldFunctionStyled>
          {props.error && (
            <Badge icon={<Warning weight="duotone" />} theme="red">
              {props.errorMessage || "Error"}
            </Badge>
          )}
          {props.success && (
            <Badge icon={<Check weight="duotone" />} theme="green">
              {props.successMessage || "Success"}
            </Badge>
          )}
          {props.warning && (
            <Badge icon={<Warning weight="duotone" />} theme="orange">
              {props.warningMessage || "Warning"}
            </Badge>
          )}
          {props.loading && (
            <Badge>
              <Loading />
            </Badge>
          )}
          {props.copy && (
            <Button
              ariaLabel="Copy"
              icon={
                isCopied ? (
                  <ClipboardText opacity={0.5} weight="duotone" />
                ) : (
                  <ClipboardText weight="duotone" />
                )
              }
              name="copy"
              onClick={handleCopy}>
              Copy
            </Button>
          )}

          {props.submit && (
            <Button
              ariaLabel="Submit"
              disabled={!props.submitValid}
              name="submit"
              onClick={(): void => {
                if (props.submitFunction && props.submitValid) {
                  props.submitFunction(value || "");
                }
              }}>
              {props.submit}
            </Button>
          )}
        </FieldFunctionStyled>
      )}
      <FieldAreaStyled
        cols={props.cols}
        css={props.css}
        disabled={props.disabled}
        onChange={handleChange}
        placeholder={props.placeholder}
        rows={props.rows}
        value={value}
      />
    </FieldStyled>
  );
}
