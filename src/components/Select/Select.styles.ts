import { fadeIn, fadeOut, styled } from "../../stitches.config";

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
  borderRadius: "$small",
  boxShadow: "$large",
  lineBreak: "auto",
  overflowY: "auto",
  padding: "calc($smallest)",
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
    horizontal: {
      center: {
        left: "50%",
        right: "auto",
        transform: "translateX(-50%)",
      },
      left: {
        left: "0",
        right: "auto",
      },
      right: {
        left: "auto",
        right: "0",
      },
    },
    vertical: {
      bottom: {
        bottom: "auto",
        marginTop: "10%",
        top: "100%",
      },
      center: {
        bottom: "auto",
        top: "50%",
        transform: "translateY(-50%)",
      },
      top: {
        bottom: "100%",
        marginBottom: "10%",
        marginTop: "0",
        top: "auto",
      },
    },
  },
  width: "100%",
  zIndex: "$select",
});

export const SelectItemStyled = styled("div", {
  "&:hover": {
    backgroundColor: "$default",
    borderBottomColor: "transparent",
    borderRadius: "$small",
  },
  "&:last-child": {
    borderBottom: 0,
  },
  borderRadius: 0,
  cursor: "pointer",
  display: "flex",
  fontSize: "$default",
  padding: "$smaller $small",
  transition: "$default",
});

export default SelectStyled;
