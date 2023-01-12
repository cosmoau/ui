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
export var InputStyled = styled("div", {
    position: "relative"
});
export var InputCoreStyled = styled("div", {
    "&:focus-within": {
        boxShadow: "$small"
    },
    "&:hover": {
        boxShadow: "$medium"
    },
    "*": {
        verticalAlign: "middle"
    },
    alignContent: "center",
    alignSelf: "center",
    borderRadius: "$small",
    boxShadow: "$small",
    display: "inline-flex",
    justifyContent: "center",
    padding: "$smaller $small",
    position: "relative",
    transition: "$default",
    variants: {
        disabled: {
            true: {
                cursor: "not-allowed",
                opacity: "0.7"
            }
        },
        state: {
            default: {
                border: "0.1rem solid $border"
            },
            error: {
                border: "0.1rem solid $redOverlay"
            },
            success: {
                border: "0.1rem solid $greenOverlay"
            },
            warning: {
                border: "0.1rem solid $orangeOverlay"
            }
        }
    },
    width: "100%"
});
export var InputAreaStyled = styled("input", _defineProperty({
    "&::placeholder": {
        color: "$text",
        fontSize: "$default",
        opacity: "0.5"
    },
    "&:focus": {
        outline: "none"
    },
    appearance: "none",
    backgroundColor: "transparent",
    border: "none",
    color: "$text",
    fontFamily: "$default",
    fontSize: "$default",
    letterSpacing: "0",
    margin: "0",
    minHeight: "2.4rem",
    outline: "none",
    padding: "0",
    textAlign: "left",
    transition: "$default",
    width: "100%"
}, breakpoints.phone, {
    fontSize: "$default !important"
}));
export var InputFunctionStyled = styled("div", {
    display: "inline-flex",
    height: "100%",
    marginLeft: "$small",
    position: "relative",
    verticalAlign: "middle",
    width: "auto"
});
export var InputIconStyled = styled("div", {
    display: "inline-block",
    height: "100%",
    marginRight: "$small",
    paddingRight: "$small"
});
export var InputCallbackStyled = styled("div", {
    display: "block",
    paddingTop: "$smaller"
});
export default InputStyled;
