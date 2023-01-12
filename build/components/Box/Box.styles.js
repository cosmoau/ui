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
import { fadeOut, styled } from "../../stitches.config";
export var paddingVariants = {
    padding: {
        default: {
            padding: "$medium"
        },
        none: {
            padding: "0"
        }
    }
};
export var BoxStyled = styled("article", {
    border: "0.1rem solid transparent",
    borderRadius: "$medium",
    display: "block",
    height: "100%",
    margin: 0,
    paddingBlock: 0,
    position: "relative",
    transition: "$default",
    variants: _objectSpread({
        animation: {
            true: {
                animation: "".concat(fadeOut, " .2s linear"),
                animationFillMode: "forwards"
            }
        },
        hover: {
            true: {
                "&:hover": {
                    boxShadow: "$medium"
                }
            }
        },
        loading: {
            true: {
                cursor: "wait"
            }
        },
        theme: {
            default: {
                backgroundColor: "$background",
                borderColor: "$border"
            },
            error: {
                backgroundColor: "$redOverlay",
                borderColor: "$redBorder",
                color: "$redText"
            },
            fill: {
                backgroundColor: "$default"
            },
            success: {
                backgroundColor: "$greenOverlay",
                borderColor: "$greenBorder",
                color: "$greenText"
            },
            transparent: {
                backgroundColor: "transparent",
                borderColor: "transparent"
            },
            warning: {
                backgroundColor: "$orangeOverlay",
                borderColor: "$orangeBorder",
                color: "$orangeText"
            }
        }
    }, paddingVariants),
    width: "100%"
});
export var BoxImageChildrenStyled = styled("div", {
    variants: _objectSpread({}, paddingVariants)
});
export var BoxExitStyled = styled("div", {
    "&:hover": {
        opacity: 1
    },
    cursor: "pointer",
    opacity: 0.7,
    padding: "1rem",
    position: "absolute",
    right: 0,
    top: 0,
    transition: "$default"
});
export default BoxStyled;
