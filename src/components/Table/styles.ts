import { styled } from "../../stitches.config";

export const TableStyled = styled("div", {
  position: "relative",
});

export const TableCoreStyled = styled("div", {
  "*": {
    verticalAlign: "middle",
  },
  border: "0.1rem solid $border",
  borderRadius: "$small",
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
        "&:hover": {
          backgroundColor: "$defaultTable",
        },
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
        backgroundColor: "$default",
        color: "$accent",
        fontSize: "$small",
        fontWeight: "normal",
        padding: "$smaller $medium",
        textAlign: "left !important",
        whiteSpace: "nowrap",
        zIndex: "$table",
      },
    },
  },

  variants: {
    collapse: {
      true: {
        table: {
          borderCollapse: "collapse",
        },
        tbody: {
          tr: {
            "&:first-child": {
              borderTop: "0 !important",
            },
            "&:last-child": {
              td: {
                "&:last-child": {
                  borderBottom: "0 !important",
                },
              },
            },
            borderTop: "0.1rem solid $border !important",

            td: {
              "&:first-child": {
                paddingTop: "$medium !important",
              },
              "&:last-child": {
                paddingBottom: "$medium !important",
              },
              border: "0 !important",
              display: "block",
              paddingBottom: "0 !important",
            },
            width: "100%",
          },
        },
        thead: {
          display: "none",
        },
      },
    },
    slim: {
      true: {
        td: {
          padding: "$small $medium !important",
        },
      },
    },
  },
});

export const TableHeaderStyled = styled("div", {
  "*": {
    verticalAlign: "middle",
  },
  alignItems: "center",
  backgroundColor: "$background",
  display: "flex",
  gap: "$small",
  h4: {
    marginBottom: 0,
  },
  justifyContent: "space-between",
  paddingBottom: "calc($medium * 1.5)",
  width: "100%",
});

export const TableFiltersStyled = styled("div", {
  display: "block",
  input: {
    width: "100%",
  },
  paddingBottom: "calc($medium * 1.5)",
  width: "100%",
});

export const TablePaginationStyled = styled("div", {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "$medium",
  small: {
    opacity: 0.7,
  },
  transition: "$default",
});
