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
export var StackRowStyled = styled("div", {
    "*": {
        boxSizing: "border-box"
    },
    display: "flex",
    flexDirection: "row",
    flexFlow: "row wrap",
    maxWidth: "100%",
    minWidth: "100%",
    width: "100%"
});
export var StackColumnStyled = styled("div", _defineProperty({
    flex: "1 1 auto",
    maxWidth: "100%",
    paddingLeft: "$small",
    paddingRight: "$small",
    width: "100%"
}, breakpoints.tablet, {
    paddingLeft: "$smaller",
    paddingRight: "$smaller"
}));
export var StackElementStyled = styled("div", {
    marginBlockEnd: 0,
    marginBlockStart: 0,
    variants: {
        flexduo: {
            true: {
                "*": {
                    alignSelf: "center",
                    marginBottom: "0",
                    marginTop: "0",
                    verticalAlign: "middle"
                },
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                verticalAlign: "middle"
            }
        }
    }
});
export default StackElementStyled;
