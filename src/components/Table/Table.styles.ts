import { styled } from "../../stitches.config";

export const TableStyled = styled("div", {
  "*": {
    alignContent: "center",
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
          phone: {
            padding: "$smaller $small",
          },
        },
        transition: "$default",
      },
    },
    thead: {
      backgroundColor: "$default",

      th: {
        fontSize: "1.5rem",
        fontWeight: "normal",
        padding: "$smaller $small",
        textAlign: "left !important",
        whiteSpace: "nowrap",
      },
    },
  },

  width: "100%",
});
