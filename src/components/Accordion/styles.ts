import { styled, keyframes } from "../../stitches.config";

const fadeIn = keyframes({
  "0%": { opacity: 0, transform: "translateY(-10px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

export const AccordionStyled = styled("div", {
  overflow: "hidden",
  width: "100%",
});

export const AccordionItemStyled = styled("div", {
  "&:first-child": {
    paddingTop: 0,
  },
  "&:last-child": {
    borderBottom: "none",
    paddingBottom: 0,
  },
  borderBottom: "1px solid $border",
  paddingBottom: "$medium",
  paddingTop: "$medium",
});

export const AccordionHeaderStyled = styled("div", {
  alignItems: "center",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
});

export const AccordionTitleStyled = styled("div", {
  margin: 0,
});

export const AccordionIconStyled = styled("div", {
  "&:hover": {
    opacity: 1,
  },
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

export const AccordionContentStyled = styled("div", {
  paddingBottom: "$small",
  paddingTop: "$medium",
  textAlign: "left",
  variants: {
    open: {
      false: {
        display: "none",
      },
      true: {
        animation: `${fadeIn} 0.3s ease`,
        display: "block",
      },
    },
  },
});

export const AccordionCTAStyled = styled("div", {
  marginTop: "$medium",
});
