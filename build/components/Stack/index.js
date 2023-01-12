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
import { breakpoints } from "../../stitches.config";
import { StackColumnStyled, StackRowStyled, StackElementStyled } from "./Stack.styles";
export function Stack(props) {
    var direction = props.direction, align = props.align, top = props.top, bottom = props.bottom, flex = props.flex, flexduo = props.flexduo, minimal = props.minimal, width = props.width, children = props.children, offset = props.offset, widthPhone = props.widthPhone, offsetPhone = props.offsetPhone, widthTablet = props.widthTablet, offsetTablet = props.offsetTablet, widthLaptop = props.widthLaptop, offsetLaptop = props.offsetLaptop, widthDesktop = props.widthDesktop, offsetDesktop = props.offsetDesktop, widthWide = props.widthWide, offsetWide = props.offsetWide, css = props.css, rest = _objectWithoutProperties(props, [
        "direction",
        "align",
        "top",
        "bottom",
        "flex",
        "flexduo",
        "minimal",
        "width",
        "children",
        "offset",
        "widthPhone",
        "offsetPhone",
        "widthTablet",
        "offsetTablet",
        "widthLaptop",
        "offsetLaptop",
        "widthDesktop",
        "offsetDesktop",
        "widthWide",
        "offsetWide",
        "css"
    ]);
    var StackElement = direction === "row" ? StackRowStyled : direction === "column" ? StackColumnStyled : StackElementStyled;
    var _obj;
    return /*#__PURE__*/ React.createElement(StackElement, _extends({
        css: _objectSpread({
            textAlign: align
        }, top && {
            marginTop: 0,
            paddingTop: "$".concat(top)
        }, bottom && {
            marginBottom: 0,
            paddingBottom: "$".concat(bottom)
        }, minimal && {
            paddingLeft: 0,
            paddingRight: 0
        }, direction === "column" && (_obj = {}, _defineProperty(_obj, breakpoints.phone, {
            flex: widthPhone ? "0 0 ".concat(widthPhone, "%") : "0 0 100%",
            marginLeft: offsetPhone ? "".concat(offsetPhone, "%") : 0,
            width: widthPhone ? "".concat(widthPhone, "%") : "100%"
        }), _defineProperty(_obj, breakpoints.tabletX, {
            flex: widthTablet ? "0 0 ".concat(widthTablet, "%") : "0 0 ".concat(width, "%"),
            marginLeft: offsetTablet ? "".concat(offsetTablet, "%") : "".concat(offset, "%"),
            width: widthTablet ? "".concat(widthTablet, "%") : "".concat(width, "%")
        }), _defineProperty(_obj, breakpoints.laptopX, {
            flex: widthLaptop ? "0 0 ".concat(widthLaptop, "%") : "0 0 ".concat(width, "%"),
            marginLeft: offsetLaptop ? "".concat(offsetLaptop, "%") : "".concat(offset, "%"),
            width: widthLaptop ? "".concat(widthLaptop, "%") : "".concat(width, "%")
        }), _defineProperty(_obj, breakpoints.desktopX, {
            flex: widthDesktop ? "0 0 ".concat(widthDesktop, "%") : "0 0 ".concat(width, "%"),
            marginLeft: offsetDesktop ? "".concat(offsetDesktop, "%") : "".concat(offset, "%"),
            width: widthDesktop ? "".concat(widthDesktop, "%") : "".concat(width, "%")
        }), _defineProperty(_obj, breakpoints.wide, {
            flex: widthWide ? "0 0 ".concat(widthWide, "%") : "0 0 ".concat(width, "%"),
            marginLeft: offsetWide ? "".concat(offsetWide, "%") : "".concat(offset, "%"),
            width: widthWide ? "".concat(widthWide, "%") : "".concat(width, "%")
        }), _obj), direction === "row" && {
            "*": {
                alignItems: flex || "normal"
            },
            alignItems: flex || "normal"
        }, css),
        flexduo: flexduo
    }, rest), children);
}
