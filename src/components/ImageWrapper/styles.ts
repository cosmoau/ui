import { styled } from "../../stitches.config";

export const ImageWrapperStyled = styled("div", {
  height: "auto",
  img: {
    overflow: "hidden",
    transition: "$default",
  },
  overflow: "hidden",
  position: "relative",
  transition: "$default",
  variants: {
    hover: {
      true: {
        img: {
          "&:hover": {
            transform: "scale(1.075)",
          },
        },
      },
    },
  },

  width: "100%",
});

export default ImageWrapperStyled;
