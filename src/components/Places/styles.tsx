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
      fontSize: "$default",
    },
    ".pac-item": {
      "&:hover": {
        backgroundColor: "$default",
      },
      ".pac-item-query": {
        color: "$text",
        fontWeight: "normal",
      },

      backgroundColor: "$defaultSubtle",

      border: 0,
      borderRadius: "$small",
      color: "$accent",
      cursor: "pointer",
      fontSize: "16px",
      padding: "$smaller $small",
      transition: "$default",
    },
    ".pac-matched": {
      verticalAlign: "baseline",
    },

    backgroundColor: "$defaultSubtle",
    border: "0.1rem solid $border",
    borderRadius: "$small",
    boxShadow: "$small",
    color: "$text",
    display: "none",

    left: "0 !important",

    marginTop: "$small",

    position: "absolute !important",
    top: "100% !important",
    width: "100% !important",
    zIndex: 9999999,
    phone: {
      margin: "0 auto",
      marginTop: "$small",
    },
  },
  ".pac-logo:after": {
    display: "none",
  },
};
