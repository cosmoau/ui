import { fadeIn, fadeOut, styled } from "../../stitches.config";

export const MenuStyled = styled("div", {
  display: "inline-flex",
  height: "100%",
  verticalAlign: "middle",
});

export const MenuTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const MenuGroupStyled = styled("div", {
  backgroundColor: "$background",
  border: "0.1rem solid $border",
  borderRadius: "$small",
  boxShadow: "$large",

  left: "2rem",
  lineBreak: "auto",
  marginTop: "$larger !important",
  padding: "$small",
  pointerEvents: "auto",
  position: "absolute",
  right: "auto",
  textAlign: "left !important",
  transition: "$default",
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .15s linear`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeIn} .15s linear`,
        animationFillMode: "forwards",
      },
    },
  },

  width: "calc(100vw - 4rem)",
  zIndex: "$menu",
});

export const MenuItemStyled = styled("div", {
  "&:hover": {
    backgroundColor: "$defaultHover",
  },

  borderRadius: "$small",
  cursor: "pointer",
  display: "flex",
  fontSize: "$default",
  justifyContent: "space-between",
  marginTop: "$smallest",
  padding: "$small",
  transition: "$default",
  variants: {
    selected: {
      true: {
        backgroundColor: "$default",
        fontWeight: "bold",
      },
    },
  },
});

export const MenuContentStyled = styled("div", {
  borderTop: "0.1rem solid $border",
  display: "block",
  marginTop: "$small",
  padding: "$medium $small $small $small",
});

export default MenuStyled;
