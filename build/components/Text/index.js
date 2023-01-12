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
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
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
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
import { TextStyled } from "./Text.styles";
export function Text(props) {
    var accent = props.accent, top = props.top, bottom = props.bottom, inline = props.inline, as = props.as, override = props.override, css = props.css, children = props.children, rest = _objectWithoutProperties(props, [
        "accent",
        "top",
        "bottom",
        "inline",
        "as",
        "override",
        "css",
        "children"
    ]);
    return /*#__PURE__*/ React.createElement(TextStyled, _extends({
        accent: accent,
        as: override || as || "p",
        css: _objectSpread({}, top && {
            marginTop: 0,
            paddingTop: "$".concat(top)
        }, bottom && {
            marginBottom: 0,
            paddingBottom: "$".concat(bottom)
        }, inline && {
            alignSelf: "center",
            display: "inline-flex",
            marginBottom: "0 !important",
            marginRight: inline === "auto" ? "auto" : "$".concat(inline),
            verticalAlign: "middle"
        }, css),
        size: as || "p"
    }, rest), children);
}
