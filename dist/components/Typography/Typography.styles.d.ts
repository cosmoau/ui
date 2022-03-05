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
            baseBody: any;
            base100: any;
            base200: any;
            base300: any;
            base400: any;
            baseContrast100: any;
            baseContrast200: any;
            baseContrast300: any;
            baseContrast400: any;
            red100: any;
            red200: any;
            red300: any;
            red400: any;
            yellow100: any;
            yellow200: any;
            yellow300: any;
            yellow400: any;
            green100: any;
            green200: any;
            green300: any;
            green400: any;
            blue100: any;
            blue200: any;
            blue300: any;
            blue400: any;
            navy100: any;
            navy200: any;
            navy300: any;
            navy400: any;
            purple100: any;
            purple200: any;
            purple300: any;
            purple400: any;
            pink100: any;
            pink200: any;
            pink300: any;
            pink400: any;
            border100: any;
            border200: any;
            border300: any;
        };
        space: {
            1: any;
            2: any;
            3: any;
            4: any;
            5: any;
            6: any;
            7: any;
            8: any;
            9: any;
            10: any;
            11: any;
            12: any;
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        fonts: {
            body: any;
        };
        fontSizes: {
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        lineHeights: {
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        sizes: {
            1: any;
            2: any;
            3: any;
            4: any;
            5: any;
        };
        radii: {
            1: any;
            2: any;
            3: any;
        };
        shadows: {
            1: any;
            2: any;
            3: any;
        };
        zIndices: {
            dropdown: any;
            tooltip: any;
            alert: any;
            cookies: any;
        };
        transitions: {
            1: any;
        };
        media: {
            phone: any;
            tabletX: any;
            tablet: any;
            laptopX: any;
            laptop: any;
            desktopX: any;
            desktop: any;
            wide: any;
            dark: any;
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
            baseBody: any;
            base100: any;
            base200: any;
            base300: any;
            base400: any;
            baseContrast100: any;
            baseContrast200: any;
            baseContrast300: any;
            baseContrast400: any;
            red100: any;
            red200: any;
            red300: any;
            red400: any;
            yellow100: any;
            yellow200: any;
            yellow300: any;
            yellow400: any;
            green100: any;
            green200: any;
            green300: any;
            green400: any;
            blue100: any;
            blue200: any;
            blue300: any;
            blue400: any;
            navy100: any;
            navy200: any;
            navy300: any;
            navy400: any;
            purple100: any;
            purple200: any;
            purple300: any;
            purple400: any;
            pink100: any;
            pink200: any;
            pink300: any;
            pink400: any;
            border100: any;
            border200: any;
            border300: any;
        };
        space: {
            1: any;
            2: any;
            3: any;
            4: any;
            5: any;
            6: any;
            7: any;
            8: any;
            9: any;
            10: any;
            11: any;
            12: any;
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        fonts: {
            body: any;
        };
        fontSizes: {
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        lineHeights: {
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        sizes: {
            1: any;
            2: any;
            3: any;
            4: any;
            5: any;
        };
        radii: {
            1: any;
            2: any;
            3: any;
        };
        shadows: {
            1: any;
            2: any;
            3: any;
        };
        zIndices: {
            dropdown: any;
            tooltip: any;
            alert: any;
            cookies: any;
        };
        transitions: {
            1: any;
        };
        media: {
            phone: any;
            tabletX: any;
            tablet: any;
            laptopX: any;
            laptop: any;
            desktopX: any;
            desktop: any;
            wide: any;
            dark: any;
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
            baseBody: any;
            base100: any;
            base200: any;
            base300: any;
            base400: any;
            baseContrast100: any;
            baseContrast200: any;
            baseContrast300: any;
            baseContrast400: any;
            red100: any;
            red200: any;
            red300: any;
            red400: any;
            yellow100: any;
            yellow200: any;
            yellow300: any;
            yellow400: any;
            green100: any;
            green200: any;
            green300: any;
            green400: any;
            blue100: any;
            blue200: any;
            blue300: any;
            blue400: any;
            navy100: any;
            navy200: any;
            navy300: any;
            navy400: any;
            purple100: any;
            purple200: any;
            purple300: any;
            purple400: any;
            pink100: any;
            pink200: any;
            pink300: any;
            pink400: any;
            border100: any;
            border200: any;
            border300: any;
        };
        space: {
            1: any;
            2: any;
            3: any;
            4: any;
            5: any;
            6: any;
            7: any;
            8: any;
            9: any;
            10: any;
            11: any;
            12: any;
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        fonts: {
            body: any;
        };
        fontSizes: {
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        lineHeights: {
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        sizes: {
            1: any;
            2: any;
            3: any;
            4: any;
            5: any;
        };
        radii: {
            1: any;
            2: any;
            3: any;
        };
        shadows: {
            1: any;
            2: any;
            3: any;
        };
        zIndices: {
            dropdown: any;
            tooltip: any;
            alert: any;
            cookies: any;
        };
        transitions: {
            1: any;
        };
        media: {
            phone: any;
            tabletX: any;
            tablet: any;
            laptopX: any;
            laptop: any;
            desktopX: any;
            desktop: any;
            wide: any;
            dark: any;
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
            baseBody: any;
            base100: any;
            base200: any;
            base300: any;
            base400: any;
            baseContrast100: any;
            baseContrast200: any;
            baseContrast300: any;
            baseContrast400: any;
            red100: any;
            red200: any;
            red300: any;
            red400: any;
            yellow100: any;
            yellow200: any;
            yellow300: any;
            yellow400: any;
            green100: any;
            green200: any;
            green300: any;
            green400: any;
            blue100: any;
            blue200: any;
            blue300: any;
            blue400: any;
            navy100: any;
            navy200: any;
            navy300: any;
            navy400: any;
            purple100: any;
            purple200: any;
            purple300: any;
            purple400: any;
            pink100: any;
            pink200: any;
            pink300: any;
            pink400: any;
            border100: any;
            border200: any;
            border300: any;
        };
        space: {
            1: any;
            2: any;
            3: any;
            4: any;
            5: any;
            6: any;
            7: any;
            8: any;
            9: any;
            10: any;
            11: any;
            12: any;
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        fonts: {
            body: any;
        };
        fontSizes: {
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        lineHeights: {
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        sizes: {
            1: any;
            2: any;
            3: any;
            4: any;
            5: any;
        };
        radii: {
            1: any;
            2: any;
            3: any;
        };
        shadows: {
            1: any;
            2: any;
            3: any;
        };
        zIndices: {
            dropdown: any;
            tooltip: any;
            alert: any;
            cookies: any;
        };
        transitions: {
            1: any;
        };
        media: {
            phone: any;
            tabletX: any;
            tablet: any;
            laptopX: any;
            laptop: any;
            desktopX: any;
            desktop: any;
            wide: any;
            dark: any;
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
            baseBody: any;
            base100: any;
            base200: any;
            base300: any;
            base400: any;
            baseContrast100: any;
            baseContrast200: any;
            baseContrast300: any;
            baseContrast400: any;
            red100: any;
            red200: any;
            red300: any;
            red400: any;
            yellow100: any;
            yellow200: any;
            yellow300: any;
            yellow400: any;
            green100: any;
            green200: any;
            green300: any;
            green400: any;
            blue100: any;
            blue200: any;
            blue300: any;
            blue400: any;
            navy100: any;
            navy200: any;
            navy300: any;
            navy400: any;
            purple100: any;
            purple200: any;
            purple300: any;
            purple400: any;
            pink100: any;
            pink200: any;
            pink300: any;
            pink400: any;
            border100: any;
            border200: any;
            border300: any;
        };
        space: {
            1: any;
            2: any;
            3: any;
            4: any;
            5: any;
            6: any;
            7: any;
            8: any;
            9: any;
            10: any;
            11: any;
            12: any;
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        fonts: {
            body: any;
        };
        fontSizes: {
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        lineHeights: {
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        sizes: {
            1: any;
            2: any;
            3: any;
            4: any;
            5: any;
        };
        radii: {
            1: any;
            2: any;
            3: any;
        };
        shadows: {
            1: any;
            2: any;
            3: any;
        };
        zIndices: {
            dropdown: any;
            tooltip: any;
            alert: any;
            cookies: any;
        };
        transitions: {
            1: any;
        };
        media: {
            phone: any;
            tabletX: any;
            tablet: any;
            laptopX: any;
            laptop: any;
            desktopX: any;
            desktop: any;
            wide: any;
            dark: any;
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
            baseBody: any;
            base100: any;
            base200: any;
            base300: any;
            base400: any;
            baseContrast100: any;
            baseContrast200: any;
            baseContrast300: any;
            baseContrast400: any;
            red100: any;
            red200: any;
            red300: any;
            red400: any;
            yellow100: any;
            yellow200: any;
            yellow300: any;
            yellow400: any;
            green100: any;
            green200: any;
            green300: any;
            green400: any;
            blue100: any;
            blue200: any;
            blue300: any;
            blue400: any;
            navy100: any;
            navy200: any;
            navy300: any;
            navy400: any;
            purple100: any;
            purple200: any;
            purple300: any;
            purple400: any;
            pink100: any;
            pink200: any;
            pink300: any;
            pink400: any;
            border100: any;
            border200: any;
            border300: any;
        };
        space: {
            1: any;
            2: any;
            3: any;
            4: any;
            5: any;
            6: any;
            7: any;
            8: any;
            9: any;
            10: any;
            11: any;
            12: any;
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        fonts: {
            body: any;
        };
        fontSizes: {
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        lineHeights: {
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        sizes: {
            1: any;
            2: any;
            3: any;
            4: any;
            5: any;
        };
        radii: {
            1: any;
            2: any;
            3: any;
        };
        shadows: {
            1: any;
            2: any;
            3: any;
        };
        zIndices: {
            dropdown: any;
            tooltip: any;
            alert: any;
            cookies: any;
        };
        transitions: {
            1: any;
        };
        media: {
            phone: any;
            tabletX: any;
            tablet: any;
            laptopX: any;
            laptop: any;
            desktopX: any;
            desktop: any;
            wide: any;
            dark: any;
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
            baseBody: any;
            base100: any;
            base200: any;
            base300: any;
            base400: any;
            baseContrast100: any;
            baseContrast200: any;
            baseContrast300: any;
            baseContrast400: any;
            red100: any;
            red200: any;
            red300: any;
            red400: any;
            yellow100: any;
            yellow200: any;
            yellow300: any;
            yellow400: any;
            green100: any;
            green200: any;
            green300: any;
            green400: any;
            blue100: any;
            blue200: any;
            blue300: any;
            blue400: any;
            navy100: any;
            navy200: any;
            navy300: any;
            navy400: any;
            purple100: any;
            purple200: any;
            purple300: any;
            purple400: any;
            pink100: any;
            pink200: any;
            pink300: any;
            pink400: any;
            border100: any;
            border200: any;
            border300: any;
        };
        space: {
            1: any;
            2: any;
            3: any;
            4: any;
            5: any;
            6: any;
            7: any;
            8: any;
            9: any;
            10: any;
            11: any;
            12: any;
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        fonts: {
            body: any;
        };
        fontSizes: {
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        lineHeights: {
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        sizes: {
            1: any;
            2: any;
            3: any;
            4: any;
            5: any;
        };
        radii: {
            1: any;
            2: any;
            3: any;
        };
        shadows: {
            1: any;
            2: any;
            3: any;
        };
        zIndices: {
            dropdown: any;
            tooltip: any;
            alert: any;
            cookies: any;
        };
        transitions: {
            1: any;
        };
        media: {
            phone: any;
            tabletX: any;
            tablet: any;
            laptopX: any;
            laptop: any;
            desktopX: any;
            desktop: any;
            wide: any;
            dark: any;
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
            baseBody: any;
            base100: any;
            base200: any;
            base300: any;
            base400: any;
            baseContrast100: any;
            baseContrast200: any;
            baseContrast300: any;
            baseContrast400: any;
            red100: any;
            red200: any;
            red300: any;
            red400: any;
            yellow100: any;
            yellow200: any;
            yellow300: any;
            yellow400: any;
            green100: any;
            green200: any;
            green300: any;
            green400: any;
            blue100: any;
            blue200: any;
            blue300: any;
            blue400: any;
            navy100: any;
            navy200: any;
            navy300: any;
            navy400: any;
            purple100: any;
            purple200: any;
            purple300: any;
            purple400: any;
            pink100: any;
            pink200: any;
            pink300: any;
            pink400: any;
            border100: any;
            border200: any;
            border300: any;
        };
        space: {
            1: any;
            2: any;
            3: any;
            4: any;
            5: any;
            6: any;
            7: any;
            8: any;
            9: any;
            10: any;
            11: any;
            12: any;
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        fonts: {
            body: any;
        };
        fontSizes: {
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        lineHeights: {
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        sizes: {
            1: any;
            2: any;
            3: any;
            4: any;
            5: any;
        };
        radii: {
            1: any;
            2: any;
            3: any;
        };
        shadows: {
            1: any;
            2: any;
            3: any;
        };
        zIndices: {
            dropdown: any;
            tooltip: any;
            alert: any;
            cookies: any;
        };
        transitions: {
            1: any;
        };
        media: {
            phone: any;
            tabletX: any;
            tablet: any;
            laptopX: any;
            laptop: any;
            desktopX: any;
            desktop: any;
            wide: any;
            dark: any;
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
            baseBody: any;
            base100: any;
            base200: any;
            base300: any;
            base400: any;
            baseContrast100: any;
            baseContrast200: any;
            baseContrast300: any;
            baseContrast400: any;
            red100: any;
            red200: any;
            red300: any;
            red400: any;
            yellow100: any;
            yellow200: any;
            yellow300: any;
            yellow400: any;
            green100: any;
            green200: any;
            green300: any;
            green400: any;
            blue100: any;
            blue200: any;
            blue300: any;
            blue400: any;
            navy100: any;
            navy200: any;
            navy300: any;
            navy400: any;
            purple100: any;
            purple200: any;
            purple300: any;
            purple400: any;
            pink100: any;
            pink200: any;
            pink300: any;
            pink400: any;
            border100: any;
            border200: any;
            border300: any;
        };
        space: {
            1: any;
            2: any;
            3: any;
            4: any;
            5: any;
            6: any;
            7: any;
            8: any;
            9: any;
            10: any;
            11: any;
            12: any;
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        fonts: {
            body: any;
        };
        fontSizes: {
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        lineHeights: {
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            h5: any;
            h6: any;
            t1: any;
            t2: any;
            t3: any;
        };
        sizes: {
            1: any;
            2: any;
            3: any;
            4: any;
            5: any;
        };
        radii: {
            1: any;
            2: any;
            3: any;
        };
        shadows: {
            1: any;
            2: any;
            3: any;
        };
        zIndices: {
            dropdown: any;
            tooltip: any;
            alert: any;
            cookies: any;
        };
        transitions: {
            1: any;
        };
        media: {
            phone: any;
            tabletX: any;
            tablet: any;
            laptopX: any;
            laptop: any;
            desktopX: any;
            desktop: any;
            wide: any;
            dark: any;
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