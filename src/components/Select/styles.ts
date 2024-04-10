import { fadeIn, fadeOut, styled } from "../../stitches.config";

export const SelectStyled = styled("div", {
  display: "inline-block",
  position: "relative",
  verticalAlign: "middle",
});

export const SelectTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const SelectGroupStyled = styled("div", {
  backgroundColor: "$background",
  border: "0.1rem solid $border",
  borderRadius: "$large",
  boxShadow: "$large",
  lineBreak: "auto",
  overflowY: "auto",
  padding: "0 $smaller",
  pointerEvents: "auto",
  textAlign: "left !important",
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
  },
  width: "100%",
  zIndex: "$select",
});

export const SelectFilterStyled = styled("div", {
  backgroundColor: "$background",
  input: {
    fontSize: "$small",
    width: "100%",
  },

  marginBottom: "$small",
  padding: "$small $smallest $smallest $smallest",
  position: "sticky",
  top: 0,
});

export const SelectItemStyled = styled("div", {
  "&:first-child": {
    marginTop: "$smaller",
  },

  "&:hover": {
    backgroundColor: "$defaultHover",
    borderBottomColor: "transparent",
  },

  "&:last-child": {
    marginBottom: "$smaller",
  },

  backgroundColor: "$background",
  borderRadius: "$small",
  cursor: "pointer",
  display: "flex",
  fontSize: "$default",
  justifyContent: "space-between",
  marginTop: "$smallest",
  padding: "$smaller $small",
  transition: "$default",
  variants: {
    focused: {
      true: {
        backgroundColor: "$defaultHover  !important",
        borderBottomColor: "transparent",
      },
    },
    last: {
      true: {
        "&:last-child": {
          "&:hover": {
            backgroundColor: "$defaultHover",
          },
          background: "$default",
          borderTop: "0.1rem solid $border",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,

          marginTop: "$small",
        },
      },
    },
    selected: {
      true: {
        backgroundColor: "$default",
        fontWeight: "bold",
      },
    },
  },
});

export const SelectEmptyStyled = styled("div", {
  color: "$accent",
  fontSize: "$h6",
  padding: "$small",
});

export const SelectLabelStyled = styled("div", {
  padding: "$small",
});

export const SelectIconStyled = styled("div", {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  variants: {
    align: {
      left: {
        marginRight: "$small",
      },
      right: {
        marginLeft: "$small",
      },
    },
  },

  verticalAlign: "middle",
});

export default SelectStyled;
