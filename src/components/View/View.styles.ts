import { breakpoints, styled } from "../../stitches.config";

export const ViewStyled = styled("section", {
  boxSizing: "border-box",
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
        margin: "auto",

        [breakpoints.phone]: {
          width: "95%",
        },
        [breakpoints.tabletX]: {
          width: "98%",
        },
        [breakpoints.laptopX]: {
          maxWidth: "1440px",
          width: "94%",
        },
        [breakpoints.desktopX]: {
          maxWidth: "1660px",
          width: "92%",
        },
        [breakpoints.wide]: {
          maxWidth: "1950px",
          width: "90%",
        },
      },
    },
  },
});

export default ViewStyled;
