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
import { useRef, useState } from "react";
import { useEventListener, useLockedBody, useOnClickOutside } from "usehooks-ts";
import { Button } from "../../index";
import { DialogContentStyled, DialogExitStyled, DialogOverlayStyled, DialogStyled, DialogTriggerStyled } from "./Dialog.styles";
export function Dialog(props) {
    var handleClose = function handleClose() {
        setIsOpen(false);
        setTimeout(function() {
            setIsMounted(false);
        }, 250);
    };
    var handleOpen = function handleOpen() {
        setIsOpen(true);
        setIsMounted(true);
    };
    var handleClick = function handleClick() {
        if (isOpen || isMounted) {
            setIsOpen(false);
            setIsMounted(false);
        } else {
            handleOpen();
        }
    };
    var css = props.css, trigger = props.trigger, children = props.children, locked = props.locked;
    var ref = useRef(null);
    var _useState = _slicedToArray(useState(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];
    var _useState1 = _slicedToArray(useState(false), 2), isMounted = _useState1[0], setIsMounted = _useState1[1];
    useOnClickOutside(ref, function() {
        return handleClose();
    });
    useEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            handleClose();
        }
    });
    useLockedBody(locked ? isOpen : false);
    return /*#__PURE__*/ React.createElement(DialogStyled, null, /*#__PURE__*/ React.createElement(DialogTriggerStyled, {
        onClickCapture: function() {
            return handleClick();
        }
    }, trigger), isMounted && /*#__PURE__*/ React.createElement(DialogOverlayStyled, {
        animation: isOpen
    }, /*#__PURE__*/ React.createElement(DialogContentStyled, {
        ref: ref,
        animation: isOpen,
        css: css
    }, /*#__PURE__*/ React.createElement(DialogExitStyled, {
        onClick: function() {
            return handleClose();
        }
    }, /*#__PURE__*/ React.createElement(Button, {
        icon: /*#__PURE__*/ React.createElement(X, null),
        small: true,
        theme: "minimal"
    }, "Close")), children)));
}
