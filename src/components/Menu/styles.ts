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
  boxShadow: "$large",
  lineBreak: "auto",
  overflowY: "auto",
  pointerEvents: "auto",
  textAlign: "left !important",
  transition: "$default",
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .15s linear`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeIn} .2s linear`,
        animationFillMode: "forwards",
      },
    },
    full: {
      false: {
        borderRadius: "$large",
        left: "2rem",
        marginTop: "$larger !important",
        padding: "$small",
        position: "absolute",
        right: "auto",
        width: "calc(100vw - 4rem)",
      },
      true: {
        borderRadius: 0,
        bottom: 0,
        left: 0,
        margin: 0,
        padding: "$medium",
        position: "fixed",
        right: 0,
        top: 0,
        width: "100vw",
      },
    },
  },
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
  textAlign: "left",
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

export const MenuSubGroupStyled = styled("div", {
  display: "block",
  marginTop: "$smallest",
});

export const MenuSubItemStyled = styled("div", {
  "&:hover": {
    backgroundColor: "$defaultHover",
  },
  borderLeft: "0.5rem solid $defaultHover",
  borderRadius: "$small",
  cursor: "pointer",
  display: "flex",
  fontSize: "$small",
  justifyContent: "flex-start",
  marginTop: "$smallest",
  padding: "$small",
  transition: "$default",
  userSelect: "none",
  variants: {
    selected: {
      false: {
        backgroundColor: "$defaultSubtle",
        fontWeight: "normal",
      },
      true: {
        backgroundColor: "$default",
        fontWeight: "bold",
      },
    },
  },
  width: "100%",
});

export const MenuIconStyled = styled("div", {
  "&:hover": {
    opacity: 1,
  },

  display: "inline-flex",
  opacity: 0.5,
  transition: "transform 0.3s ease",
  variants: {
    open: {
      true: {
        opacity: 1,
        transform: "rotate(180deg)",
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

export const MenuHeaderStyled = styled("div", {
  alignItems: "center",
  borderBottom: "0.1rem solid $border",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "$small",
  padding: "0 $small $small $small",
});

export default MenuStyled;
