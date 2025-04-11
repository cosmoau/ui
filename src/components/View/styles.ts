import { darkTheme, styled } from "../../stitches.config";

export const ViewStyled = styled("section", {
  backgroundColor: "$background",
  color: "$text",
  paddingLeft: "$small",
  paddingRight: "$small",
  position: "relative",
  variants: {
    gradient: {
      true: {
        backgroundImage: `linear-gradient(180deg, $background 0%, $background 50%, $defaultSubtle 100%)`,
      },
    },
    inverted: {
      true: {
        backgroundColor: darkTheme.colors.background,
        color: darkTheme.colors.text,
      },
    },
    noPrint: {
      true: {
        print: {
          display: "none",
        },
      },
    },
  },

  width: "100%",
});

export const ViewContainerStyled = styled("div", {
  variants: {
    app: {
      false: {
        width: "100%",
      },
      true: {
        desktopX: {
          maxWidth: "2000px",
        },
        margin: "auto",
        wide: {
          maxWidth: "2400px",
        },
        width: "99%",
      },
    },
    container: {
      false: {
        width: "100%",
      },
      true: {
        desktopX: {
          maxWidth: "1800px",
        },
        laptopX: {
          maxWidth: "1600px",
          width: "96%",
        },
        margin: "auto",
        wide: {
          maxWidth: "2200px",
        },
        width: "98%",
      },
    },
  },
});

export default ViewStyled;
