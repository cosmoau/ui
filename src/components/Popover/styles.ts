import { fadeIn, fadeOut, styled } from "../../stitches.config";

export const PopoverStyled = styled("div", {
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const PopoverTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const PopoverContentStyled = styled("div", {
  backgroundColor: "$defaultTable",
  border: "0.1rem solid $border",
  borderRadius: "$large",
  boxShadow: "$large",
  lineBreak: "auto",
  maxHeight: "50rem",
  overflowY: "auto",
  pointerEvents: "auto",
  position: "absolute",
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
    minimal: {
      false: {
        padding: "$small",
      },
      true: {
        padding: 0,
      },
    },
    small: {
      false: {
        minWidth: "50rem",
        phone: {
          minWidth: "85vw",
        },
      },
      true: {
        minWidth: "25rem",

        phone: {
          minWidth: "65vw",
        },
      },
    },
  },
  width: "100%",
  zIndex: "$popover",
});

export default PopoverStyled;
