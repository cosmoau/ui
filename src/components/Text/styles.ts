import { styled } from "../../stitches.config";

const highlight = {
  borderRadius: "calc($small / 2)",
  padding: "calc($smallest / 2) $smaller",
};
const link = {
  "&:hover": {
    backgroundColor: "$default",

    borderRadius: "$small",

    darkModeSpec: {
      backgroundColor: "$border",
    },
  },

  borderBottom: "1px solid $border",
  cursor: "pointer",
  display: "inline-block",
  margin: 0,
  padding: 0,

  transition: "$default",
};

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
    listStylePosition: "inside",
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
    listStylePosition: "inside",
    marginBottom: 0,
    paddingLeft: "$small",
  },
};

export const TextStyled = styled("div", {
  "&:last-child": {
    marginBottom: "0 !important",
  },

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
      alternate: {
        ...highlight,
        backgroundColor: "$background",
        darkModeSpec: {
          backgroundColor: "$defaultHover",
        },
      },
      blue: {
        ...highlight,
        backgroundColor: "$blueBackground",
        darkModeSpec: {
          backgroundColor: "$blueText",
        },
      },
      default: {
        ...highlight,
        backgroundColor: "$default",
        darkModeSpec: {
          backgroundColor: "$border",
        },
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
    link: {
      alternate: {
        ...link,
        "&:hover": {
          backgroundColor: "$defaultHover",
          borderRadius: "$small",
        },
      },
      default: {
        ...link,
      },
      minimal: {
        ...link,
        borderColor: "transparent",
      },
    },
    size: TextSizes,
  },
});

export default TextStyled;
