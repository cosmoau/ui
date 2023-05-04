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
          maxWidth: "1800px",
          width: "94%",
        },
        laptopX: {
          width: "95%",
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
