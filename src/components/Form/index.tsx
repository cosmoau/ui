import { useEventListener } from "usehooks-ts";

import { FormProps } from "../../types";
import { Button } from "../Button";

import { FormStyled } from "./Form.styles";

export function Form(props: FormProps): JSX.Element {
  const { children, css, disabled, listen, mustRef, submit, submitFunction, submitValid, ...rest } =
    props;

  useEventListener("keydown", (e: KeyboardEvent) => {
    if (listen && e.key === "Enter" && submitFunction && submit && submitValid) {
      submitFunction();
    }
  });

  return (
    <FormStyled ref={mustRef} css={css} disabled={disabled} {...rest}>
      {children}
      {submit && (
        <Button
          css={{
            marginTop: "$small",
          }}
          disabled={!submitValid || disabled}
          small
          onClick={(): void => {
            submitFunction();
          }}>
          {submit}
        </Button>
      )}
    </FormStyled>
  );
}
