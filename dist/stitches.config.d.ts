/// <reference types="react" />
import { CSS } from '@stitches/react';
export declare const breakpoints: {
    desktop: string;
    desktopX: string;
    laptop: string;
    laptopX: string;
    phone: string;
    tablet: string;
    tabletX: string;
    wide: string;
};
export declare const theme: string & {
    className: string;
    selector: string;
} & {
    colors: {
        accent: import("@stitches/react/types/theme").Token<"accent", string, "colors", "">;
        background: import("@stitches/react/types/theme").Token<"background", string, "colors", "">;
        blueBorder: import("@stitches/react/types/theme").Token<"blueBorder", string, "colors", "">;
        blueCTA: import("@stitches/react/types/theme").Token<"blueCTA", string, "colors", "">;
        blueOverlay: import("@stitches/react/types/theme").Token<"blueOverlay", string, "colors", "">;
        blueText: import("@stitches/react/types/theme").Token<"blueText", string, "colors", "">;
        border: import("@stitches/react/types/theme").Token<"border", string, "colors", "">;
        default: import("@stitches/react/types/theme").Token<"default", string, "colors", "">;
        defaultHover: import("@stitches/react/types/theme").Token<"defaultHover", string, "colors", "">;
        greenBorder: import("@stitches/react/types/theme").Token<"greenBorder", string, "colors", "">;
        greenOverlay: import("@stitches/react/types/theme").Token<"greenOverlay", string, "colors", "">;
        greenText: import("@stitches/react/types/theme").Token<"greenText", string, "colors", "">;
        inverted: import("@stitches/react/types/theme").Token<"inverted", string, "colors", "">;
        orangeBorder: import("@stitches/react/types/theme").Token<"orangeBorder", string, "colors", "">;
        orangeOverlay: import("@stitches/react/types/theme").Token<"orangeOverlay", string, "colors", "">;
        orangeText: import("@stitches/react/types/theme").Token<"orangeText", string, "colors", "">;
        pinkBorder: import("@stitches/react/types/theme").Token<"pinkBorder", string, "colors", "">;
        pinkOverlay: import("@stitches/react/types/theme").Token<"pinkOverlay", string, "colors", "">;
        pinkText: import("@stitches/react/types/theme").Token<"pinkText", string, "colors", "">;
        purpleBorder: import("@stitches/react/types/theme").Token<"purpleBorder", string, "colors", "">;
        purpleOverlay: import("@stitches/react/types/theme").Token<"purpleOverlay", string, "colors", "">;
        purpleText: import("@stitches/react/types/theme").Token<"purpleText", string, "colors", "">;
        redBorder: import("@stitches/react/types/theme").Token<"redBorder", string, "colors", "">;
        redOverlay: import("@stitches/react/types/theme").Token<"redOverlay", string, "colors", "">;
        redText: import("@stitches/react/types/theme").Token<"redText", string, "colors", "">;
        text: import("@stitches/react/types/theme").Token<"text", string, "colors", "">;
    };
    fontSizes: {
        h1: import("@stitches/react/types/theme").Token<"h1", string, "fontSizes", "">;
        h2: import("@stitches/react/types/theme").Token<"h2", string, "fontSizes", "">;
        h3: import("@stitches/react/types/theme").Token<"h3", string, "fontSizes", "">;
        h4: import("@stitches/react/types/theme").Token<"h4", string, "fontSizes", "">;
        h5: import("@stitches/react/types/theme").Token<"h5", string, "fontSizes", "">;
        h6: import("@stitches/react/types/theme").Token<"h6", string, "fontSizes", "">;
        p: import("@stitches/react/types/theme").Token<"p", string, "fontSizes", "">;
        small: import("@stitches/react/types/theme").Token<"small", string, "fontSizes", "">;
    };
    fontWeights: {
        h1: import("@stitches/react/types/theme").Token<"h1", string, "fontWeights", "">;
        h2: import("@stitches/react/types/theme").Token<"h2", string, "fontWeights", "">;
        h3: import("@stitches/react/types/theme").Token<"h3", string, "fontWeights", "">;
        h4: import("@stitches/react/types/theme").Token<"h4", string, "fontWeights", "">;
        h5: import("@stitches/react/types/theme").Token<"h5", string, "fontWeights", "">;
        h6: import("@stitches/react/types/theme").Token<"h6", string, "fontWeights", "">;
        p: import("@stitches/react/types/theme").Token<"p", string, "fontWeights", "">;
        small: import("@stitches/react/types/theme").Token<"small", string, "fontWeights", "">;
    };
    fonts: {
        default: import("@stitches/react/types/theme").Token<"default", string, "fonts", "">;
    };
    lineHeights: {
        h1: import("@stitches/react/types/theme").Token<"h1", string, "lineHeights", "">;
        h2: import("@stitches/react/types/theme").Token<"h2", string, "lineHeights", "">;
        h3: import("@stitches/react/types/theme").Token<"h3", string, "lineHeights", "">;
        h4: import("@stitches/react/types/theme").Token<"h4", string, "lineHeights", "">;
        h5: import("@stitches/react/types/theme").Token<"h5", string, "lineHeights", "">;
        h6: import("@stitches/react/types/theme").Token<"h6", string, "lineHeights", "">;
        p: import("@stitches/react/types/theme").Token<"p", string, "lineHeights", "">;
        small: import("@stitches/react/types/theme").Token<"small", string, "lineHeights", "">;
    };
    media: {
        desktop: import("@stitches/react/types/theme").Token<"desktop", string, "media", "">;
        desktopX: import("@stitches/react/types/theme").Token<"desktopX", string, "media", "">;
        laptop: import("@stitches/react/types/theme").Token<"laptop", string, "media", "">;
        laptopX: import("@stitches/react/types/theme").Token<"laptopX", string, "media", "">;
        phone: import("@stitches/react/types/theme").Token<"phone", string, "media", "">;
        tablet: import("@stitches/react/types/theme").Token<"tablet", string, "media", "">;
        tabletX: import("@stitches/react/types/theme").Token<"tabletX", string, "media", "">;
        wide: import("@stitches/react/types/theme").Token<"wide", string, "media", "">;
    };
    radii: {
        1: import("@stitches/react/types/theme").Token<"1", string, "radii", "">;
        2: import("@stitches/react/types/theme").Token<"2", string, "radii", "">;
        3: import("@stitches/react/types/theme").Token<"3", string, "radii", "">;
    };
    shadows: {
        1: import("@stitches/react/types/theme").Token<"1", string, "shadows", "">;
        2: import("@stitches/react/types/theme").Token<"2", string, "shadows", "">;
        3: import("@stitches/react/types/theme").Token<"3", string, "shadows", "">;
    };
    space: {
        1: import("@stitches/react/types/theme").Token<"1", string, "space", "">;
        2: import("@stitches/react/types/theme").Token<"2", string, "space", "">;
        3: import("@stitches/react/types/theme").Token<"3", string, "space", "">;
        4: import("@stitches/react/types/theme").Token<"4", string, "space", "">;
        5: import("@stitches/react/types/theme").Token<"5", string, "space", "">;
        6: import("@stitches/react/types/theme").Token<"6", string, "space", "">;
        7: import("@stitches/react/types/theme").Token<"7", string, "space", "">;
        8: import("@stitches/react/types/theme").Token<"8", string, "space", "">;
    };
    transitions: {
        default: import("@stitches/react/types/theme").Token<"default", string, "transitions", "">;
    };
    zIndices: {
        dialog: import("@stitches/react/types/theme").Token<"dialog", string, "zIndices", "">;
        dropdown: import("@stitches/react/types/theme").Token<"dropdown", string, "zIndices", "">;
        popover: import("@stitches/react/types/theme").Token<"popover", string, "zIndices", "">;
        toast: import("@stitches/react/types/theme").Token<"toast", string, "zIndices", "">;
    };
}, css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").ExoticComponent<any> | import("react").JSXElementConstructor<any> | {
    [name: string]: unknown;
})[], CSS_1 = import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        accent: string;
        background: string;
        blueBorder: string;
        blueCTA: string;
        blueOverlay: string;
        blueText: string;
        border: string;
        default: string;
        defaultHover: string;
        greenBorder: string;
        greenOverlay: string;
        greenText: string;
        inverted: string;
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
    hidden: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
        [x: string]: {
            display: string;
        };
    };
    hiddenInline: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
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
    visible: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    visibleInline: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    wide: (value: unknown) => {
        [x: string]: unknown;
    };
}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ExoticComponent<any> | import("react").JSXElementConstructor<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS_1> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS_1;
            [x: number]: CSS_1;
        };
    };
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]>; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS_1;
    })[];
    defaultVariants?: "variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]>; } : never : import("@stitches/react/types/util").WideObject;
} & CSS_1 & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS_1 ? CSS_1[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, CSS_1>, styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS_1 = import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        accent: string;
        background: string;
        blueBorder: string;
        blueCTA: string;
        blueOverlay: string;
        blueText: string;
        border: string;
        default: string;
        defaultHover: string;
        greenBorder: string;
        greenOverlay: string;
        greenText: string;
        inverted: string;
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
    hidden: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
        [x: string]: {
            display: string;
        };
    };
    hiddenInline: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
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
    visible: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    visibleInline: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    wide: (value: unknown) => {
        [x: string]: unknown;
    };
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS_1> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS_1;
            [x: number]: CSS_1;
        };
    };
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]>; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS_1;
    })[];
    defaultVariants?: "variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]>; } : never : import("@stitches/react/types/util").WideObject;
} & CSS_1 & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS_1 ? CSS_1[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        accent: string;
        background: string;
        blueBorder: string;
        blueCTA: string;
        blueOverlay: string;
        blueText: string;
        border: string;
        default: string;
        defaultHover: string;
        greenBorder: string;
        greenOverlay: string;
        greenText: string;
        inverted: string;
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
    hidden: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
        [x: string]: {
            display: string;
        };
    };
    hiddenInline: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
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
    visible: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    visibleInline: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    wide: (value: unknown) => {
        [x: string]: unknown;
    };
}>>, getCssText: () => string, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/react/types/css-util").CSS<{}, {
        colors: {
            accent: string;
            background: string;
            blueBorder: string;
            blueCTA: string;
            blueOverlay: string;
            blueText: string;
            border: string;
            default: string;
            defaultHover: string;
            greenBorder: string;
            greenOverlay: string;
            greenText: string;
            inverted: string;
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
        hidden: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
            [x: string]: {
                display: string;
            };
        };
        hiddenInline: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
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
        visible: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
            [x: string]: string | {
                display: string;
            };
            display: string;
        };
        visibleInline: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
            [x: string]: string | {
                display: string;
            };
            display: string;
        };
        wide: (value: unknown) => {
            [x: string]: unknown;
        };
    }>;
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        accent: string;
        background: string;
        blueBorder: string;
        blueCTA: string;
        blueOverlay: string;
        blueText: string;
        border: string;
        default: string;
        defaultHover: string;
        greenBorder: string;
        greenOverlay: string;
        greenText: string;
        inverted: string;
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
    hidden: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
        [x: string]: {
            display: string;
        };
    };
    hiddenInline: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
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
    visible: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    visibleInline: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    wide: (value: unknown) => {
        [x: string]: unknown;
    };
}>; })[]) => () => string, keyframes: (style: {
    [offset: string]: import("@stitches/react/types/css-util").CSS<{}, {
        colors: {
            accent: string;
            background: string;
            blueBorder: string;
            blueCTA: string;
            blueOverlay: string;
            blueText: string;
            border: string;
            default: string;
            defaultHover: string;
            greenBorder: string;
            greenOverlay: string;
            greenText: string;
            inverted: string;
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
        hidden: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
            [x: string]: {
                display: string;
            };
        };
        hiddenInline: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
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
        visible: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
            [x: string]: string | {
                display: string;
            };
            display: string;
        };
        visibleInline: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
            [x: string]: string | {
                display: string;
            };
            display: string;
        };
        wide: (value: unknown) => {
            [x: string]: unknown;
        };
    }>;
}) => {
    (): string;
    name: string;
};
export declare const lightTheme: string & {
    className: string;
    selector: string;
} & import("@stitches/react/types/stitches").ThemeTokens<{
    colors: {
        accent: string;
        background: string;
        blueText: string;
        border: string;
        default: string;
        defaultHover: string;
        greenText: string;
        orangeText: string;
        pinkText: string;
        purpleText: string;
        redText: string;
        text: string;
    };
    shadows: {
        1: string;
        2: string;
        3: string;
    };
}, "">;
export interface DefaultProps {
    css?: CSS;
    id?: string;
    spacing?: keyof typeof theme.space;
}
export declare const fadeIn: {
    (): string;
    name: string;
};
export declare const fadeOut: {
    (): string;
    name: string;
};
//# sourceMappingURL=stitches.config.d.ts.map