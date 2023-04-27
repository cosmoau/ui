import { styled } from "../../stitches.config";

export const ViewStyled = styled("section", {
  backgroundColor: "$background",
  color: "$text",
  paddingLeft: "$small",
  paddingRight: "$small",
  position: "relative",
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
          maxWidth: "1628px",
          width: "92%",
        },

        laptopX: {
          maxWidth: "1480px",
          width: "94%",
        },
        margin: "auto",
        phone: {
          width: "96%",
        },
        tabletX: {
          width: "98%",
        },
        wide: {
          maxWidth: "1776px",
          width: "90%",
        },
      },
    },
  },
});

export default ViewStyled;
