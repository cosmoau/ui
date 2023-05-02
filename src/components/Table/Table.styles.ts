import { styled } from "../../stitches.config";

export const TableStyled = styled("div", {
  position: "relative",
  width: "100%",
});

export const TableCoreStyled = styled("div", {
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
          padding: "$medium",
        },
        transition: "$default",
      },
    },
    thead: {
      backgroundColor: "$default",

      th: {
        "*": {
          color: "$accent",
        },
        fontSize: "$small",
        fontWeight: "normal",
        padding: "$smaller $medium",
        textAlign: "left !important",
        whiteSpace: "nowrap",
      },
    },
  },

  variants: {
    slim: {
      true: {
        td: {
          padding: "$small $medium !important",
        },
      },
    },
  },

  width: "100%",
});

export const TablePaginationStyled = styled("div", {
  alignItems: "center",
  borderTop: "0.1rem solid $border",
  display: "flex",
  justifyContent: "space-between",
  padding: "$small $medium",

  small: {
    opacity: 0.6,
  },
});
