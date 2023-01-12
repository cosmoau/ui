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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
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
import { useOnClickOutside } from "usehooks-ts";
import { PopoverContentStyled, PopoverStyled, PopoverTriggerStyled } from "./Popover.styles";
export function Popover(props) {
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
        } else if (type === "click" || !type) {
            handleOpen();
        }
    };
    var handleMouseEnter = function handleMouseEnter() {
        if (isOpen || isMounted) {
            setIsOpen(false);
            setIsMounted(false);
        } else if (type === "hover") {
            handleOpen();
        }
    };
    var handleMouseLeave = function handleMouseLeave() {
        if (type === "hover") {
            handleClose();
        }
    };
    var css = props.css, trigger = props.trigger, children = props.children, type = props.type, align = props.align, width = props.width, minimal = props.minimal;
    var ref = useRef(null);
    var _useState = _slicedToArray(useState(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];
    var _useState1 = _slicedToArray(useState(false), 2), isMounted = _useState1[0], setIsMounted = _useState1[1];
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    useOnClickOutside(ref, trigger !== "hover" ? function() {
        return handleClose();
    } : function() {});
    return /*#__PURE__*/ React.createElement(PopoverStyled, null, /*#__PURE__*/ React.createElement(PopoverTriggerStyled, {
        onClickCapture: function() {
            handleClick();
        },
        onMouseEnter: function() {
            handleMouseEnter();
        },
        onMouseLeave: function() {
            handleMouseLeave();
        }
    }, trigger), isMounted && /*#__PURE__*/ React.createElement(PopoverContentStyled, {
        ref: ref,
        animation: isOpen,
        css: _objectSpreadProps(_objectSpread({}, css), {
            left: align === "left" ? "0" : "auto",
            maxWidth: width || "25rem",
            minWidth: width || "15rem",
            right: align === "right" ? "0" : "auto"
        }),
        minimal: minimal
    }, children));
}
