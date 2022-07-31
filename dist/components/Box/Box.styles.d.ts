export declare const paddingVariants: {
    padding: {
        default: {
            padding: string;
        };
        none: {
            padding: number;
        };
    };
};
export declare const BoxStyled: import("@stitches/react/types/styled-component").StyledComponent<"div", import("@stitches/react/types/styled-component").StyledComponentProps<[{
    border: string;
    borderRadius: string;
    display: string;
    height: string;
    margin: number;
    paddingBlock: number;
    position: string;
    transition: string;
    variants: {
        padding: {
            default: {
                padding: string;
            };
            none: {
                padding: number;
            };
        };
        hover: {
            true: {
                '&:hover': {
                    boxShadow: string;
                };
            };
        };
        loading: {
            true: {
                cursor: string;
            };
        };
        theme: {
            border: {
                background: string;
                borderColor: string;
            };
            default: {
                background: string;
            };
            error: {
                background: string;
                color: string;
            };
            success: {
                background: string;
                color: string;
            };
            transparent: {
                background: string;
                borderColor: string;
            };
            warning: {
                background: string;
                color: string;
            };
        };
    };
    width: string;
}]>, {}, import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        accent: string;
        background: string;
        blueBorder: string;
        blueCTA: string;
        blueOverlay: string;
        blueText: string;
        border: string;
        borderHover: string;
        default: string;
        defaultHover: string;
        greenBorder: string;
        greenOverlay: string;
        greenText: string;
        orangeBorder: string;
        orangeOverlay: string;
        orangeText: string;
        pinkBorder: string;
        pinkOverlay: string;
        pinkText: string;
        purpleBorder: string;
        purpleOverlay: string;
        purpleText: string;
        redBorder: string;
        redOverlay: string;
        redText: string;
        text: string;
    };
    fontSizes: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        p: string;
        small: string;
    };
    fontWeights: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        p: string;
        small: string;
    };
    fonts: {
        default: string;
    };
    lineHeights: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        p: string;
        small: string;
    };
    media: {
        desktop: string;
        desktopX: string;
        laptop: string;
        laptopX: string;
        phone: string;
        tablet: string;
        tabletX: string;
        wide: string;
    };
    radii: {
        1: string;
        2: string;
        3: string;
    };
    shadows: {
        1: number;
        2: number;
        3: number;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
    };
    transitions: {
        default: string;
    };
    zIndices: {
        dialog: number;
        dropdown: number;
        popover: number;
        toast: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    desktop: (value: unknown) => {
        [x: string]: unknown;
    };
    desktopX: (value: unknown) => {
        [x: string]: unknown;
    };
    hidden: (value: "desktop" | "desktopX" | "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "wide") => {
        [x: string]: {
            display: string;
        };
    };
    hiddenInline: (value: "desktop" | "desktopX" | "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "wide") => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    laptop: (value: unknown) => {
        [x: string]: unknown;
    };
    laptopX: (value: unknown) => {
        [x: string]: unknown;
    };
    phone: (value: unknown) => {
        [x: string]: unknown;
    };
    tablet: (value: unknown) => {
        [x: string]: unknown;
    };
    tabletX: (value: unknown) => {
        [x: string]: unknown;
    };
    visible: (value: "desktop" | "desktopX" | "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "wide") => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    visibleInline: (value: "desktop" | "desktopX" | "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "wide") => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    wide: (value: unknown) => {
        [x: string]: unknown;
    };
}>>;
export declare const BoxImageChildrenStyled: import("@stitches/react/types/styled-component").StyledComponent<"div", import("@stitches/react/types/styled-component").StyledComponentProps<[{
    variants: {
        padding: {
            default: {
                padding: string;
            };
            none: {
                padding: number;
            };
        };
    };
}]>, {}, import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        accent: string;
        background: string;
        blueBorder: string;
        blueCTA: string;
        blueOverlay: string;
        blueText: string;
        border: string;
        borderHover: string;
        default: string;
        defaultHover: string;
        greenBorder: string;
        greenOverlay: string;
        greenText: string;
        orangeBorder: string;
        orangeOverlay: string;
        orangeText: string;
        pinkBorder: string;
        pinkOverlay: string;
        pinkText: string;
        purpleBorder: string;
        purpleOverlay: string;
        purpleText: string;
        redBorder: string;
        redOverlay: string;
        redText: string;
        text: string;
    };
    fontSizes: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        p: string;
        small: string;
    };
    fontWeights: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        p: string;
        small: string;
    };
    fonts: {
        default: string;
    };
    lineHeights: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        p: string;
        small: string;
    };
    media: {
        desktop: string;
        desktopX: string;
        laptop: string;
        laptopX: string;
        phone: string;
        tablet: string;
        tabletX: string;
        wide: string;
    };
    radii: {
        1: string;
        2: string;
        3: string;
    };
    shadows: {
        1: number;
        2: number;
        3: number;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
    };
    transitions: {
        default: string;
    };
    zIndices: {
        dialog: number;
        dropdown: number;
        popover: number;
        toast: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    desktop: (value: unknown) => {
        [x: string]: unknown;
    };
    desktopX: (value: unknown) => {
        [x: string]: unknown;
    };
    hidden: (value: "desktop" | "desktopX" | "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "wide") => {
        [x: string]: {
            display: string;
        };
    };
    hiddenInline: (value: "desktop" | "desktopX" | "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "wide") => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    laptop: (value: unknown) => {
        [x: string]: unknown;
    };
    laptopX: (value: unknown) => {
        [x: string]: unknown;
    };
    phone: (value: unknown) => {
        [x: string]: unknown;
    };
    tablet: (value: unknown) => {
        [x: string]: unknown;
    };
    tabletX: (value: unknown) => {
        [x: string]: unknown;
    };
    visible: (value: "desktop" | "desktopX" | "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "wide") => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    visibleInline: (value: "desktop" | "desktopX" | "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "wide") => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    wide: (value: unknown) => {
        [x: string]: unknown;
    };
}>>;
export default BoxStyled;
//# sourceMappingURL=Box.styles.d.ts.map