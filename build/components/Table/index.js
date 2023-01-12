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
import { FunnelSimple, SortAscending, SortDescending } from "phosphor-react";
import { useState } from "react";
import { Button, Text } from "../../index";
import { TableStyled } from "./Table.styles";
export function Table(props) {
    var handleSort = function handleSort(index) {
        if (sortBy === index) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortBy(index);
            setSortDirection("asc");
        }
    };
    var parseSort = function parseSort(a, b) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (a[sortBy] < b[sortBy]) {
            return sortDirection === "asc" ? -1 : 1;
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (a[sortBy] > b[sortBy]) {
            return sortDirection === "asc" ? 1 : -1;
        }
        return 0;
    };
    var headChildren = props.headChildren, bodyChildren = props.bodyChildren, css = props.css, sort = props.sort, sortDisabled = props.sortDisabled, rest = _objectWithoutProperties(props, [
        "headChildren",
        "bodyChildren",
        "css",
        "sort",
        "sortDisabled"
    ]);
    var _useState = _slicedToArray(useState(0), 2), sortBy = _useState[0], setSortBy = _useState[1];
    var _useState1 = _slicedToArray(useState("asc"), 2), sortDirection = _useState1[0], setSortDirection = _useState1[1];
    var sortedBodyChildren = bodyChildren ? sort ? bodyChildren.sort(parseSort) : bodyChildren : [];
    return /*#__PURE__*/ React.createElement(TableStyled, {
        css: css
    }, /*#__PURE__*/ React.createElement("table", _extends({}, rest), headChildren && /*#__PURE__*/ React.createElement("thead", null, /*#__PURE__*/ React.createElement("tr", null, headChildren.map(function(child, index) {
        return !sort || sortDisabled === index || Array.isArray(sortDisabled) && sortDisabled.includes(index) ? /*#__PURE__*/ React.createElement("th", {
            key: index
        }, child) : /*#__PURE__*/ React.createElement("th", {
            key: index,
            onClick: function() {
                return handleSort(index);
            }
        }, /*#__PURE__*/ React.createElement(Button, {
            block: true,
            css: {
                svg: {
                    opacity: sortBy === index ? 1 : 0.33
                }
            },
            icon: sortBy === index ? sortDirection === "asc" ? /*#__PURE__*/ React.createElement(SortAscending, null) : /*#__PURE__*/ React.createElement(SortDescending, null) : /*#__PURE__*/ React.createElement(FunnelSimple, null),
            iconPosition: "right",
            theme: sortBy === index ? "default" : "minimal"
        }, child));
    }))), /*#__PURE__*/ React.createElement("tbody", null, bodyChildren ? sortedBodyChildren.map(function(row, index) {
        return /*#__PURE__*/ React.createElement("tr", {
            key: index
        }, row.map(function(cell, index) {
            return /*#__PURE__*/ React.createElement("td", {
                key: index
            }, cell);
        }));
    }) : /*#__PURE__*/ React.createElement("tr", null, /*#__PURE__*/ React.createElement("td", {
        colSpan: (headChildren === null || headChildren === void 0 ? void 0 : headChildren.length) || 1
    }, /*#__PURE__*/ React.createElement(Text, {
        accent: true,
        css: {
            textAlign: "center"
        }
    }, "No results found."))))));
}
