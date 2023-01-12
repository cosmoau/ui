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
import { Check, ClipboardText, Warning } from "phosphor-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button, Badge, Loading } from "../../index";
import { FieldStyled, FieldAreaStyled, FieldFunctionStyled } from "./Field.styles";
export function Field(props) {
    var handleChange = function handleChange(e) {
        if (onChange) {
            onChange(e);
        }
    };
    var handleCopy = function handleCopy() {
        if (copy) {
            navigator.clipboard.writeText(value);
            setIsCopied(true);
            toast("Copied to clipboard");
            setTimeout(function() {
                setIsCopied(false);
            }, 3000);
        }
    };
    var copy = props.copy, disabled = props.disabled, placeholder = props.placeholder, width = props.width, css = props.css, value = props.value, onChange = props.onChange, success = props.success, successMessage = props.successMessage, warning = props.warning, warningMessage = props.warningMessage, error = props.error, errorMessage = props.errorMessage, reveal = props.reveal, loading = props.loading, submit = props.submit, submitFunction = props.submitFunction, submitValid = props.submitValid, rows = props.rows, cols = props.cols;
    var _useState = _slicedToArray(useState(false), 2), isCopied = _useState[0], setIsCopied = _useState[1];
    return /*#__PURE__*/ React.createElement(FieldStyled, {
        css: {
            maxWidth: width || "80%",
            width: width || "80%"
        },
        disabled: disabled,
        state: success ? "success" : warning ? "warning" : error ? "error" : "default"
    }, (error || success || warning || loading || submit || copy || reveal) && /*#__PURE__*/ React.createElement(FieldFunctionStyled, null, error && /*#__PURE__*/ React.createElement(Badge, {
        icon: /*#__PURE__*/ React.createElement(Warning, {
            weight: "duotone"
        }),
        theme: "red"
    }, errorMessage || "Error"), success && /*#__PURE__*/ React.createElement(Badge, {
        icon: /*#__PURE__*/ React.createElement(Check, {
            weight: "duotone"
        }),
        theme: "green"
    }, successMessage || "Success"), warning && /*#__PURE__*/ React.createElement(Badge, {
        icon: /*#__PURE__*/ React.createElement(Warning, {
            weight: "duotone"
        }),
        theme: "orange"
    }, warningMessage || "Warning"), loading && /*#__PURE__*/ React.createElement(Badge, null, /*#__PURE__*/ React.createElement(Loading, null)), copy && /*#__PURE__*/ React.createElement(Button, {
        icon: isCopied ? /*#__PURE__*/ React.createElement(ClipboardText, {
            opacity: 0.5,
            weight: "duotone"
        }) : /*#__PURE__*/ React.createElement(ClipboardText, {
            weight: "duotone"
        }),
        onClick: function() {
            handleCopy();
        }
    }, "Copy"), submit && /*#__PURE__*/ React.createElement(Button, {
        disabled: !submitValid,
        onClick: function() {
            if (submitFunction && submitValid) {
                submitFunction(value || "");
            }
        }
    }, submit)), /*#__PURE__*/ React.createElement(FieldAreaStyled, {
        cols: cols,
        css: css,
        disabled: disabled,
        placeholder: placeholder,
        rows: rows,
        value: value,
        onChange: function(e) {
            handleChange(e);
        }
    }));
}
