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
        minWidth: "100%",
      },
      true: {
        desktopX: {
          maxWidth: "1660px",
          width: "92%",
        },

        laptopX: {
          maxWidth: "1440px",
          width: "94%",
        },
        margin: "auto",
        phone: {
          width: "95%",
        },
        tabletX: {
          width: "98%",
        },
        wide: {
          maxWidth: "1950px",
          width: "90%",
        },
      },
    },
  },
});

export default ViewStyled;
