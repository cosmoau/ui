import { styled } from "../../stitches.config";
import { ImageStyled } from "../Image/Image.styles";

export const AvatarStyled = styled("div", {
  alignSelf: "center",
  backgroundColor: "$default",
  borderRadius: "100%",
  color: "$accent",
  display: "inline-flex",
  height: "100%",

  [`& ${ImageStyled}`]: {
    borderRadius: "100% !important",
    height: "100%",
    img: {
      borderRadius: "100% !important",
      objectFit: "cover !important",
    },
    width: "100%",
  },
  justifyContent: "center",

  span: {
    alignItems: "center",
    color: "$accent",
    display: "flex",
    fontSize: "$small",
    fontWeight: "bold",
    justifyContent: "center",
    overflow: "hidden",

    textTransform: "uppercase"

  },
  verticalAlign: "middle",
});

export default AvatarStyled;
