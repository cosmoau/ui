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
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
import { styled } from "../../stitches.config";
import { TextSizes } from "../Text/Text.styles";
export var ButtonStyled = styled("button", {
    "&::-moz-focus-inner": {
        border: 0,
        outline: 0,
        outlineOffset: 0,
        padding: 0
    },
    "&:active": {
        outline: 0
    },
    "&:disabled": {
        cursor: "not-allowed",
        opacity: 0.7
    },
    "&:focus": {
        outline: 0
    },
    "&:hover": {
        backgroundColor: "$defaultHover",
        borderColor: "$border",
        boxShadow: "$medium",
        color: "$text"
    },
    alignContent: "center",
    alignItems: "center",
    appearance: "none",
    border: "0.1rem solid $border",
    borderRadius: "$small",
    boxShadow: "$small",
    color: "$text",
    cursor: "pointer",
    display: "inline",
    fontFamily: "$default",
    fontSize: "$default",
    justifyContent: "center",
    margin: 0,
    "marginBottom:": "0 !important",
    outline: "none",
    padding: "$smallest $small",
    svg: {
        marginTop: "-0.3rem"
    },
    textOverflow: "ellipsis",
    transition: "$default",
    variants: {
        block: {
            true: {
                display: "block",
                width: "100%"
            }
        },
        small: {
            true: _objectSpreadProps(_objectSpread({}, TextSizes.small), {
                display: "inline",
                marginBottom: "0 !important",
                svg: {
                    height: "1.6rem",
                    marginTop: "-0.25rem",
                    width: "1.6rem"
                }
            })
        },
        theme: {
            default: {
                backgroundColor: "transparent",
                borderColor: "$border"
            },
            fill: {
                backgroundColor: "$default"
            },
            minimal: {
                backgroundColor: "transparent",
                borderColor: "transparent",
                boxShadow: "none"
            },
            solid: {
                backgroundColor: "$text",
                color: "$background"
            }
        }
    },
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    width: "auto"
});
export var ButtonIconStyled = styled("span", {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    display: "inline-flex",
    justifyContent: "center",
    variants: {
        align: {
            left: {
                marginRight: "$smaller"
            },
            right: {
                marginLeft: "$smaller"
            }
        }
    },
    verticalAlign: "middle"
});
export default ButtonStyled;
