import { fadeIn, fadeOut, styled } from "../../stitches.config";

export const PopoverStyled = styled("div", {
  display: "inline-block",
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
  backgroundColor: "$background",
  border: "0.1rem solid $border",
  borderRadius: "$small",
  boxShadow: "$large",
  lineBreak: "auto",
  overflowY: "auto",
  padding: "$smaller $small",
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
    minimal: {
      true: {
        padding: 0,
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
  zIndex: "$popover",
});

export default PopoverStyled;
