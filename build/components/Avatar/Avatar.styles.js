function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
import { styled } from "../../stitches.config";
import { ImageStyled } from "../Image/Image.styles";
import { TextStyled } from "../Text/Text.styles";
var _obj;
export var AvatarStyled = styled("div", (_obj = {
    backgroundColor: "$default !important",
    borderRadius: "100%",
    display: "inline-flex",
    height: "100%",
    justifyContent: "center",
    overflow: "hidden",
    verticalAlign: "middle"
}, _defineProperty(_obj, "& ".concat(ImageStyled), {
    borderRadius: "100% !important",
    height: "100%",
    img: {
        borderRadius: "100% !important"
    },
    width: "100%"
}), _defineProperty(_obj, "& ".concat(TextStyled), {
    alignSelf: "center",
    opacity: "0.5",
    textTransform: "uppercase"
}), _obj));
export default AvatarStyled;
