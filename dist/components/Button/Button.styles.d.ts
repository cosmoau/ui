export default function ButtonStyles(): {
    Wrapper: import("@stitches/react/types/styled-component").StyledComponent<"button", import("@stitches/react/types/styled-component").StyledComponentProps<[{
        textAlign: string;
        alignContent: string;
        verticalAlign: string;
        position: string;
        transition: string;
        fontWeight: string;
        padding: string;
        borderRadius: string;
        ft: string;
        variants: {
            theme: {
                default: {
                    backgroundColor: string;
                    color: string;
                    border: string;
                };
                red: {
                    backgroundColor: string;
                    color: string;
                    border: string;
                    '&:hover': {
                        backgroundColor: string;
                    };
                };
                yellow: {
                    backgroundColor: string;
                    color: string;
                    border: string;
                    '&:hover': {
                        backgroundColor: string;
                    };
                };
                green: {
                    backgroundColor: string;
                    color: string;
                    border: string;
                    '&:hover': {
                        backgroundColor: string;
                    };
                };
                blue: {
                    backgroundColor: string;
                    color: string;
                    border: string;
                    '&:hover': {
                        backgroundColor: string;
                    };
                };
                navy: {
                    backgroundColor: string;
                    color: string;
                    border: string;
                    '&:hover': {
                        backgroundColor: string;
                    };
                };
                purple: {
                    backgroundColor: string;
                    color: string;
                    border: string;
                    '&:hover': {
                        backgroundColor: string;
                    };
                };
                pink: {
                    backgroundColor: string;
                    color: string;
                    border: string;
                    '&:hover': {
                        backgroundColor: string;
                    };
                };
                transparent: {
                    backgroundColor: string;
                    color: string;
                    border: string;
                    '&:hover': {
                        backgroundColor: string;
                    };
                };
                dark: {
                    backgroundColor: string;
                    color: string;
                    border: string;
                    '&:hover': {
                        backgroundColor: string;
                    };
                };
            };
            inline: {
                false: {
                    display: string;
                };
                true: {
                    display: string;
                };
            };
            inlineSpacer: {
                default: {
                    marginRight: string;
                };
                1: {
                    marginRight: string;
                };
                2: {
                    marginRight: string;
                };
                3: {
                    marginRight: string;
                };
                4: {
                    marginRight: string;
                };
                5: {
                    marginRight: string;
                };
                6: {
                    marginRight: string;
                };
            };
            shadow: {
                false: {
                    boxShadow: string;
                };
                true: {
                    boxShadow: string;
                };
            };
        };
        boxShadow: string;
        '&:disabled': {
            opacity: number;
            cursor: string;
        };
    }]>, {}, import("@stitches/react/types/css-util").CSS<{}, {
        colors: {
            baseBody: string;
            base100: string;
            base200: string;
            base300: string;
            base400: string;
            baseContrast100: string;
            baseContrast200: string;
            baseContrast300: string;
            baseContrast400: string;
            red100: string;
            red200: string;
            red300: string;
            red400: string;
            yellow100: string;
            yellow200: string;
            yellow300: string;
            yellow400: string;
            green100: string;
            green200: string;
            green300: string;
            green400: string;
            blue100: string;
            blue200: string;
            blue300: string;
            blue400: string;
            navy100: string;
            navy200: string;
            navy300: string;
            navy400: string;
            purple100: string;
            purple200: string;
            purple300: string;
            purple400: string;
            pink100: string;
            pink200: string;
            pink300: string;
            pink400: string;
            border100: string;
            border200: string;
            border300: string;
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
            9: string;
            10: string;
            11: string;
            12: string;
        };
        fonts: {
            body: string;
        };
        fontSizes: {
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
            t1: string;
            t2: string;
            t3: string;
        };
        lineHeights: {
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
            t1: string;
            t2: string;
            t3: string;
        };
        sizes: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
        radii: {
            1: string;
            2: string;
            3: string;
        };
        shadows: {
            1: string;
            2: string;
            3: string;
        };
        zIndices: {
            dropdown: number;
            tooltip: number;
            alert: number;
            cookies: number;
        };
        transitions: {
            1: string;
        };
        media: {
            phone: string;
            tabletX: string;
            tablet: string;
            laptopX: string;
            laptop: string;
            desktopX: string;
            desktop: string;
            wide: string;
            dark: string;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        pt: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            paddingTop: string;
        };
        pb: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            paddingBottom: string;
        };
        pl: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            paddingLeft: string;
        };
        pr: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            paddingRight: string;
        };
        ptb: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            paddingTop: string;
            paddingBottom: string;
        };
        plr: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            paddingLeft: string;
            paddingRight: string;
        };
        mt: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            marginTop: string;
        };
        mb: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            marginBottom: string;
        };
        ml: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            marginLeft: string;
        };
        mr: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            marginRight: string;
        };
        mtb: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            marginTop: string;
            marginBottom: string;
        };
        mlr: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            marginLeft: string;
            marginRight: string;
        };
        bt: (value: {
            readonly [$$PropertyValue]: "color";
        }) => {
            borderTop: string;
        };
        bb: (value: {
            readonly [$$PropertyValue]: "color";
        }) => {
            borderBottom: string;
        };
        bl: (value: {
            readonly [$$PropertyValue]: "color";
        }) => {
            borderLeft: string;
        };
        br: (value: {
            readonly [$$PropertyValue]: "color";
        }) => {
            borderRight: string;
        };
        ft: (value: {
            readonly [$$ScaleValue]: "fontSizes" | "lineHeights";
        }) => {
            [x: string]: string | {
                fontSize: string;
            };
            fontSize: string;
            lineHeight: string;
        };
        hidden: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => {
            [x: string]: string | {
                display: string;
            };
            display: string;
        };
        visible: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => {
            [x: string]: string | {
                display: string;
            };
            display: string;
        };
        visibleInline: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => {
            [x: string]: string | {
                display: string;
            };
            display: string;
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
        laptop: (value: unknown) => {
            [x: string]: unknown;
        };
        laptopX: (value: unknown) => {
            [x: string]: unknown;
        };
        desktop: (value: unknown) => {
            [x: string]: unknown;
        };
        desktopX: (value: unknown) => {
            [x: string]: unknown;
        };
        wide: (value: unknown) => {
            [x: string]: unknown;
        };
    }>>;
    IconWrapper: import("@stitches/react/types/styled-component").StyledComponent<"div", import("@stitches/react/types/styled-component").StyledComponentProps<[{
        display: string;
        verticalAlign: string;
        variants: {
            iconPosition: {
                left: {
                    marginRight: string;
                };
                right: {
                    marginLeft: string;
                };
            };
        };
        svg: {
            verticalAlign: string;
            width: string;
            height: string;
        };
    }]>, {}, import("@stitches/react/types/css-util").CSS<{}, {
        colors: {
            baseBody: string;
            base100: string;
            base200: string;
            base300: string;
            base400: string;
            baseContrast100: string;
            baseContrast200: string;
            baseContrast300: string;
            baseContrast400: string;
            red100: string;
            red200: string;
            red300: string;
            red400: string;
            yellow100: string;
            yellow200: string;
            yellow300: string;
            yellow400: string;
            green100: string;
            green200: string;
            green300: string;
            green400: string;
            blue100: string;
            blue200: string;
            blue300: string;
            blue400: string;
            navy100: string;
            navy200: string;
            navy300: string;
            navy400: string;
            purple100: string;
            purple200: string;
            purple300: string;
            purple400: string;
            pink100: string;
            pink200: string;
            pink300: string;
            pink400: string;
            border100: string;
            border200: string;
            border300: string;
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
            9: string;
            10: string;
            11: string;
            12: string;
        };
        fonts: {
            body: string;
        };
        fontSizes: {
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
            t1: string;
            t2: string;
            t3: string;
        };
        lineHeights: {
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
            t1: string;
            t2: string;
            t3: string;
        };
        sizes: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
        radii: {
            1: string;
            2: string;
            3: string;
        };
        shadows: {
            1: string;
            2: string;
            3: string;
        };
        zIndices: {
            dropdown: number;
            tooltip: number;
            alert: number;
            cookies: number;
        };
        transitions: {
            1: string;
        };
        media: {
            phone: string;
            tabletX: string;
            tablet: string;
            laptopX: string;
            laptop: string;
            desktopX: string;
            desktop: string;
            wide: string;
            dark: string;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        pt: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            paddingTop: string;
        };
        pb: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            paddingBottom: string;
        };
        pl: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            paddingLeft: string;
        };
        pr: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            paddingRight: string;
        };
        ptb: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            paddingTop: string;
            paddingBottom: string;
        };
        plr: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            paddingLeft: string;
            paddingRight: string;
        };
        mt: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            marginTop: string;
        };
        mb: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            marginBottom: string;
        };
        ml: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            marginLeft: string;
        };
        mr: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            marginRight: string;
        };
        mtb: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            marginTop: string;
            marginBottom: string;
        };
        mlr: (value: {
            readonly [$$ScaleValue]: "space";
        }) => {
            marginLeft: string;
            marginRight: string;
        };
        bt: (value: {
            readonly [$$PropertyValue]: "color";
        }) => {
            borderTop: string;
        };
        bb: (value: {
            readonly [$$PropertyValue]: "color";
        }) => {
            borderBottom: string;
        };
        bl: (value: {
            readonly [$$PropertyValue]: "color";
        }) => {
            borderLeft: string;
        };
        br: (value: {
            readonly [$$PropertyValue]: "color";
        }) => {
            borderRight: string;
        };
        ft: (value: {
            readonly [$$ScaleValue]: "fontSizes" | "lineHeights";
        }) => {
            [x: string]: string | {
                fontSize: string;
            };
            fontSize: string;
            lineHeight: string;
        };
        hidden: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => {
            [x: string]: string | {
                display: string;
            };
            display: string;
        };
        visible: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => {
            [x: string]: string | {
                display: string;
            };
            display: string;
        };
        visibleInline: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => {
            [x: string]: string | {
                display: string;
            };
            display: string;
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
        laptop: (value: unknown) => {
            [x: string]: unknown;
        };
        laptopX: (value: unknown) => {
            [x: string]: unknown;
        };
        desktop: (value: unknown) => {
            [x: string]: unknown;
        };
        desktopX: (value: unknown) => {
            [x: string]: unknown;
        };
        wide: (value: unknown) => {
            [x: string]: unknown;
        };
    }>>;
};
//# sourceMappingURL=Button.styles.d.ts.map