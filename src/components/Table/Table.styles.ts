import { styled } from "../../stitches.config";

export const TableStyled = styled("div", {
  "*": {
    alignContent: "center",
    verticalAlign: "middle",
  },
  width: "100%",
  overflowX: "auto",
  overflowY: "visible",

  table: {
    borderSpacing: 0,
    border: 0,
    tableLayout: "fixed",

    thead: {
      backgroundColor: "$default",

      th: {
        fontSize: "$default",
        fontWeight: "normal",
        borderRight: "0.1rem solid $border",
        padding: "$small $medium",
        "&:last-child": {
          borderRight: 0,
        },
      },
    },
    tbody: {
      tr: {
        transition: "$default",

        td: {
          borderTop: "0.1rem solid $border",
          borderRight: "0.1rem solid $border",
          padding: "$small $medium",

          "&:last-child": {
            borderRight: 0,
          },
        },
      },
    },
  },
});
