import { styled } from "../../stitches.config";

const highlight = { borderRadius: "0.25rem", paddingLeft: "$smaller", paddingRight: "$smaller" };

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
    marginBottom: "$smaller",
  },
  ol: {
    marginBottom: 0,
    paddingLeft: "$small",
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
    paddingLeft: "$small",
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
    highlight: {
      blue: {
        ...highlight,
        backgroundColor: "$blueBackground",
        darkModeSpec: {
          backgroundColor: "$blueText",
        },
      },
      default: {
        ...highlight,
        backgroundColor: "$border",
      },
      green: {
        ...highlight,
        backgroundColor: "$greenBackground",
        darkModeSpec: {
          backgroundColor: "$greenText",
        },
      },
      orange: {
        ...highlight,
        backgroundColor: "$orangeBackground",
        darkModeSpec: {
          backgroundColor: "$orangeText",
        },
      },
      purple: {
        ...highlight,
        backgroundColor: "$purpleBackground",
        darkModeSpec: {
          backgroundColor: "$purpleText",
        },
      },
      red: {
        ...highlight,
        backgroundColor: "$redBackground",
        darkModeSpec: {
          backgroundColor: "$redText",
        },
      },
    },
    size: TextSizes,
  },
});

export default TextStyled;
