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
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
import { Image, Text } from "../../index";
import { AvatarStyled } from "./Avatar.styles";
export function Avatar(props) {
    var src = props.src, alt = props.alt, fallback = props.fallback, width = props.width, css = props.css;
    var fontSize = Math.min((width || 35) / 0.9, (width || 35) / 0.9) / (fallback === null || fallback === void 0 ? void 0 : fallback.length) || 1;
    return /*#__PURE__*/ React.createElement(AvatarStyled, {
        css: _objectSpread({
            "*": {
                fontSize: "".concat(fontSize, "px")
            },
            height: width || 35,
            width: width || 35
        }, css)
    }, src ? /*#__PURE__*/ React.createElement(Image, {
        alt: alt || fallback,
        fill: true,
        src: src
    }) : /*#__PURE__*/ React.createElement(Text, {
        as: "span"
    }, fallback));
}
