import { breakpoints, styled } from "../../stitches.config";
import { Input } from "../Input";

export const PlacesStyled = styled(Input, {
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

      ".pac-icon": {
        display: "none",
      },
      ".pac-item-query": {
        color: "$text",
        fontWeight: "normal",
      },

      color: "$accent",
      padding: "$smallest $small",
    },
    backgroundColor: "$background",
    border: "0.1rem solid $border",
    borderRadius: "$small",
    boxShadow: "$small",

    color: "$text",
    marginTop: "$small",
    [breakpoints.phone]: {
      margin: "0 auto",
      marginTop: "$small",
      width: "85% !important",
    },
    width: "100%",
  },
  ".pac-logo:after": {
    display: "none",
  },
};
