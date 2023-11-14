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
        backgroundImage: `linear-gradient(180deg, $background 0%, $gradientStart 70%, $gradientEnd 100%)`,
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
    container: {
      false: {
        width: "100%",
      },
      true: {
        desktopX: {
          maxWidth: "1700px",
          width: "94%",
        },
        laptopX: {
          width: "94%",
        },
        margin: "auto",
        phone: {
          width: "96%",
        },
        tabletX: {
          width: "94%",
        },
        wide: {
          maxWidth: "2100px",
          width: "93%",
        },
      },
    },
  },
});

export default ViewStyled;
