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
  borderRadius: "$small",
  boxShadow: "$large",
  lineBreak: "auto",
  overflowY: "auto",
  padding: "$smallest",
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
        left: 0,
        right: "auto",
      },
      right: {
        left: "auto",
        right: 0,
      },
    },
    vertical: {
      bottom: {
        bottom: "auto",
        marginTop: "$small !important",
        top: "100%",
      },
      top: {
        bottom: "100%",
        marginBottom: "$small !important",
        marginTop: 0,
        top: "auto",
      },
    },
  },
  width: "100%",
  zIndex: "$select",
});

export const SelectFilterStyled = styled("div", {
  borderBottom: "0.1rem solid $border",
  input: {
    width: "100%",
  },
  marginBottom: "$small",

  padding: "$smaller $small",
});

export const SelectItemStyled = styled("div", {
  "&:hover": {
    backgroundColor: "$defaultHover",
    borderBottomColor: "transparent",
  },
  borderRadius: "$small",
  cursor: "pointer",
  display: "flex",
  fontSize: "$default",
  justifyContent: "space-between",
  marginTop: "$smallest",
  padding: "$smaller $small",

  transition: "$default",
  variants: {
    last: {
      true: {
        "&:last-child": {
          borderTop: "0.1rem solid $border",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          marginTop: "$small",
          paddingTop: "$small",
        },
      },
    },
    selected: {
      true: {
        backgroundColor: "$default",
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
  color: "$accent",
  fontSize: "$small",
  padding: "$small",
});

export const SelectIconStyled = styled("div", {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  svg: {
    height: "1.7rem",
    width: "1.7rem",
  },
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
