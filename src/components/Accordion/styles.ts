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
    marginTop: 0,
  },
  "&:last-child": {
    marginBottom: 0,
  },
  marginTop: "$small",
  marginBottom: "$small",
  border: "0.1rem solid $border",
  borderRadius: "$small",
  overflow: "hidden",
  transition: "$default",
});

export const AccordionHeaderStyled = styled("div", {
  alignItems: "center",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "$defaultSubtle",
  padding: "$small",
  borderRadius: "$small",
  borderBottom: "0.1rem solid transparent",
  transition: "$default",
  variants: {
    open: {
      true: {
        backgroundColor: "$default",
        borderColor: "$borderSubtle",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  },
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
  padding: "$medium $small",
  textAlign: "left",
  transition: "$default",

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
  whiteSpace: "pre-wrap",
});

export const AccordionCTAStyled = styled("div", {
  marginTop: "$medium",
});
