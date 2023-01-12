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
import { Check, ClipboardText, Warning, Eye, EyeClosed } from "phosphor-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useEventListener } from "usehooks-ts";
import { Button, Badge, Loading } from "../../index";
import { InputAreaStyled, InputCallbackStyled, InputFunctionStyled, InputStyled, InputCoreStyled, InputIconStyled } from "./Input.styles";
export function Input(props) {
    var handleChange = function handleChange(e) {
        setInputValue(e.target.value);
        if (onChange) {
            onChange(e);
        }
    };
    var handleCopy = function handleCopy() {
        if (copy) {
            navigator.clipboard.writeText(inputValue.toString());
            setIsCopied(true);
            toast("Copied to clipboard");
            setTimeout(function() {
                setIsCopied(false);
            }, 3000);
        }
    };
    var handleReveal = function handleReveal() {
        setIsRevealed(!isRevealed);
    };
    var copy = props.copy, icon = props.icon, mustRef = props.mustRef, type = props.type, disabled = props.disabled, placeholder = props.placeholder, width = props.width, css = props.css, value = props.value, onChange = props.onChange, success = props.success, successMessage = props.successMessage, warning = props.warning, warningMessage = props.warningMessage, error = props.error, errorMessage = props.errorMessage, reveal = props.reveal, loading = props.loading, submit = props.submit, submitFunction = props.submitFunction, submitValid = props.submitValid, listen = props.listen;
    var _useState = _slicedToArray(useState(value || ""), 2), inputValue = _useState[0], setInputValue = _useState[1];
    var _useState1 = _slicedToArray(useState(false), 2), isCopied = _useState1[0], setIsCopied = _useState1[1];
    var _useState2 = _slicedToArray(useState(false), 2), isRevealed = _useState2[0], setIsRevealed = _useState2[1];
    // event listener
    useEventListener("keydown", function(e) {
        if (listen && e.key === "Enter" && submitFunction && submitValid) {
            submitFunction(inputValue || "");
        }
    });
    return /*#__PURE__*/ React.createElement(InputStyled, {
        css: {
            maxWidth: width || "100%",
            width: width || "100%"
        }
    }, /*#__PURE__*/ React.createElement(InputCoreStyled, {
        disabled: disabled,
        state: success ? "success" : warning ? "warning" : error ? "error" : "default"
    }, icon && /*#__PURE__*/ React.createElement(InputIconStyled, null, icon), /*#__PURE__*/ React.createElement(InputAreaStyled, {
        ref: mustRef || undefined,
        css: css,
        disabled: disabled,
        placeholder: placeholder,
        type: isRevealed ? "text" : type || "text",
        value: inputValue,
        onChange: function(e) {
            handleChange(e);
        }
    }), (loading || submit || copy || reveal) && /*#__PURE__*/ React.createElement(InputFunctionStyled, null, loading && /*#__PURE__*/ React.createElement(Loading, null), copy && /*#__PURE__*/ React.createElement(Button, {
        css: {
            marginLeft: "$smaller"
        },
        icon: isCopied ? /*#__PURE__*/ React.createElement(ClipboardText, {
            opacity: 0.5,
            weight: "duotone"
        }) : /*#__PURE__*/ React.createElement(ClipboardText, {
            weight: "duotone"
        }),
        small: true,
        onClick: function() {
            handleCopy();
        }
    }, "Copy"), reveal && /*#__PURE__*/ React.createElement(Button, {
        css: {
            marginLeft: "$smaller"
        },
        icon: !isRevealed ? /*#__PURE__*/ React.createElement(Eye, {
            weight: "duotone"
        }) : /*#__PURE__*/ React.createElement(EyeClosed, {
            weight: "duotone"
        }),
        small: true,
        onClick: function() {
            handleReveal();
        }
    }, isRevealed ? "Hide" : "Show"), submit && /*#__PURE__*/ React.createElement(Button, {
        css: {
            marginLeft: "$smaller"
        },
        disabled: !submitValid,
        small: true,
        onClick: function() {
            if (submitFunction && submitValid) {
                submitFunction(inputValue || "");
            }
        }
    }, submit))), /*#__PURE__*/ React.createElement(InputCallbackStyled, null, error && !success && !warning && /*#__PURE__*/ React.createElement(Badge, {
        css: {
            backgroundColor: "transparent",
            padding: 0
        },
        icon: /*#__PURE__*/ React.createElement(Warning, {
            weight: "duotone"
        }),
        theme: "red"
    }, errorMessage || "Error"), success && !error && !warning && /*#__PURE__*/ React.createElement(Badge, {
        css: {
            backgroundColor: "transparent",
            padding: 0
        },
        icon: /*#__PURE__*/ React.createElement(Check, {
            weight: "duotone"
        }),
        theme: "green"
    }, successMessage || "Success"), warning && !success && !error && /*#__PURE__*/ React.createElement(Badge, {
        css: {
            backgroundColor: "transparent",
            padding: 0
        },
        icon: /*#__PURE__*/ React.createElement(Warning, {
            weight: "duotone"
        }),
        theme: "orange"
    }, warningMessage || "Invalid")));
}
