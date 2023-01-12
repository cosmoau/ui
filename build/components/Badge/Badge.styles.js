import { styled, keyframes, fadeOut } from "../../stitches.config";
var pulse = keyframes({
    "0%": {
        opacity: 0.5,
        transform: "scale(0.95)"
    },
    "100%": {
        opacity: 0.5,
        transform: "scale(0.95)"
    },
    "50%": {
        opacity: 1,
        transform: "scale(1)"
    }
});
export var BadgeStyled = styled("div", {
    alignItems: "center",
    borderRadius: "$large",
    display: "inline-flex",
    justifyContent: "center",
    padding: "$smallest $small",
    fontSize: "$default",
    lineHeight: "$default",
    marginBottom: "0 !important",
    svg: {
        marginTop: "-0.25rem"
    },
    variants: {
        animation: {
            true: {
                animation: "".concat(fadeOut, " .2s linear"),
                animationFillMode: "forwards"
            }
        },
        theme: {
            blue: {
                backgroundColor: "$blueOverlay",
                color: "$blueText"
            },
            border: {
                border: "0.1rem solid $border",
                color: "$text"
            },
            default: {
                backgroundColor: "$default",
                color: "$text"
            },
            green: {
                backgroundColor: "$greenOverlay",
                color: "$greenText"
            },
            orange: {
                backgroundColor: "$orangeOverlay",
                color: "$orangeText"
            },
            pink: {
                backgroundColor: "$pinkOverlay",
                color: "$pinkText"
            },
            purple: {
                backgroundColor: "$purpleOverlay",
                color: "$purpleText"
            },
            red: {
                backgroundColor: "$redOverlay",
                color: "$redText"
            }
        }
    },
    verticalAlign: "middle"
});
export var BadgeIconStyled = styled("span", {
    display: "inline",
    variants: {
        align: {
            left: {
                marginRight: "$small"
            },
            right: {
                marginLeft: "$small"
            }
        }
    },
    verticalAlign: "middle"
});
export var BadgeLoadingStyled = styled("span", {
    display: "inline",
    svg: {
        marginTop: "-0.4rem"
    },
    verticalAlign: "middle"
});
export var BadgeDotStyled = styled("span", {
    display: "inline",
    paddingRight: "$smaller",
    svg: {
        height: "1rem",
        marginTop: "-0.2rem",
        width: "1rem"
    },
    variants: {
        dotColor: {
            blue: {
                color: "$blueText"
            },
            border: {
                color: "$border"
            },
            default: {
                color: "$text"
            },
            green: {
                color: "$greenText"
            },
            orange: {
                color: "$orangeText"
            },
            pink: {
                color: "$pinkText"
            },
            purple: {
                color: "$purpleText"
            },
            red: {
                color: "$redText"
            }
        },
        pulse: {
            true: {
                animation: "".concat(pulse, " 1.5s infinite")
            }
        }
    },
    verticalAlign: "middle"
});
export default BadgeStyled;
