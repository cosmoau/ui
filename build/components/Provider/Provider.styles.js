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
import { breakpoints, globalCss, lightTheme, styled, theme } from "../../stitches.config";
var _obj;
export var ProviderStyled = styled("main", (_obj = {
    backgroundColor: "$background",
    color: "$text",
    minHeight: "100vh",
    position: "relative"
}, _defineProperty(_obj, ".".concat(theme), {
    backgroundColor: "$background",
    color: "$text"
}), _defineProperty(_obj, ".".concat(lightTheme), {
    backgroundColor: "$background",
    color: "$text"
}), _obj));
export var ProviderTriggerStyled = styled("div", {
    cursor: "pointer",
    display: "inline-flex",
    position: "relative",
    verticalAlign: "middle"
});
var baseFontURL = "https://cosmogroup.io/fonts";
var _obj1;
export var providerReset = globalCss({
    "*, *::before, *::after": {
        boxSizing: "border-box",
        marginBlock: 0,
        paddingBlock: 0
    },
    "@font-face": [
        {
            fontDisplay: "auto",
            fontFamily: "Untitled Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            src: "url(".concat(baseFontURL, "/untitled-sans-web-regular.woff2)")
        },
        {
            fontDisplay: "auto",
            fontFamily: "Untitled Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            src: "url(".concat(baseFontURL, "/untitled-sans-web-medium.woff2)")
        },
        {
            fontDisplay: "auto",
            fontFamily: "Tiempos Headline",
            fontStyle: "normal",
            fontWeight: "bold",
            src: "url(".concat(baseFontURL, "/tiempos-headline-regular.woff2)")
        }
    ],
    "a, a:visited, a:active, a:hover": {
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        color: "inherit",
        textDecoration: "none"
    },
    body: _defineProperty({
        fontFamily: "Untitled Sans, system-ui, -apple-system, sans-serif",
        fontSize: "1.6rem",
        fontWeight: "normal",
        lineHeight: 1.4,
        margin: 0,
        padding: 0
    }, breakpoints.special.retina, {
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased"
    }),
    html: (_obj1 = {
        fontSize: "62.5%"
    }, _defineProperty(_obj1, breakpoints.special.micro, {
        fontSize: "55%"
    }), _defineProperty(_obj1, breakpoints.phone, {
        fontSize: "57%"
    }), _defineProperty(_obj1, breakpoints.tabletX, {
        fontSize: "59%"
    }), _defineProperty(_obj1, breakpoints.laptopX, {
        fontSize: "61.5%"
    }), _obj1),
    img: {
        display: "block",
        maxWidth: "100%"
    },
    svg: {
        height: "1.8rem",
        verticalAlign: "middle",
        width: "1.8rem"
    }
});
export default ProviderStyled;
