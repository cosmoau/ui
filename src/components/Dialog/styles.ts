import { fadeIn, fadeOut, keyframes, styled } from "../../stitches.config";
import { TextStyled } from "../Text/styles";

const slideInRight = keyframes({
  from: {
    transform: "translateX(100%)",
  },
  to: {
    transform: "translateX(0)",
  },
});

const slideOutRight = keyframes({
  from: {
    transform: "translateX(0)",
  },
  to: {
    transform: "translateX(100%)",
  },
});

const slideInBottom = keyframes({
  from: {
    transform: "translateY(100%)",
  },
  to: {
    transform: "translateY(0)",
  },
});

const slideOutBottom = keyframes({
  from: {
    transform: "translateY(0)",
  },
  to: {
    transform: "translateY(100%)",
  },
});

export const DialogStyled = styled("div", {
  display: "inline-block",
  position: "relative",
  verticalAlign: "middle",
});

export const DialogTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const DialogOverlayStyled = styled("div", {
  backdropFilter: "blur(0.2px)",
  backgroundColor: "$dialog",
  bottom: 0,
  height: "100%",
  left: 0,
  position: "fixed",
  right: 0,
  top: 0,
  transition: "$default",
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .3s linear`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeIn} .2s linear`,
        animationFillMode: "forwards",
      },
    },
  },
  width: "100%",
  zIndex: "$dialog",
});

export const DialogCoreStyled = styled("div", {
  backgroundColor: "$background",
  boxShadow: "$large",
  height: "100%",
  overflowX: "hidden",
  overflowY: "auto",
  position: "fixed",
  right: 0,
  textAlign: "left",
  top: 0,
  transition: "$default",

  variants: {
    animation: {
      false: {
        animation: `${slideOutRight} .3s ease-out`,
        animationFillMode: "forwards",
        phone: {
          animation: `${slideOutBottom} .3s ease-out`,
        },
      },
      true: {
        animation: `${slideInRight} .15s ease-in`,
        animationFillMode: "forwards",
        phone: {
          animation: `${slideInBottom} .15s ease-in`,
        },
      },
    },
    small: {
      false: {
        phone: {
          bottom: 0,
          height: "auto",
          left: 0,
          maxHeight: "85%",
          minHeight: "40%",
          right: 0,
          top: "auto",
          width: "100% !important",
        },
        tabletX: {
          width: "75% !important",
        },
        width: "55%",
      },
      true: {
        phone: {
          bottom: 0,
          height: "auto",
          left: 0,
          maxHeight: "70%",
          minHeight: "30%",
          right: 0,
          top: "auto",
          width: "100% !important",
        },
        tabletX: {
          width: "50% !important",
        },
        width: "35%",
      },
    },
  },
});

export const DialogHeaderStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$defaultTable",
  borderBottom: "0.1rem solid $borderTable",
  display: "flex",
  gap: "$small",
  [`& ${TextStyled}`]: {
    marginBottom: "0 !important",
    verticalAlign: "middle",
    whiteSpace: "pre-wrap",
  },
  justifyContent: "space-between",
  padding: "$medium calc($medium * 1.25)",
  phone: {
    padding: "$medium",
  },
  position: "sticky",
  top: 0,
  verticalAlign: "middle",
  zIndex: "$special",
});

export const DialogContentStyled = styled("div", {
  padding: "calc($medium * 1.25)",
  phone: {
    padding: "$medium",
  },
});

export default DialogStyled;
