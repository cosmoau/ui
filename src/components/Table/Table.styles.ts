import { styled } from "../../stitches.config";

export const TableStyled = styled("div", {
  "*": {
    alignContent: "center",
    verticalAlign: "middle",
  },
  overflowX: "auto",
  table: {
    border: 0,
    borderSpacing: 0,
    minWidth: "100%",
    tableLayout: "auto",

    tbody: {
      tr: {
        td: {
          "&:last-child": {
            borderRight: 0,
          },
          borderRight: "0.1rem solid $border",
          borderTop: "0.1rem solid $border",

          padding: "$small $medium",
        },

        transition: "$default",
      },
    },
    thead: {
      backgroundColor: "$default",

      th: {
        "&:last-child": {
          borderRight: 0,
        },
        borderRight: "0.1rem solid $border",
        fontSize: "$default",
        fontWeight: "normal",
        padding: "$small $medium",
      },
    },
  },

  width: "100%",
});
