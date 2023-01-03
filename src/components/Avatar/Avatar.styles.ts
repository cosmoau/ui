import { styled } from "../../stitches.config";
import { ImageStyled } from "../Image/Image.styles";
import { TextStyled } from "../Text/Text.styles";

export const AvatarStyled = styled("div", {
  backgroundColor: "$default !important",
  borderRadius: "100%",
  display: "inline-flex",
  height: "100%",
  justifyContent: "center",
  overflow: "hidden",
  verticalAlign: "middle",

  [`& ${ImageStyled}`]: {
    borderRadius: "100% !important",
    height: "100%",
    img: {
      borderRadius: "100% !important",
    },
    width: "100%",
  },

  [`& ${TextStyled}`]: {
    alignSelf: "center",

    opacity: "0.5",
    textTransform: "uppercase",
  },
});

export default AvatarStyled;
