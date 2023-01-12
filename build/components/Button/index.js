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
import { ArrowSquareOut } from "phosphor-react";
import { Loading } from "../../index";
import { ButtonIconStyled, ButtonStyled } from "./Button.styles";
export function Button(props) {
    var external = props.external, icon = props.icon, iconPosition = props.iconPosition, loading = props.loading, small = props.small, theme = props.theme, disabled = props.disabled, inline = props.inline, children = props.children, block = props.block, css = props.css, onClick = props.onClick, rest = _objectWithoutProperties(props, [
        "external",
        "icon",
        "iconPosition",
        "loading",
        "small",
        "theme",
        "disabled",
        "inline",
        "children",
        "block",
        "css",
        "onClick"
    ]);
    return /*#__PURE__*/ React.createElement(ButtonStyled, _extends({
        block: block,
        css: _objectSpread({}, inline && {
            alignSelf: "center",
            marginRight: inline === "auto" ? "auto" : "$".concat(inline),
            verticalAlign: "middle"
        }, css),
        disabled: disabled || loading || false,
        small: small,
        theme: theme || "default",
        onClick: onClick
    }, rest), loading && /*#__PURE__*/ React.createElement(ButtonIconStyled, {
        align: "left"
    }, /*#__PURE__*/ React.createElement(Loading, null)), icon && (iconPosition === "left" || !iconPosition) && !external && /*#__PURE__*/ React.createElement(ButtonIconStyled, {
        align: "left"
    }, icon), children, icon && iconPosition === "right" && !external && /*#__PURE__*/ React.createElement(ButtonIconStyled, {
        align: "right"
    }, icon), external && /*#__PURE__*/ React.createElement(ButtonIconStyled, {
        align: "right"
    }, /*#__PURE__*/ React.createElement(ArrowSquareOut, null)));
}
