import { styled } from "../../stitches.config";
import { ButtonStyled } from "../Button/styles";

export const CalendarStyled = styled("div", {
  minHeight: "100%",
  minWidth: "25rem",
  overflow: "visible",
  width: "100%",
});

export const CalendarHeaderStyled = styled("div", {
  alignItems: "center",
  borderBottom: "0.1rem solid $border",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "$small",
  paddingBottom: "$small",
});

export const CalendarGridStyled = styled("div", {
  [`& ${ButtonStyled}`]: {
    padding: "$smaller",
  },
  display: "grid",
  gap: "$small",
  gridArea: "calendar",

  maxWidth: "100%",

  micro: {
    [`& ${ButtonStyled}`]: {
      padding: "0",
    },
    gap: "$smaller",
  },

  phone: {
    [`& ${ButtonStyled}`]: {
      padding: "$smallest",
    },
  },

  textAlign: "center",

  variants: {
    mode: {
      days: {
        gridTemplateColumns: "repeat(7, 1fr)",
      },
      months: {
        gridTemplateColumns: "repeat(3, 1fr)",
      },
    },
  },
});

export const CalendarFooterStyled = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "$medium",
  transition: "$default",
});
