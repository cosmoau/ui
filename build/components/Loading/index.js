import { LoadingOverlayStyled } from "./Loading.styles";
export function Loading(param) {
    var _param_width = param.width, width = _param_width === void 0 ? 18 : _param_width;
    return /*#__PURE__*/ React.createElement("svg", {
        height: width,
        stroke: "currentColor",
        viewBox: "0 0 38 38",
        width: width
    }, /*#__PURE__*/ React.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ React.createElement("g", {
        strokeWidth: "2",
        transform: "translate(1 1)"
    }, /*#__PURE__*/ React.createElement("circle", {
        cx: "18",
        cy: "18",
        r: "18",
        strokeOpacity: ".5"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M36 18c0-9.94-8.06-18-18-18"
    }, /*#__PURE__*/ React.createElement("animateTransform", {
        attributeName: "transform",
        dur: ".55s",
        from: "0 18 18",
        repeatCount: "indefinite",
        to: "360 18 18",
        type: "rotate"
    })))));
}
export function LoadingOverlay(param) {
    var _param_vertical = param.vertical, vertical = _param_vertical === void 0 ? "bottom" : _param_vertical, _param_horizontal = param.horizontal, horizontal = _param_horizontal === void 0 ? "right" : _param_horizontal, width = param.width;
    return /*#__PURE__*/ React.createElement(LoadingOverlayStyled, {
        horizontal: horizontal,
        vertical: vertical
    }, /*#__PURE__*/ React.createElement(Loading, {
        width: width
    }));
}
