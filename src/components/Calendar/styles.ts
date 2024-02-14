import { styled } from "../../stitches.config";

export const CalendarStyled = styled("div", {
  maxWidth: "50rem",
});

export const CalendarHeaderStyled = styled("div", {
  alignItems: "center",
  borderBottom: "0.1rem solid $border",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "$small",
  micro: {
    flexDirection: "column",
  },
  paddingBottom: "$small",
});

export const CalendarGridStyled = styled("div", {
  display: "grid",
  gap: "$small",
  gridTemplateColumns: "repeat(6, 1fr)",
  micro: {
    gap: "$smaller",
  },
  textAlign: "center",
});
