import { useEventListener } from "usehooks-ts";

import { IForm } from "../../types";
import { Button } from "../Button";

import { FormStyled } from "./Form.styles";

export function Form(props: IForm): JSX.Element {
  const { children, css, disabled, listen, mustRef, submit, submitFunction, submitValid, ...rest } =
    props;

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (listen && event.key === "Enter" && submitFunction && submit && submitValid) {
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
