import { styled } from "../../stitches.config";
import { TextSizes } from "../Text/Text.styles";

export const TableStyled = styled("table", {
  "*": {
    alignContent: "center",
    verticalAlign: "middle",
  },
  borderCollapse: "separate",
  borderSpacing: "$small",
  maxWidth: "100%",
  minWidth: "100%",
  overflowX: "auto",
  width: "100%",
});

export const TableHeadStyled = styled("thead", {
  backgroundColor: "$default",
  borderRadius: "$medium",
  textAlign: "left",
  width: "100%",
});

export const TableBodyStyled = styled("tbody", {
  tr: {
    "&:hover": {
      backgroundColor: "$soft",
    },
  },

  width: "100%",
});

export const TableRowStyled = styled("tr", {
  "&:last-child": {
    td: {
      borderBottom: "0",
    },
  },

  borderRadius: "$medium",

  transition: "$default",
});

export const TableCellStyled = styled("td", {
  "&:first-child": {
    textAlign: "left !important",
  },
  "&:last-child": {
    borderRight: "0",
    textAlign: "right",
  },
  ...TextSizes.p,

  borderBottom: "0.1rem solid $border",
  borderRight: "0.1rem solid $border",
  justifyContent: "center",
  marginBottom: "0 !important",
  padding: "$smaller $small ",
});

export const TableHeadCellStyled = styled("th", {
  "&:last-child": {
    borderRight: "0",
  },
  ...TextSizes.p,
  borderBottom: "0.1rem solid $border",
  borderRight: "0.1rem solid $border",
  marginBottom: "0 !important",
  padding: "$small $medium ",
  textAlign: "center",
});

export default TableStyled;
