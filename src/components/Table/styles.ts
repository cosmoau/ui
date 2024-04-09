import { fadeIn, styled } from "../../stitches.config";

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
        animation: `${fadeIn} 0.3s ease-in-out`,
        td: {
          borderTop: "0.1rem solid $borderTable",
          fontSize: "$default",
          padding: "$small $medium",
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
                paddingTop: "$small !important",
              },
              "&:last-child": {
                paddingBottom: "$small !important",
              },

              border: "0 !important",
              display: "block",
              paddingTop: "0 !important",
            },
            width: "100%",
          },
        },
        thead: {
          display: "none",
        },
      },
    },
    header: {
      false: {
        thead: {
          backgroundColor: "$defaultTable",

          th: {
            backgroundColor: "$defaultTable !important",
          },
        },
      },
      true: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      },
    },
    pagination: {
      true: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  },
});

export const TableHeaderStyled = styled("div", {
  "*": {
    verticalAlign: "middle",
  },
  backgroundColor: "$defaultTable",
  border: "0.1rem solid $border",
  borderBottom: 0,
  borderRadius: "$small $small 0 0",
  padding: "$small $medium",
  variants: {
    full: {
      true: {
        backgroundColor: "transparent",
        border: 0,
        padding: 0,
        paddingBottom: "$medium",
      },
    },
  },

  width: "100%",
});

export const TableHeaderCoreStyled = styled("div", {
  alignItems: "center",
  display: "flex",
  gap: "$small",
  h4: {
    marginBottom: 0,
  },
  justifyContent: "space-between",
  phone: {
    flexDirection: "column",
  },
  width: "100%",
});

export const TableHeaderTitleStyled = styled("div", {
  alignItems: "center",
  display: "flex",
  gap: "$small",
  justifyContent: "flex-start",
  phone: {
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  width: "100%",
});

export const TableHeaderOptionsStyled = styled("div", {
  alignItems: "flex-end",
  animation: `${fadeIn} 0.3s ease-in-out`,
  display: "flex",
  gap: "$small",

  justifyContent: "flex-end",
  phone: {
    flex: "1 1 0%",
    justifyContent: "space-between",
    marginTop: "$smaller",
    width: "100%",
  },

  width: "100%",
});

export const TableFiltersStyled = styled("div", {
  animation: `${fadeIn} 0.5s ease-in-out`,
  display: "block",
  input: {
    backgroundColor: "$background",
    width: "100%",
  },
  paddingTop: "$medium",
  width: "100%",
});

export const TablePaginationStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$defaultTable",
  border: "0.1rem solid $border",
  borderRadius: "0 0 $small $small",
  borderTop: 0,
  display: "flex",
  justifyContent: "space-between",
  padding: "$small $medium",
  small: {
    opacity: 0.7,
  },
  transition: "$default",
});
