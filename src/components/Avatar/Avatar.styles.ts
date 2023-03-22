import { styled } from "../../stitches.config";
import { ImageStyled } from "../Image/Image.styles";

export const AvatarStyled = styled("div", {
  alignSelf: "center",
  backgroundColor: "$default !important",
  borderRadius: "100%",
  color: "$accent",
  display: "inline-flex",
  height: "100%",

  [`& ${ImageStyled}`]: {
    borderRadius: "100% !important",
    height: "100%",
    img: {
      borderRadius: "100% !important",
    },
    width: "100%",
  },
  justifyContent: "center",

  overflow: "hidden",
  span: {
    alignItems: "center",
    color: "$accent",
    display: "flex",
    fontSize: "1.4rem",
    fontWeight: "bold",
    justifyContent: "center",
    opacity: 0.6,
    textTransform: "uppercase",
  },
  verticalAlign: "middle",
});

export default AvatarStyled;
