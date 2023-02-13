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
    borderSpacing: "0 0.5rem",
    minWidth: "100%",
    tableLayout: "auto",

    tbody: {
      tr: {
        backgroundColor: "$background",

        td: {
          backgroundColor: "$default",

          padding: "$small $medium",
        },

        transition: "$default",
      },
    },
    thead: {
      th: {
        fontSize: "$default",
        fontWeight: "normal",
        padding: "$smaller $small",

        textAlign: "left",
      },
    },
  },

  width: "100%",
});
