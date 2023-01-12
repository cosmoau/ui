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
export var ViewStyled = styled("section", {
    boxSizing: "border-box",
    paddingLeft: "$small",
    paddingRight: "$small",
    position: "relative",
    width: "100%"
});
var _obj;
export var ViewContainerStyled = styled("div", {
    position: "relative",
    variants: {
        container: {
            false: {
                minWidth: "100%"
            },
            true: (_obj = {
                margin: "auto"
            }, _defineProperty(_obj, breakpoints.phone, {
                width: "96%"
            }), _defineProperty(_obj, breakpoints.tabletX, {
                width: "96%"
            }), _defineProperty(_obj, breakpoints.laptopX, {
                maxWidth: "1440px",
                width: "94%"
            }), _defineProperty(_obj, breakpoints.desktopX, {
                maxWidth: "1660px",
                width: "92%"
            }), _defineProperty(_obj, breakpoints.wide, {
                maxWidth: "1950px",
                width: "90%"
            }), _obj)
        }
    }
});
export default ViewStyled;
