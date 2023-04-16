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
          padding: "$small",
        },
        transition: "$default",
      },
    },
    thead: {
      backgroundColor: "$defaultTableHover",

      th: {
        color: "$accent",
        fontSize: "$h6",
        fontWeight: "normal",
        padding: "$small",
        textAlign: "left !important",
        whiteSpace: "nowrap",
      },
    },
  },

  variants: {
    hover: {
      true: {
        tbody: {
          tr: {
            "&:hover": {
              backgroundColor: "$default",
            },
          },
        },
      },
    },
  },

  width: "100%",
});

export const TablePaginationStyled = styled("div", {
  alignItems: "center",
  borderTop: "0.1rem solid $borderTable",
  display: "flex",
  justifyContent: "space-between",
  padding: "$small",

  small: {
    opacity: 0.6,
  },
});
