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
        marginTop: "$small",
        top: "100%",
      },
      center: {
        bottom: "auto",
        top: "50%",
        transform: "translateY(-50%)",
      },
      top: {
        bottom: "100%",
        marginBottom: "$small",
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
  "&:last-child": {},
  borderRadius: "$small",
  cursor: "pointer",
  display: "flex",
  fontSize: "$default",
  justifyContent: "space-between",
  padding: "$smaller $small",

  transition: "$default",
  variants: {
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
  fontSize: "$h6",
  fontWeight: "bold",
  padding: "$small",
});

export default SelectStyled;
