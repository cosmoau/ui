import { styled } from "@stitches/react";

export const ExpanderStyled = styled("div", {
  borderRadius: "$small",
  overflow: "hidden",
  position: "relative",
  transition: "all 0.5s ease",

  variants: {
    expanded: {
      false: {
        "&::after": {
          background: "linear-gradient(to bottom, rgba(14,22,35,0) 0%,rgba(14,22,35,0.2) 100%)",
          bottom: 0,
          content: "",
          darkModeSpec: {
            background:
              "linear-gradient(to bottom, rgba(14,22,35,0) 0%, rgba(14,22,35,0.5) 40%, rgba(14,22,35,0.8) 100%)",
          },
          height: "50%",
          left: 0,
          position: "absolute",
          right: 0,
        },
      },
      true: {
        maxHeight: "none",
      },
    },
  },
});

export const ExpanderTrigger = styled("div", {
  display: "flex",
  justifyContent: "center",

  position: "absolute",

  variants: {
    expanded: {
      false: {
        bottom: "$small",
        left: 0,
        right: 0,
      },
      true: {
        right: "$small",
        top: "$small",
      },
    },
  },
  zIndex: 1,
});

export default ExpanderStyled;
