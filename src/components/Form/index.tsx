import { useState } from "react";
import { useEventListener } from "usehooks-ts";

import { Button } from "../../index";
import { IForm } from "../../types";

import { FormStyled } from "./styles";

export default function Form({
  children,
  css,
  disabled,
  listen,
  submit,
  submitFunction,
  submitValid,
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
      onChange={(): void => setIsSubmitted(false)}
      {...rest}>
      {children}
      {submit && (
        <Button
          css={{
            marginTop: "$medium",
          }}
          disabled={!submitValid || disabled || isSubmitted}
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
