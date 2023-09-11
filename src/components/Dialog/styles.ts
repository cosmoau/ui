import { fadeIn, fadeOut, styled } from "../../stitches.config";
import { TextStyled } from "../Text/styles";

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
  backdropFilter: "blur(0.4px)",
  backgroundColor: "$border",
  bottom: 0,
  darkModeSpec: {
    backdropFilter: "blur(0.8px)",
    backgroundColor: "$borderTable",
  },
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
  borderRadius: "$small",
  boxShadow: "$large",
  overflowX: "hidden",
  overflowY: "auto",
  position: "relative",
  textAlign: "left",
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
    lightbox: {
      true: {
        height: "80%",
        left: "2.5%",
        maxHeight: "95%",
        minHeight: "10%",
        top: "10%",
        width: "95%",
      },
    },
  },
});

export const DialogHeaderStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$default",
  borderBottom: "0.1rem solid $borderTable",
  display: "flex",
  gap: "$small",
  [`& ${TextStyled}`]: {
    marginBottom: "0 !important",
    verticalAlign: "middle",
    whiteSpace: "pre-wrap",
  },
  justifyContent: "space-between",
  padding: "$medium",
  position: "sticky",
  top: 0,
  variants: {
    lightbox: {
      true: {
        background: "$background",
        border: "0.1rem solid $borderTable",
        borderRadius: "$small",
        padding: "$smaller $small",
        phone: {
          left: "$small",
          maxWidth: "50%",
          width: "auto",
        },
        position: "absolute",
        right: "$small",
        top: "$small",
        width: "auto",
      },
    },
  },
  verticalAlign: "middle",

  zIndex: "$special",
});

export const DialogContentStyled = styled("div", {
  padding: "$large",
  phone: {
    padding: "$medium",
  },
  variants: {
    lightbox: {
      true: {
        padding: 0,
      },
    },
  },
});

export default DialogStyled;
