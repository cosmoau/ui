import { styled } from "../../stitches.config";

export const TableStyled = styled("div", {
  "*": {
    verticalAlign: "middle",
  },
  overflowX: "auto",

  table: {
    border: 0,
    borderCollapse: "separate",
    borderSpacing: "0",
    margin: 0,
    minWidth: "100%",
    padding: 0,
    tableLayout: "auto",

    tbody: {
      tr: {
        td: {
          borderTop: "0.1rem solid $borderTable",
          fontSize: "$default",
          padding: "$small",
        },
        transition: "$default",
      },
    },
    thead: {
      backgroundColor: "$default",

      th: {
        fontSize: "$default",
        fontWeight: "normal",
        padding: "$small",
        textAlign: "left !important",
        whiteSpace: "nowrap",
      },
    },
  },

  width: "100%",
});
