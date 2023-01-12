import { fadeIn, fadeOut, styled } from "../../stitches.config";
export var PopoverStyled = styled("div", {
    display: "inline-block",
    position: "relative",
    verticalAlign: "middle"
});
export var PopoverTriggerStyled = styled("div", {
    cursor: "pointer",
    display: "inline-flex",
    position: "relative",
    verticalAlign: "middle"
});
export var PopoverContentStyled = styled("div", {
    backgroundColor: "$background",
    border: "0.1rem solid $border",
    borderRadius: "$small",
    boxShadow: "$large",
    lineBreak: "auto",
    marginTop: ".85%",
    overflowY: "auto",
    padding: "$smaller $small",
    position: "absolute",
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
        },
        minimal: {
            true: {
                padding: 0
            }
        }
    },
    zIndex: "$popover"
});
export default PopoverStyled;
