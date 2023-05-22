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
    border: {
      true: {
        border: "0.1rem solid $border",
      },
    },
    slim: {
      true: {
        td: {
          padding: "0.65rem $medium !important",
        },
      },
    },
  },

  width: "100%",
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
  paddingBottom: "$small",
  verticalAlign: "middle",
});

export const TableFiltersStyled = styled("div", {
  borderBottom: "0.1rem solid $borderTable",
  display: "block",
  input: {
    width: "100%",
  },
  paddingBottom: "calc($medium * 1.5)",
  paddingTop: "$medium",
  width: "100%",
});

export const TablePaginationStyled = styled("div", {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "$medium",

  small: {
    opacity: 0.6,
  },
});
