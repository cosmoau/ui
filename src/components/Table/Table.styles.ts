import { styled } from "../../stitches.config";

export const TableStyled = styled("div", {
  position: "relative",
  width: "100%",
});

export const TableCoreStyled = styled("div", {
  "*": {
    verticalAlign: "middle",
  },
  border: "0.1rem solid $border",
  borderRadius: "$small",

  position: "relative",

  table: {
    border: 0,
    borderCollapse: "separate",
    borderSpacing: "0",
    height: "100%",
    margin: 0,
    minWidth: "100%",
    padding: 0,
    position: "relative",
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
      th: {
        backgroundColor: "$default",
        color: "$accent",
        fontSize: "$small",
        fontWeight: "normal",
        padding: "$smaller $medium",
        position: "sticky",
        textAlign: "left !important",
        top: 0,
        whiteSpace: "nowrap",
        zIndex: 1,
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

export const TableHeaderStyled = styled("div", {
  "*": {
    verticalAlign: "middle",
  },
  backgroundColor: "$background",
  display: "flex",
  gap: "$small",
  h4: {
    marginBottom: 0,
  },
  justifyContent: "space-between",
  paddingBottom: "calc($medium * 1.5)",
  verticalAlign: "middle",
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
    opacity: 0.6,
  },
});
