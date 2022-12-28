import { fadeIn, fadeOut, styled } from "../../stitches.config";
import { TextSizes } from "../Text/Text.styles";

export const SelectStyled = styled("div", {
  display: "inline-block",
  position: "relative",
  verticalAlign: "middle",
});

export const SelectTriggerStyled = styled("div", {
  "*": {
    cursor: "pointer",
  },
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const SelectGroupStyled = styled("div", {
  backgroundColor: "$background",
  border: "0.1rem solid $border",
  borderRadius: "$a",
  boxShadow: "$c",
  lineBreak: "auto",
  marginTop: "5%",
  overflowY: "auto",
  padding: "calc($b / 1.5)",
  position: "absolute",
  textAlign: "left !important",
  transition: "$default",
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .2s linear`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeIn} .2s linear`,
        animationFillMode: "forwards",
      },
    },
  },
  width: "100%",
  zIndex: "$select",
});

export const SelectItemStyled = styled("div", {
  ...TextSizes.p,

  "&:hover": {
    backgroundColor: "$default",
    borderBottomColor: "transparent",
    borderRadius: "$a",
  },
  "&:last-child": {
    borderBottom: 0,
  },
  borderRadius: 0,
  cursor: "pointer",
  display: "flex",
  lineHeight: "normal",
  marginBottom: "0 !important",

  padding: "$b $c",
  transition: "$default",
});

export default SelectStyled;
