function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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
import { ClipboardText } from "phosphor-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "../../index";
import { CodeStyled, CodeFunctionStyled, CodeBlockStyled } from "./Code.styles";
export function Code(props) {
    var handleCopy = function handleCopy() {
        navigator.clipboard.writeText((children === null || children === void 0 ? void 0 : children.toString()) || "");
        setIsCopied(true);
        toast("Copied to clipboard");
        setTimeout(function() {
            setIsCopied(false);
        }, 3000);
    };
    var children = props.children, css = props.css, rest = _objectWithoutProperties(props, [
        "children",
        "css"
    ]);
    var _useState = _slicedToArray(useState(false), 2), isCopied = _useState[0], setIsCopied = _useState[1];
    return /*#__PURE__*/ React.createElement(CodeStyled, {
        css: css
    }, /*#__PURE__*/ React.createElement(CodeBlockStyled, _extends({}, rest), children), /*#__PURE__*/ React.createElement(CodeFunctionStyled, null, /*#__PURE__*/ React.createElement(Button, {
        icon: isCopied ? /*#__PURE__*/ React.createElement(ClipboardText, {
            opacity: 0.5,
            weight: "duotone"
        }) : /*#__PURE__*/ React.createElement(ClipboardText, {
            weight: "duotone"
        }),
        small: true,
        onClick: isCopied ? undefined : function() {
            handleCopy();
        }
    }, "Copy")));
}
