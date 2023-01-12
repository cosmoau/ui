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
import { breakpoints, fadeIn, fadeOut, styled } from "../../stitches.config";
var _obj;
export var ToastStyled = styled("div", (_obj = {
    backgroundColor: "$background",
    border: "0.1rem solid $border",
    borderRadius: "$small",
    boxShadow: "$large",
    cursor: "pointer",
    width: "fit-content",
    fontSize: "$default",
    margin: "$medium auto 0 auto !important",
    maxWidth: "60%",
    padding: "$smallest $small",
    pointerEvents: "all",
    transition: "$default"
}, _defineProperty(_obj, breakpoints.phone, {
    maxWidth: "100%"
}), _defineProperty(_obj, "variants", {
    animation: {
        false: {
            animation: "".concat(fadeOut, " .2s linear"),
            animationFillMode: "forwards"
        },
        true: {
            animation: "".concat(fadeIn, " .2s linear"),
            animationFillMode: "forwards"
        }
    }
}), _obj));
export var ToastContainerStyled = styled("div", {
    bottom: "$medium",
    left: "0",
    pointerEvents: "none",
    position: "fixed",
    right: "0",
    textAlign: "center",
    userSelect: "none",
    zIndex: "$toast"
});
export default ToastStyled;
