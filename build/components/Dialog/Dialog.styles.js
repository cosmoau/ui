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
export var DialogStyled = styled("div", {
    display: "inline-block",
    position: "relative",
    verticalAlign: "middle"
});
export var DialogTriggerStyled = styled("div", {
    cursor: "pointer",
    display: "inline-flex",
    position: "relative",
    verticalAlign: "middle"
});
export var DialogOverlayStyled = styled("div", {
    backgroundColor: "rgba(116, 116, 121, 0.4)",
    bottom: 0,
    left: 0,
    minWidth: "100vw",
    overflowY: "scroll",
    position: "fixed",
    right: 0,
    top: 0,
    transition: "$default",
    variants: {
        animation: {
            false: {
                animation: "".concat(fadeOut, " .3s linear"),
                animationFillMode: "forwards"
            },
            true: {
                animation: "".concat(fadeIn, " .2s linear"),
                animationFillMode: "forwards"
            }
        }
    },
    width: "100%",
    zIndex: "$dialog"
});
export var DialogContentStyled = styled("div", _defineProperty({
    backgroundColor: "$background",
    borderRadius: "$medium",
    boxShadow: "$large",
    left: "50%",
    maxHeight: "85vh",
    maxWidth: "90%",
    overflowX: "hidden",
    overflowY: "auto",
    padding: "$large",
    position: "fixed",
    textAlign: "left",
    top: "50%",
    transform: "translate(-50%, -50%)",
    transition: "$default",
    variants: {
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
    },
    width: "70rem"
}, breakpoints.phone, {
    width: "90%"
}));
export var DialogExitStyled = styled("div", {
    "&:hover": {
        opacity: 1
    },
    cursor: "pointer",
    padding: "$smaller",
    position: "absolute",
    right: 0,
    top: 0,
    transition: "$default"
});
export default DialogStyled;
