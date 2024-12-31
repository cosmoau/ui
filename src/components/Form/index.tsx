import { useState, type JSX } from "react";

import { Button, useEventListener } from "../../index";
import { IForm } from "../../types";

import { FormStyled } from "./styles";

export default function Form({
  children,
  css,
  disabled,
  listen,
  loading,
  submit,
  submitFunction,
  submitValid,
  id,
  name,
  ...rest
}: IForm): JSX.Element {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (listen && event.key === "Enter" && submit && submitValid) {
      submitFunction();
    }
  });

  return (
    <FormStyled
      css={css}
      disabled={disabled}
      id={id || name}
      name={name}
      onChange={(): void => setIsSubmitted(false)}
      {...rest}>
      {children}
      {submit && (
        <Button
          css={{
            marginTop: "$medium",
          }}
          disabled={!submitValid || disabled || isSubmitted}
          loading={loading}
          onClick={(): void => {
            submitFunction();
            setIsSubmitted(true);
          }}>
          {submit}
        </Button>
      )}
    </FormStyled>
  );
}
