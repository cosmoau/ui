import { styled } from "../../stitches.config";

export const TableStyled = styled("div", {
  "*": {
    alignContent: "center",
    verticalAlign: "middle",
  },
  width: "100%",
  overflowX: "auto",

  table: {
    borderCollapse: "collapse",
    minWidth: "100%",
    width: "100%",

    thead: {
      backgroundColor: "$default",

      th: {
        fontSize: "$default",
        fontWeight: "normal",
        borderRight: "0.1rem solid $border",
        padding: "$small $medium",
        "&:last-child": {
          borderRight: 0,
        },
      },
    },
    tbody: {
      tr: {
        borderTop: "0.1rem solid $border",
        transition: "$default",

        td: {
          borderRight: "0.1rem solid $border",
          padding: "$small $medium",
          "&:last-child": {
            borderRight: 0,
          },
        },
      },
    },
  },
});
