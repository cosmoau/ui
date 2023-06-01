import { useEventListener } from "usehooks-ts";

import { Button } from "../../index";
import { IForm } from "../../types";

import { FormStyled } from "./Form.styles";

export default function Form({
  children,
  css,
  disabled,
  listen,
  mustRef,
  submit,
  submitFunction,
  submitValid,
  ...rest
}: IForm): JSX.Element {
  useEventListener("keydown", (event: KeyboardEvent) => {
    if (listen && event.key === "Enter" && submit && submitValid) {
      submitFunction();
    }
  });

  return (
    <FormStyled ref={mustRef} css={css} disabled={disabled} {...rest}>
      {children}
      {submit && (
        <Button
          css={{
            marginTop: "$medium",
          }}
          disabled={!submitValid || disabled}
          onClick={(): void => {
            submitFunction();
          }}>
          {submit}
        </Button>
      )}
    </FormStyled>
  );
}
