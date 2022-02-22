export default function TypographyStyles(): {
    HeadingOneWrapper: import("@stitches/react/types/styled-component").StyledComponent<"h1", import("@stitches/react/types/styled-component").StyledComponentProps<[{
        variants: {
            top: {
                default: {
                    paddingTop: number;
                };
                1: {
                    paddingTop: string;
                };
                2: {
                    paddingTop: string;
                };
                3: {
                    paddingTop: string;
                };
                4: {
                    paddingTop: string;
                };
                5: {
                    paddingTop: string;
                };
                6: {
                    paddingTop: string;
                };
                7: {
                    paddingTop: string;
                };
                8: {
                    paddingTop: string;
                };
                9: {
                    paddingTop: string;
                };
                10: {
                    paddingTop: string;
                };
                11: {
                    paddingTop: string;
                };
                12: {
                    paddingTop: string;
                };
            };
            bottom: {
                default: {
                    paddingBottom: number;
                };
                1: {
                    paddingBottom: string;
                };
                2: {
                    paddingBottom: string;
                };
                3: {
                    paddingBottom: string;
                };
                4: {
                    paddingBottom: string;
                };
                5: {
                    paddingBottom: string;
                };
                6: {
                    paddingBottom: string;
                };
                7: {
                    paddingBottom: string;
                };
                8: {
                    paddingBottom: string;
                };
                9: {
                    paddingBottom: string;
                };
                10: {
                    paddingBottom: string;
                };
                11: {
                    paddingBottom: string;
                };
                12: {
                    paddingBottom: string;
                };
            };
            inline: {
                false: {
                    display: string;
                };
                true: {
                    display: string;
                    marginBottom: string;
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
        };
        '&:last-child': {
            marginBottom: string;
        };
        ft: string;
        fontWeight: string;
        marginBottom: string;
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
                marginBottom: number;
                fontSize?: undefined;
            } | {
                fontSize: string;
                marginBottom?: undefined;
            };
            fontSize: string;
            lineHeight: string;
            '&:last-child': {
                marginBottom: number;
            };
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
    HeadingTwoWrapper: import("@stitches/react/types/styled-component").StyledComponent<"h2", import("@stitches/react/types/styled-component").StyledComponentProps<[{
        variants: {
            top: {
                default: {
                    paddingTop: number;
                };
                1: {
                    paddingTop: string;
                };
                2: {
                    paddingTop: string;
                };
                3: {
                    paddingTop: string;
                };
                4: {
                    paddingTop: string;
                };
                5: {
                    paddingTop: string;
                };
                6: {
                    paddingTop: string;
                };
                7: {
                    paddingTop: string;
                };
                8: {
                    paddingTop: string;
                };
                9: {
                    paddingTop: string;
                };
                10: {
                    paddingTop: string;
                };
                11: {
                    paddingTop: string;
                };
                12: {
                    paddingTop: string;
                };
            };
            bottom: {
                default: {
                    paddingBottom: number;
                };
                1: {
                    paddingBottom: string;
                };
                2: {
                    paddingBottom: string;
                };
                3: {
                    paddingBottom: string;
                };
                4: {
                    paddingBottom: string;
                };
                5: {
                    paddingBottom: string;
                };
                6: {
                    paddingBottom: string;
                };
                7: {
                    paddingBottom: string;
                };
                8: {
                    paddingBottom: string;
                };
                9: {
                    paddingBottom: string;
                };
                10: {
                    paddingBottom: string;
                };
                11: {
                    paddingBottom: string;
                };
                12: {
                    paddingBottom: string;
                };
            };
            inline: {
                false: {
                    display: string;
                };
                true: {
                    display: string;
                    marginBottom: string;
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
        };
        '&:last-child': {
            marginBottom: string;
        };
        ft: string;
        fontWeight: string;
        marginBottom: string;
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
                marginBottom: number;
                fontSize?: undefined;
            } | {
                fontSize: string;
                marginBottom?: undefined;
            };
            fontSize: string;
            lineHeight: string;
            '&:last-child': {
                marginBottom: number;
            };
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
    HeadingThreeWrapper: import("@stitches/react/types/styled-component").StyledComponent<"h3", import("@stitches/react/types/styled-component").StyledComponentProps<[{
        variants: {
            top: {
                default: {
                    paddingTop: number;
                };
                1: {
                    paddingTop: string;
                };
                2: {
                    paddingTop: string;
                };
                3: {
                    paddingTop: string;
                };
                4: {
                    paddingTop: string;
                };
                5: {
                    paddingTop: string;
                };
                6: {
                    paddingTop: string;
                };
                7: {
                    paddingTop: string;
                };
                8: {
                    paddingTop: string;
                };
                9: {
                    paddingTop: string;
                };
                10: {
                    paddingTop: string;
                };
                11: {
                    paddingTop: string;
                };
                12: {
                    paddingTop: string;
                };
            };
            bottom: {
                default: {
                    paddingBottom: number;
                };
                1: {
                    paddingBottom: string;
                };
                2: {
                    paddingBottom: string;
                };
                3: {
                    paddingBottom: string;
                };
                4: {
                    paddingBottom: string;
                };
                5: {
                    paddingBottom: string;
                };
                6: {
                    paddingBottom: string;
                };
                7: {
                    paddingBottom: string;
                };
                8: {
                    paddingBottom: string;
                };
                9: {
                    paddingBottom: string;
                };
                10: {
                    paddingBottom: string;
                };
                11: {
                    paddingBottom: string;
                };
                12: {
                    paddingBottom: string;
                };
            };
            inline: {
                false: {
                    display: string;
                };
                true: {
                    display: string;
                    marginBottom: string;
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
        };
        '&:last-child': {
            marginBottom: string;
        };
        ft: string;
        fontWeight: string;
        marginBottom: string;
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
                marginBottom: number;
                fontSize?: undefined;
            } | {
                fontSize: string;
                marginBottom?: undefined;
            };
            fontSize: string;
            lineHeight: string;
            '&:last-child': {
                marginBottom: number;
            };
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
    HeadingFourWrapper: import("@stitches/react/types/styled-component").StyledComponent<"h4", import("@stitches/react/types/styled-component").StyledComponentProps<[{
        variants: {
            top: {
                default: {
                    paddingTop: number;
                };
                1: {
                    paddingTop: string;
                };
                2: {
                    paddingTop: string;
                };
                3: {
                    paddingTop: string;
                };
                4: {
                    paddingTop: string;
                };
                5: {
                    paddingTop: string;
                };
                6: {
                    paddingTop: string;
                };
                7: {
                    paddingTop: string;
                };
                8: {
                    paddingTop: string;
                };
                9: {
                    paddingTop: string;
                };
                10: {
                    paddingTop: string;
                };
                11: {
                    paddingTop: string;
                };
                12: {
                    paddingTop: string;
                };
            };
            bottom: {
                default: {
                    paddingBottom: number;
                };
                1: {
                    paddingBottom: string;
                };
                2: {
                    paddingBottom: string;
                };
                3: {
                    paddingBottom: string;
                };
                4: {
                    paddingBottom: string;
                };
                5: {
                    paddingBottom: string;
                };
                6: {
                    paddingBottom: string;
                };
                7: {
                    paddingBottom: string;
                };
                8: {
                    paddingBottom: string;
                };
                9: {
                    paddingBottom: string;
                };
                10: {
                    paddingBottom: string;
                };
                11: {
                    paddingBottom: string;
                };
                12: {
                    paddingBottom: string;
                };
            };
            inline: {
                false: {
                    display: string;
                };
                true: {
                    display: string;
                    marginBottom: string;
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
        };
        '&:last-child': {
            marginBottom: string;
        };
        ft: string;
        fontWeight: string;
        marginBottom: string;
        opacity: number;
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
                marginBottom: number;
                fontSize?: undefined;
            } | {
                fontSize: string;
                marginBottom?: undefined;
            };
            fontSize: string;
            lineHeight: string;
            '&:last-child': {
                marginBottom: number;
            };
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
    HeadingFiveWrapper: import("@stitches/react/types/styled-component").StyledComponent<"h5", import("@stitches/react/types/styled-component").StyledComponentProps<[{
        variants: {
            top: {
                default: {
                    paddingTop: number;
                };
                1: {
                    paddingTop: string;
                };
                2: {
                    paddingTop: string;
                };
                3: {
                    paddingTop: string;
                };
                4: {
                    paddingTop: string;
                };
                5: {
                    paddingTop: string;
                };
                6: {
                    paddingTop: string;
                };
                7: {
                    paddingTop: string;
                };
                8: {
                    paddingTop: string;
                };
                9: {
                    paddingTop: string;
                };
                10: {
                    paddingTop: string;
                };
                11: {
                    paddingTop: string;
                };
                12: {
                    paddingTop: string;
                };
            };
            bottom: {
                default: {
                    paddingBottom: number;
                };
                1: {
                    paddingBottom: string;
                };
                2: {
                    paddingBottom: string;
                };
                3: {
                    paddingBottom: string;
                };
                4: {
                    paddingBottom: string;
                };
                5: {
                    paddingBottom: string;
                };
                6: {
                    paddingBottom: string;
                };
                7: {
                    paddingBottom: string;
                };
                8: {
                    paddingBottom: string;
                };
                9: {
                    paddingBottom: string;
                };
                10: {
                    paddingBottom: string;
                };
                11: {
                    paddingBottom: string;
                };
                12: {
                    paddingBottom: string;
                };
            };
            inline: {
                false: {
                    display: string;
                };
                true: {
                    display: string;
                    marginBottom: string;
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
        };
        '&:last-child': {
            marginBottom: string;
        };
        ft: string;
        fontWeight: string;
        marginBottom: string;
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
                marginBottom: number;
                fontSize?: undefined;
            } | {
                fontSize: string;
                marginBottom?: undefined;
            };
            fontSize: string;
            lineHeight: string;
            '&:last-child': {
                marginBottom: number;
            };
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
    HeadingSixWrapper: import("@stitches/react/types/styled-component").StyledComponent<"h6", import("@stitches/react/types/styled-component").StyledComponentProps<[{
        variants: {
            top: {
                default: {
                    paddingTop: number;
                };
                1: {
                    paddingTop: string;
                };
                2: {
                    paddingTop: string;
                };
                3: {
                    paddingTop: string;
                };
                4: {
                    paddingTop: string;
                };
                5: {
                    paddingTop: string;
                };
                6: {
                    paddingTop: string;
                };
                7: {
                    paddingTop: string;
                };
                8: {
                    paddingTop: string;
                };
                9: {
                    paddingTop: string;
                };
                10: {
                    paddingTop: string;
                };
                11: {
                    paddingTop: string;
                };
                12: {
                    paddingTop: string;
                };
            };
            bottom: {
                default: {
                    paddingBottom: number;
                };
                1: {
                    paddingBottom: string;
                };
                2: {
                    paddingBottom: string;
                };
                3: {
                    paddingBottom: string;
                };
                4: {
                    paddingBottom: string;
                };
                5: {
                    paddingBottom: string;
                };
                6: {
                    paddingBottom: string;
                };
                7: {
                    paddingBottom: string;
                };
                8: {
                    paddingBottom: string;
                };
                9: {
                    paddingBottom: string;
                };
                10: {
                    paddingBottom: string;
                };
                11: {
                    paddingBottom: string;
                };
                12: {
                    paddingBottom: string;
                };
            };
            inline: {
                false: {
                    display: string;
                };
                true: {
                    display: string;
                    marginBottom: string;
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
        };
        '&:last-child': {
            marginBottom: string;
        };
        ft: string;
        fontWeight: string;
        marginBottom: string;
        opacity: number;
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
                marginBottom: number;
                fontSize?: undefined;
            } | {
                fontSize: string;
                marginBottom?: undefined;
            };
            fontSize: string;
            lineHeight: string;
            '&:last-child': {
                marginBottom: number;
            };
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
    TextOneWrapper: import("@stitches/react/types/styled-component").StyledComponent<"p", import("@stitches/react/types/styled-component").StyledComponentProps<[{
        variants: {
            top: {
                default: {
                    paddingTop: number;
                };
                1: {
                    paddingTop: string;
                };
                2: {
                    paddingTop: string;
                };
                3: {
                    paddingTop: string;
                };
                4: {
                    paddingTop: string;
                };
                5: {
                    paddingTop: string;
                };
                6: {
                    paddingTop: string;
                };
                7: {
                    paddingTop: string;
                };
                8: {
                    paddingTop: string;
                };
                9: {
                    paddingTop: string;
                };
                10: {
                    paddingTop: string;
                };
                11: {
                    paddingTop: string;
                };
                12: {
                    paddingTop: string;
                };
            };
            bottom: {
                default: {
                    paddingBottom: number;
                };
                1: {
                    paddingBottom: string;
                };
                2: {
                    paddingBottom: string;
                };
                3: {
                    paddingBottom: string;
                };
                4: {
                    paddingBottom: string;
                };
                5: {
                    paddingBottom: string;
                };
                6: {
                    paddingBottom: string;
                };
                7: {
                    paddingBottom: string;
                };
                8: {
                    paddingBottom: string;
                };
                9: {
                    paddingBottom: string;
                };
                10: {
                    paddingBottom: string;
                };
                11: {
                    paddingBottom: string;
                };
                12: {
                    paddingBottom: string;
                };
            };
            inline: {
                false: {
                    display: string;
                };
                true: {
                    display: string;
                    marginBottom: string;
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
        };
        '&:last-child': {
            marginBottom: string;
        };
        ft: string;
        fontWeight: string;
        marginBottom: string;
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
                marginBottom: number;
                fontSize?: undefined;
            } | {
                fontSize: string;
                marginBottom?: undefined;
            };
            fontSize: string;
            lineHeight: string;
            '&:last-child': {
                marginBottom: number;
            };
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
    TextTwoWrapper: import("@stitches/react/types/styled-component").StyledComponent<"p", import("@stitches/react/types/styled-component").StyledComponentProps<[{
        variants: {
            top: {
                default: {
                    paddingTop: number;
                };
                1: {
                    paddingTop: string;
                };
                2: {
                    paddingTop: string;
                };
                3: {
                    paddingTop: string;
                };
                4: {
                    paddingTop: string;
                };
                5: {
                    paddingTop: string;
                };
                6: {
                    paddingTop: string;
                };
                7: {
                    paddingTop: string;
                };
                8: {
                    paddingTop: string;
                };
                9: {
                    paddingTop: string;
                };
                10: {
                    paddingTop: string;
                };
                11: {
                    paddingTop: string;
                };
                12: {
                    paddingTop: string;
                };
            };
            bottom: {
                default: {
                    paddingBottom: number;
                };
                1: {
                    paddingBottom: string;
                };
                2: {
                    paddingBottom: string;
                };
                3: {
                    paddingBottom: string;
                };
                4: {
                    paddingBottom: string;
                };
                5: {
                    paddingBottom: string;
                };
                6: {
                    paddingBottom: string;
                };
                7: {
                    paddingBottom: string;
                };
                8: {
                    paddingBottom: string;
                };
                9: {
                    paddingBottom: string;
                };
                10: {
                    paddingBottom: string;
                };
                11: {
                    paddingBottom: string;
                };
                12: {
                    paddingBottom: string;
                };
            };
            inline: {
                false: {
                    display: string;
                };
                true: {
                    display: string;
                    marginBottom: string;
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
        };
        '&:last-child': {
            marginBottom: string;
        };
        ft: string;
        fontWeight: string;
        marginBottom: string;
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
                marginBottom: number;
                fontSize?: undefined;
            } | {
                fontSize: string;
                marginBottom?: undefined;
            };
            fontSize: string;
            lineHeight: string;
            '&:last-child': {
                marginBottom: number;
            };
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
    TextThreeWrapper: import("@stitches/react/types/styled-component").StyledComponent<"p", import("@stitches/react/types/styled-component").StyledComponentProps<[{
        variants: {
            top: {
                default: {
                    paddingTop: number;
                };
                1: {
                    paddingTop: string;
                };
                2: {
                    paddingTop: string;
                };
                3: {
                    paddingTop: string;
                };
                4: {
                    paddingTop: string;
                };
                5: {
                    paddingTop: string;
                };
                6: {
                    paddingTop: string;
                };
                7: {
                    paddingTop: string;
                };
                8: {
                    paddingTop: string;
                };
                9: {
                    paddingTop: string;
                };
                10: {
                    paddingTop: string;
                };
                11: {
                    paddingTop: string;
                };
                12: {
                    paddingTop: string;
                };
            };
            bottom: {
                default: {
                    paddingBottom: number;
                };
                1: {
                    paddingBottom: string;
                };
                2: {
                    paddingBottom: string;
                };
                3: {
                    paddingBottom: string;
                };
                4: {
                    paddingBottom: string;
                };
                5: {
                    paddingBottom: string;
                };
                6: {
                    paddingBottom: string;
                };
                7: {
                    paddingBottom: string;
                };
                8: {
                    paddingBottom: string;
                };
                9: {
                    paddingBottom: string;
                };
                10: {
                    paddingBottom: string;
                };
                11: {
                    paddingBottom: string;
                };
                12: {
                    paddingBottom: string;
                };
            };
            inline: {
                false: {
                    display: string;
                };
                true: {
                    display: string;
                    marginBottom: string;
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
        };
        '&:last-child': {
            marginBottom: string;
        };
        ft: string;
        fontWeight: string;
        marginBottom: string;
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
                marginBottom: number;
                fontSize?: undefined;
            } | {
                fontSize: string;
                marginBottom?: undefined;
            };
            fontSize: string;
            lineHeight: string;
            '&:last-child': {
                marginBottom: number;
            };
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
//# sourceMappingURL=Typography.styles.d.ts.map