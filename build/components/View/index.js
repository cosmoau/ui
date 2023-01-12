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
import { theme } from "../../stitches.config";
import { ViewStyled, ViewContainerStyled } from "./View.styles";
export function View(props) {
    var container = props.container, inverted = props.inverted, top = props.top, bottom = props.bottom, css = props.css, children = props.children;
    return /*#__PURE__*/ React.createElement(ViewStyled, {
        className: inverted ? theme.toString() : undefined,
        css: _objectSpread({}, top && {
            marginTop: 0,
            paddingTop: "$".concat(top)
        }, bottom && {
            marginBottom: 0,
            paddingBottom: "$".concat(bottom)
        }, css)
    }, /*#__PURE__*/ React.createElement(ViewContainerStyled, {
        container: container
    }, children));
}
