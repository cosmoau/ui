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
import { useRef, useState } from "react";
import { useEventListener, useLockedBody, useOnClickOutside } from "usehooks-ts";
import { Input, Loading, Stack, Text } from "../../index";
import { SelectStyled, SelectTriggerStyled, SelectGroupStyled, SelectItemStyled } from "./Select.styles";
export function Select(props) {
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
    var handleTriggerClick = function handleTriggerClick() {
        if (isOpen || isMounted) {
            handleClose();
        } else {
            handleOpen();
        }
    };
    var handleSelection = function handleSelection(value, label) {
        if (onSelection) {
            onSelection(value, label);
        }
        handleClose();
    };
    var handleFilter = function handleFilter() {
        if (filter) {
            return options.filter(function(option) {
                return option.label.toLowerCase().includes(filter.toLowerCase());
            });
        }
        return options;
    };
    var options = props.options, css = props.css, onSelection = props.onSelection, locked = props.locked, selection = props.selection, width = props.width, align = props.align, trigger = props.trigger, loading = props.loading, last = props.last;
    var ref = useRef(null);
    var _useState = _slicedToArray(useState(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];
    var _useState1 = _slicedToArray(useState(false), 2), isMounted = _useState1[0], setIsMounted = _useState1[1];
    var _useState2 = _slicedToArray(useState(""), 2), filter = _useState2[0], setFilter = _useState2[1];
    useOnClickOutside(ref, handleClose);
    useEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            handleClose();
        }
    });
    useLockedBody(locked ? isOpen : false);
    return /*#__PURE__*/ React.createElement(SelectStyled, {
        css: css
    }, /*#__PURE__*/ React.createElement(SelectTriggerStyled, {
        key: selection || Math.random(),
        onClickCapture: function() {
            return handleTriggerClick();
        }
    }, trigger), isMounted && /*#__PURE__*/ React.createElement(SelectGroupStyled, {
        ref: ref,
        animation: isOpen,
        css: {
            left: align === "left" ? "0" : "auto",
            maxWidth: width || "30rem",
            minWidth: width || "20rem",
            right: align === "right" ? "0" : "auto"
        }
    }, filter && /*#__PURE__*/ React.createElement(Stack, {
        bottom: "small",
        top: "small"
    }, /*#__PURE__*/ React.createElement(Input, {
        disabled: !options,
        placeholder: "Search",
        submitValid: filter.length > 0,
        value: filter,
        onChange: function(event) {
            return setFilter(event.target.value);
        }
    })), loading ? /*#__PURE__*/ React.createElement(Loading, null) : handleFilter().length ? handleFilter().map(function(option) {
        return /*#__PURE__*/ React.createElement(SelectItemStyled, {
            key: option.value + Math.random(),
            css: _objectSpread({
                color: selection === (option.value || option.label) ? "$accent" : "$text"
            }, last && !filter && {
                "&:last-child": {
                    borderTop: "0.1rem solid $border",
                    marginTop: "$medium"
                }
            }),
            onClick: function() {
                return handleSelection(option.value, option.label);
            }
        }, option.label);
    }) : /*#__PURE__*/ React.createElement(Text, {
        accent: true,
        as: "p",
        css: {
            padding: "$b $small $smallest $small"
        }
    }, "No results found.")));
}
export function Dropdown(props) {
    // eslint-disable-next-line no-console
    console.warn("Dropdown was renamed. Please use Select instead.");
    return /*#__PURE__*/ React.createElement(Select, _extends({}, props));
}
