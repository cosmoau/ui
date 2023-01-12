function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
import { Circle, X } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../../index";
import { BadgeIconStyled, BadgeStyled, BadgeDotStyled, BadgeLoadingStyled } from "./Badge.styles";
export function Badge(props) {
    var handleClose = function handleClose() {
        setIsOpen(false);
        setTimeout(function() {
            setIsMounted(false);
        }, 250);
    };
    var closable = props.closable, dot = props.dot, icon = props.icon, iconPosition = props.iconPosition, loading = props.loading, theme = props.theme, inline = props.inline, block = props.block, css = props.css, onClick = props.onClick, dotColor = props.dotColor, children = props.children;
    var _useState = _slicedToArray(useState(true), 2), isOpen = _useState[0], setIsOpen = _useState[1];
    var _useState1 = _slicedToArray(useState(true), 2), isMounted = _useState1[0], setIsMounted = _useState1[1];
    return isMounted ? /*#__PURE__*/ React.createElement(BadgeStyled, {
        animation: !isOpen,
        css: _objectSpread({}, inline && {
            display: "inline-flex",
            marginRight: inline === "auto" ? "auto" : "$".concat(inline),
            verticalAlign: "middle"
        }, block && {
            justifyContent: "initial",
            width: "100%"
        }, css),
        theme: theme || "default",
        onClick: onClick
    }, icon && (iconPosition === "left" || !iconPosition) && /*#__PURE__*/ React.createElement(BadgeIconStyled, {
        align: "left"
    }, icon), dot && /*#__PURE__*/ React.createElement(BadgeDotStyled, {
        dotColor: dotColor || theme || "default",
        pulse: dot === "pulse"
    }, /*#__PURE__*/ React.createElement(Circle, {
        weight: "fill"
    })), loading ? /*#__PURE__*/ React.createElement(BadgeLoadingStyled, null, /*#__PURE__*/ React.createElement(Loading, null)) : children, icon && iconPosition === "right" && !closable && /*#__PURE__*/ React.createElement(BadgeIconStyled, {
        align: "right"
    }, icon), closable && /*#__PURE__*/ React.createElement(BadgeIconStyled, {
        align: "right",
        onClick: function() {
            return handleClose();
        }
    }, /*#__PURE__*/ React.createElement(X, {
        style: {
            cursor: "pointer",
            opacity: 0.7
        },
        weight: "fill"
    }))) : /*#__PURE__*/ React.createElement(React.Fragment, null, " ");
}
