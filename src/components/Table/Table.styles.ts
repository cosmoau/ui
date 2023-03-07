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
          fontSize: "$default",
          padding: "$small $medium",

          phone: {
            padding: "$smaller $small",
          },
        },

        transition: "$default",
      },
    },
    thead: {
      th: {
        "& > span": {
          paddingLeft: "$small",
        },
        fontSize: "$default",
        fontWeight: "normal",
        padding: "$smaller $small",

        phone: {
          padding: "$smaller $small",
        },

        textAlign: "left",
      },
    },
  },

  width: "100%",
});
