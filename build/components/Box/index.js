function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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
import { X } from "phosphor-react";
import { useState } from "react";
import { Button, Image } from "../../index";
import { BoxExitStyled, BoxImageChildrenStyled, BoxStyled } from "./Box.styles";
export function Box(props) {
    var handleClose = function handleClose() {
        setIsOpen(false);
        setTimeout(function() {
            setIsMounted(false);
        }, 250);
    };
    var image = props.image, imageAlt = props.imageAlt, imageCTA = props.imageCTA, imageFit = props.imageFit, imageHeight = props.imageHeight, imagePosition = props.imagePosition, imageTarget = props.imageTarget, css = props.css, hover = props.hover, loading = props.loading, theme = props.theme, children = props.children, minimal = props.minimal, closable = props.closable;
    var _useState = _slicedToArray(useState(true), 2), isOpen = _useState[0], setIsOpen = _useState[1];
    var _useState1 = _slicedToArray(useState(true), 2), isMounted = _useState1[0], setIsMounted = _useState1[1];
    return isMounted ? image ? /*#__PURE__*/ React.createElement(BoxStyled, {
        animation: !isOpen,
        css: css,
        hover: hover,
        loading: loading || false,
        padding: "none",
        theme: theme || "default"
    }, imageCTA ? /*#__PURE__*/ React.createElement("a", {
        href: imageCTA,
        rel: "noopener noreferrer",
        target: imageTarget || "_blank"
    }, /*#__PURE__*/ React.createElement(Image, {
        alt: imageAlt || "",
        css: {
            img: {
                borderTopLeftRadius: "$medium !important",
                borderTopRightRadius: "$medium !important"
            }
        },
        fill: true,
        fillFit: imageFit || "cover",
        fillHeight: imageHeight || "20rem",
        fillPosition: imagePosition || "center",
        hover: hover,
        src: image
    })) : /*#__PURE__*/ React.createElement(Image, {
        alt: imageAlt || "",
        css: {
            img: {
                borderTopLeftRadius: "$medium !important",
                borderTopRightRadius: "$medium !important"
            }
        },
        fill: true,
        fillFit: imageFit || "cover",
        fillHeight: imageHeight || "20rem",
        fillPosition: imagePosition || "center",
        hover: hover,
        src: image
    }), /*#__PURE__*/ React.createElement(BoxImageChildrenStyled, {
        padding: "default"
    }, children)) : /*#__PURE__*/ React.createElement(BoxStyled, {
        animation: !isOpen,
        css: css,
        hover: hover,
        loading: loading || false,
        padding: minimal ? "none" : "default",
        theme: theme || "default"
    }, children, closable && /*#__PURE__*/ React.createElement(BoxExitStyled, {
        onClick: function() {
            return handleClose();
        }
    }, /*#__PURE__*/ React.createElement(Button, {
        small: true,
        theme: "minimal"
    }, /*#__PURE__*/ React.createElement(X, null)))) : /*#__PURE__*/ React.createElement(React.Fragment, null, " ");
}
