import { styled } from "../../stitches.config";

export const TextSizes = {
  h1: {
    fontFamily: "$serif",
    fontSize: "$h1",
    lineHeight: "$small",
    marginBottom: "calc($medium * 1.3)",
  },
  h2: {
    fontFamily: "$serif",
    fontSize: "$h2",
    lineHeight: "$small",
    marginBottom: "calc($medium * 1.2)",
  },
  h3: {
    fontFamily: "$serif",
    fontSize: "$h3",
    lineHeight: "$small",
    marginBottom: "calc($medium * 1.1)",
  },
  h4: {
    fontFamily: "$serif",
    fontSize: "$h4",
    lineHeight: "$small",
    marginBottom: "$medium",
  },
  h5: {
    fontSize: "$h5",
    lineHeight: "$default",
    marginBottom: "$small",
  },
  h6: {
    fontSize: "$h6",
    lineHeight: "$default",
    marginBottom: "$small",
  },
  label: {
    color: "$accent",
    display: "block",
    fontSize: "$small",
    lineHeight: "$default",
    marginBottom: "$smaller",
  },
  li: {
    fontSize: "$default",
    lineHeight: "$default",
    listStylePosition: "inside",
    marginBottom: "$smaller",
  },
  ol: {
    marginBottom: 0,
  },
  p: {
    fontFamily: "$default",
    fontSize: "$default",
    lineHeight: "$default",
    marginBottom: "$small",
  },
  small: {
    display: "block",
    fontSize: "$small",
    lineHeight: "$default",
    marginBottom: "$smaller",
  },
  span: {
    fontSize: "inherit",
    fontWeight: "inherit",
    lineHeight: "inherit",
  },
  strong: {
    fontSize: "inherit",
    fontWeight: "bold",
    lineHeight: "inherit",
  },
  ul: {
    marginBottom: 0,
  },
};

export const TextStyled = styled("div", {
  "&:last-child": {
    marginBottom: "0 !important",
  },
  color: "$text",
  variants: {
    accent: {
      true: {
        color: "$accent",
      },
    },
    bold: {
      true: {
        fontWeight: "bold",
      },
    },
    size: TextSizes,
  },
});

export default TextStyled;
