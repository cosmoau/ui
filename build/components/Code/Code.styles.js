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
import { breakpoints, styled } from "../../stitches.config";
export var CodeStyled = styled("div", _defineProperty({
    border: "0.1rem solid $border !important",
    borderRadius: "$small",
    padding: "$smaller $small",
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
}, breakpoints.tablet, {
    display: "block"
}));
export var CodeBlockStyled = styled("code", _defineProperty({
    flex: "1 1 auto"
}, breakpoints.tablet, {
    display: "block",
    flex: "0 0 auto",
    minWidth: "100%"
}));
export var CodeFunctionStyled = styled("div", _defineProperty({
    minWidth: "10rem",
    textAlign: "right"
}, breakpoints.tablet, {
    marginTop: "$small",
    display: "block",
    textAlign: "left",
    minWidth: "100%",
    button: {
        width: "100%",
        display: "block"
    }
}));
export default CodeStyled;
