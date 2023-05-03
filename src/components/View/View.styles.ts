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
          maxWidth: "1500px",
          width: "95%",
        },
        margin: "auto",
        phone: {
          width: "97%",
        },
        tabletX: {
          width: "95%",
        },
        wide: {
          maxWidth: "2100px",
          width: "92%",
        },
      },
    },
  },
});

export default ViewStyled;
