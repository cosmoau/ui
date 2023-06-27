import { styled } from "../../stitches.config";

export const PlacesStyled = styled("div", {
  ".pac-container": {
    display: "block",
  },

  width: "100%",
});

export const placesReset = {
  ".pac-container": {
    "*": {
      fontFamily: "$default",
      fontSize: "14px",
    },
    ".pac-item": {
      "&:hover": {
        backgroundColor: "$default",
      },
      ".pac-item-query": {
        color: "$text",
        fontWeight: "normal",
      },

      border: 0,

      color: "$accent",
      padding: "$smallest $small",
    },

    ".pac-matched": {
      verticalAlign: "baseline",
    },
    backgroundColor: "$background",
    border: "0.1rem solid $border",
    borderRadius: "$small",
    boxShadow: "$small",
    color: "$text",

    display: "none",

    left: "0 !important",
    marginTop: "$small",
    phone: {
      margin: "0 auto",
      marginTop: "$small",
    },
    position: "absolute !important",
    top: "100% !important",
    width: "100% !important",
    zIndex: 9999999,
  },
  ".pac-logo:after": {
    display: "none",
  },
};
