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
  backdropFilter: "blur(0.2px)",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  bottom: 0,
  darkModeSpec: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
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
  height: "auto",
  left: "50%",
  minHeight: "30vh",
  overflowX: "hidden",
  overflowY: "auto",
  position: "relative",
  textAlign: "left",
  top: "50%",
  transform: "translate(-50%, -50%)",
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
    small: {
      false: {
        maxHeight: "85vh",
      },
      true: {
        maxHeight: "75vh",
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
  padding: "calc($medium * 1.25)",
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
