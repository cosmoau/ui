import { styled } from "../../stitches.config";

export const FormStyled = styled("form", {
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: "$small",
  justifyContent: "normal",
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: 0.7,
      },
    },
  },

  width: "100%",
});
