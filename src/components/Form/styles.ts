import { styled } from "../../stitches.config";

export const FormStyled = styled("form", {
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: 0.5,
      },
    },
  },
  width: "100%",
});
