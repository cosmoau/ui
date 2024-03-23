import { styled } from "../../stitches.config";

export const CalendarStyled = styled("div", {
  minHeight: "100%",
  width: "100%",
});

export const CalendarHeaderStyled = styled("div", {
  alignItems: "center",
  borderBottom: "0.1rem solid $border",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "$small",
  paddingBottom: "$small",
  phone: {
    flexDirection: "column",
    gap: "$small",
  },
});

export const CalendarGridStyled = styled("div", {
  display: "grid",
  gap: "$small",
  gridTemplateColumns: "repeat(6, 1fr)",
  micro: {
    gap: "$smaller",
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  phone: {
    gridTemplateColumns: "repeat(5, 1fr)",
  },
  textAlign: "center",
});
