import { CSSProperties, CSS } from "@stitches/react";
import { ImageProps } from "next/image";
import { ReactNode, ComponentPropsWithRef, ComponentPropsWithoutRef, MouseEventHandler } from "react";
export const breakpoints: {
    desktop: string;
    desktopX: string;
    laptop: string;
    laptopX: string;
    phone: string;
    phoneX: string;
    special: {
        micro: string;
        print: string;
        retina: string;
    };
    tablet: string;
    tabletX: string;
    wide: string;
};
export const darkTheme: string & {
    className: string;
    selector: string;
} & import("@stitches/react/types/stitches").ThemeTokens<{
    colors: {
        accent: string;
        background: string;
        border: string;
        borderTable: string;
        default: string;
        defaultHover: string;
        defaultTable: string;
        text: string;
    };
    shadows: {
        large: string;
        small: string;
    };
}, "">;
export const theme: string & {
    className: string;
    selector: string;
} & {
    colors: {
        accent: import("@stitches/react/types/theme").Token<"accent", string, "colors", "">;
        background: import("@stitches/react/types/theme").Token<"background", string, "colors", "">;
        blueBackground: import("@stitches/react/types/theme").Token<"blueBackground", string, "colors", "">;
        blueData: import("@stitches/react/types/theme").Token<"blueData", string, "colors", "">;
        blueDataAlt: import("@stitches/react/types/theme").Token<"blueDataAlt", string, "colors", "">;
        blueText: import("@stitches/react/types/theme").Token<"blueText", string, "colors", "">;
        border: import("@stitches/react/types/theme").Token<"border", string, "colors", "">;
        borderTable: import("@stitches/react/types/theme").Token<"borderTable", string, "colors", "">;
        default: import("@stitches/react/types/theme").Token<"default", string, "colors", "">;
        defaultHover: import("@stitches/react/types/theme").Token<"defaultHover", string, "colors", "">;
        defaultTable: import("@stitches/react/types/theme").Token<"defaultTable", string, "colors", "">;
        greenBackground: import("@stitches/react/types/theme").Token<"greenBackground", string, "colors", "">;
        greenData: import("@stitches/react/types/theme").Token<"greenData", string, "colors", "">;
        greenDataAlt: import("@stitches/react/types/theme").Token<"greenDataAlt", string, "colors", "">;
        greenText: import("@stitches/react/types/theme").Token<"greenText", string, "colors", "">;
        orangeBackground: import("@stitches/react/types/theme").Token<"orangeBackground", string, "colors", "">;
        orangeData: import("@stitches/react/types/theme").Token<"orangeData", string, "colors", "">;
        orangeDataAlt: import("@stitches/react/types/theme").Token<"orangeDataAlt", string, "colors", "">;
        orangeSelection: import("@stitches/react/types/theme").Token<"orangeSelection", string, "colors", "">;
        orangeText: import("@stitches/react/types/theme").Token<"orangeText", string, "colors", "">;
        purpleBackground: import("@stitches/react/types/theme").Token<"purpleBackground", string, "colors", "">;
        purpleData: import("@stitches/react/types/theme").Token<"purpleData", string, "colors", "">;
        purpleDataAlt: import("@stitches/react/types/theme").Token<"purpleDataAlt", string, "colors", "">;
        purpleText: import("@stitches/react/types/theme").Token<"purpleText", string, "colors", "">;
        redBackground: import("@stitches/react/types/theme").Token<"redBackground", string, "colors", "">;
        redData: import("@stitches/react/types/theme").Token<"redData", string, "colors", "">;
        redDataAlt: import("@stitches/react/types/theme").Token<"redDataAlt", string, "colors", "">;
        redText: import("@stitches/react/types/theme").Token<"redText", string, "colors", "">;
        text: import("@stitches/react/types/theme").Token<"text", string, "colors", "">;
    };
    fontSizes: {
        default: import("@stitches/react/types/theme").Token<"default", string, "fontSizes", "">;
        h1: import("@stitches/react/types/theme").Token<"h1", string, "fontSizes", "">;
        h2: import("@stitches/react/types/theme").Token<"h2", string, "fontSizes", "">;
        h3: import("@stitches/react/types/theme").Token<"h3", string, "fontSizes", "">;
        h4: import("@stitches/react/types/theme").Token<"h4", string, "fontSizes", "">;
        h5: import("@stitches/react/types/theme").Token<"h5", string, "fontSizes", "">;
        h6: import("@stitches/react/types/theme").Token<"h6", string, "fontSizes", "">;
        small: import("@stitches/react/types/theme").Token<"small", string, "fontSizes", "">;
    };
    fonts: {
        default: import("@stitches/react/types/theme").Token<"default", string, "fonts", "">;
        serif: import("@stitches/react/types/theme").Token<"serif", string, "fonts", "">;
    };
    lineHeights: {
        default: import("@stitches/react/types/theme").Token<"default", string, "lineHeights", "">;
        small: import("@stitches/react/types/theme").Token<"small", string, "lineHeights", "">;
    };
    radii: {
        large: import("@stitches/react/types/theme").Token<"large", string, "radii", "">;
        small: import("@stitches/react/types/theme").Token<"small", string, "radii", "">;
    };
    shadows: {
        large: import("@stitches/react/types/theme").Token<"large", string, "shadows", "">;
        small: import("@stitches/react/types/theme").Token<"small", string, "shadows", "">;
    };
    space: {
        excess: import("@stitches/react/types/theme").Token<"excess", string, "space", "">;
        large: import("@stitches/react/types/theme").Token<"large", string, "space", "">;
        larger: import("@stitches/react/types/theme").Token<"larger", string, "space", "">;
        largest: import("@stitches/react/types/theme").Token<"largest", string, "space", "">;
        medium: import("@stitches/react/types/theme").Token<"medium", string, "space", "">;
        none: import("@stitches/react/types/theme").Token<"none", string, "space", "">;
        small: import("@stitches/react/types/theme").Token<"small", string, "space", "">;
        smaller: import("@stitches/react/types/theme").Token<"smaller", string, "space", "">;
        smallest: import("@stitches/react/types/theme").Token<"smallest", string, "space", "">;
    };
    transitions: {
        default: import("@stitches/react/types/theme").Token<"default", string, "transitions", "">;
    };
    zIndices: {
        dialog: import("@stitches/react/types/theme").Token<"dialog", string, "zIndices", "">;
        popover: import("@stitches/react/types/theme").Token<"popover", string, "zIndices", "">;
        select: import("@stitches/react/types/theme").Token<"select", string, "zIndices", "">;
        special: import("@stitches/react/types/theme").Token<"special", string, "zIndices", "">;
        table: import("@stitches/react/types/theme").Token<"table", string, "zIndices", "">;
        toast: import("@stitches/react/types/theme").Token<"toast", string, "zIndices", "">;
    };
}, css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        accent: string;
        background: string;
        blueBackground: string;
        blueData: string;
        blueDataAlt: string;
        blueText: string;
        border: string;
        borderTable: string;
        default: string;
        defaultHover: string;
        defaultTable: string;
        greenBackground: string;
        greenData: string;
        greenDataAlt: string;
        greenText: string;
        orangeBackground: string;
        orangeData: string;
        orangeDataAlt: string;
        orangeSelection: string;
        orangeText: string;
        purpleBackground: string;
        purpleData: string;
        purpleDataAlt: string;
        purpleText: string;
        redBackground: string;
        redData: string;
        redDataAlt: string;
        redText: string;
        text: string;
    };
    fontSizes: {
        default: string;
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        small: string;
    };
    fonts: {
        default: string;
        serif: string;
    };
    lineHeights: {
        default: string;
        small: string;
    };
    radii: {
        large: string;
        small: string;
    };
    shadows: {
        large: string;
        small: string;
    };
    space: {
        excess: string;
        large: string;
        larger: string;
        largest: string;
        medium: string;
        none: string;
        small: string;
        smaller: string;
        smallest: string;
    };
    transitions: {
        default: string;
    };
    zIndices: {
        dialog: number;
        popover: number;
        select: number;
        special: number;
        table: number;
        toast: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    darkModeSpec: (value: unknown) => {
        [x: string]: unknown;
    };
    desktop: (value: unknown) => {
        [x: string]: unknown;
    };
    desktopX: (value: unknown) => {
        [x: string]: unknown;
    };
    hidden: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => {
        [x: string]: {
            display: string;
        };
    };
    hiddenInline: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    hiddenSpecial: (value: "micro" | "retina" | "print") => {
        [x: string]: {
            display: string;
        };
    };
    laptop: (value: unknown) => {
        [x: string]: unknown;
    };
    laptopX: (value: unknown) => {
        [x: string]: unknown;
    };
    lightThemeSpec: (value: unknown) => {
        "@media (prefers-color-scheme: light)": unknown;
    };
    micro: (value: unknown) => {
        [x: string]: unknown;
    };
    phone: (value: unknown) => {
        [x: string]: unknown;
    };
    print: (value: unknown) => {
        [x: string]: unknown;
    };
    retina: (value: unknown) => {
        [x: string]: unknown;
    };
    tablet: (value: unknown) => {
        [x: string]: unknown;
    };
    tabletX: (value: unknown) => {
        [x: string]: unknown;
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
    visibleSpecial: (value: "micro" | "retina" | "print") => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    wide: (value: unknown) => {
        [x: string]: unknown;
    };
}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, CSS>, styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        accent: string;
        background: string;
        blueBackground: string;
        blueData: string;
        blueDataAlt: string;
        blueText: string;
        border: string;
        borderTable: string;
        default: string;
        defaultHover: string;
        defaultTable: string;
        greenBackground: string;
        greenData: string;
        greenDataAlt: string;
        greenText: string;
        orangeBackground: string;
        orangeData: string;
        orangeDataAlt: string;
        orangeSelection: string;
        orangeText: string;
        purpleBackground: string;
        purpleData: string;
        purpleDataAlt: string;
        purpleText: string;
        redBackground: string;
        redData: string;
        redDataAlt: string;
        redText: string;
        text: string;
    };
    fontSizes: {
        default: string;
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        small: string;
    };
    fonts: {
        default: string;
        serif: string;
    };
    lineHeights: {
        default: string;
        small: string;
    };
    radii: {
        large: string;
        small: string;
    };
    shadows: {
        large: string;
        small: string;
    };
    space: {
        excess: string;
        large: string;
        larger: string;
        largest: string;
        medium: string;
        none: string;
        small: string;
        smaller: string;
        smallest: string;
    };
    transitions: {
        default: string;
    };
    zIndices: {
        dialog: number;
        popover: number;
        select: number;
        special: number;
        table: number;
        toast: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    darkModeSpec: (value: unknown) => {
        [x: string]: unknown;
    };
    desktop: (value: unknown) => {
        [x: string]: unknown;
    };
    desktopX: (value: unknown) => {
        [x: string]: unknown;
    };
    hidden: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => {
        [x: string]: {
            display: string;
        };
    };
    hiddenInline: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    hiddenSpecial: (value: "micro" | "retina" | "print") => {
        [x: string]: {
            display: string;
        };
    };
    laptop: (value: unknown) => {
        [x: string]: unknown;
    };
    laptopX: (value: unknown) => {
        [x: string]: unknown;
    };
    lightThemeSpec: (value: unknown) => {
        "@media (prefers-color-scheme: light)": unknown;
    };
    micro: (value: unknown) => {
        [x: string]: unknown;
    };
    phone: (value: unknown) => {
        [x: string]: unknown;
    };
    print: (value: unknown) => {
        [x: string]: unknown;
    };
    retina: (value: unknown) => {
        [x: string]: unknown;
    };
    tablet: (value: unknown) => {
        [x: string]: unknown;
    };
    tabletX: (value: unknown) => {
        [x: string]: unknown;
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
    visibleSpecial: (value: "micro" | "retina" | "print") => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    wide: (value: unknown) => {
        [x: string]: unknown;
    };
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        accent: string;
        background: string;
        blueBackground: string;
        blueData: string;
        blueDataAlt: string;
        blueText: string;
        border: string;
        borderTable: string;
        default: string;
        defaultHover: string;
        defaultTable: string;
        greenBackground: string;
        greenData: string;
        greenDataAlt: string;
        greenText: string;
        orangeBackground: string;
        orangeData: string;
        orangeDataAlt: string;
        orangeSelection: string;
        orangeText: string;
        purpleBackground: string;
        purpleData: string;
        purpleDataAlt: string;
        purpleText: string;
        redBackground: string;
        redData: string;
        redDataAlt: string;
        redText: string;
        text: string;
    };
    fontSizes: {
        default: string;
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        small: string;
    };
    fonts: {
        default: string;
        serif: string;
    };
    lineHeights: {
        default: string;
        small: string;
    };
    radii: {
        large: string;
        small: string;
    };
    shadows: {
        large: string;
        small: string;
    };
    space: {
        excess: string;
        large: string;
        larger: string;
        largest: string;
        medium: string;
        none: string;
        small: string;
        smaller: string;
        smallest: string;
    };
    transitions: {
        default: string;
    };
    zIndices: {
        dialog: number;
        popover: number;
        select: number;
        special: number;
        table: number;
        toast: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    darkModeSpec: (value: unknown) => {
        [x: string]: unknown;
    };
    desktop: (value: unknown) => {
        [x: string]: unknown;
    };
    desktopX: (value: unknown) => {
        [x: string]: unknown;
    };
    hidden: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => {
        [x: string]: {
            display: string;
        };
    };
    hiddenInline: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    hiddenSpecial: (value: "micro" | "retina" | "print") => {
        [x: string]: {
            display: string;
        };
    };
    laptop: (value: unknown) => {
        [x: string]: unknown;
    };
    laptopX: (value: unknown) => {
        [x: string]: unknown;
    };
    lightThemeSpec: (value: unknown) => {
        "@media (prefers-color-scheme: light)": unknown;
    };
    micro: (value: unknown) => {
        [x: string]: unknown;
    };
    phone: (value: unknown) => {
        [x: string]: unknown;
    };
    print: (value: unknown) => {
        [x: string]: unknown;
    };
    retina: (value: unknown) => {
        [x: string]: unknown;
    };
    tablet: (value: unknown) => {
        [x: string]: unknown;
    };
    tabletX: (value: unknown) => {
        [x: string]: unknown;
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
    visibleSpecial: (value: "micro" | "retina" | "print") => {
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
            blueBackground: string;
            blueData: string;
            blueDataAlt: string;
            blueText: string;
            border: string;
            borderTable: string;
            default: string;
            defaultHover: string;
            defaultTable: string;
            greenBackground: string;
            greenData: string;
            greenDataAlt: string;
            greenText: string;
            orangeBackground: string;
            orangeData: string;
            orangeDataAlt: string;
            orangeSelection: string;
            orangeText: string;
            purpleBackground: string;
            purpleData: string;
            purpleDataAlt: string;
            purpleText: string;
            redBackground: string;
            redData: string;
            redDataAlt: string;
            redText: string;
            text: string;
        };
        fontSizes: {
            default: string;
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
            small: string;
        };
        fonts: {
            default: string;
            serif: string;
        };
        lineHeights: {
            default: string;
            small: string;
        };
        radii: {
            large: string;
            small: string;
        };
        shadows: {
            large: string;
            small: string;
        };
        space: {
            excess: string;
            large: string;
            larger: string;
            largest: string;
            medium: string;
            none: string;
            small: string;
            smaller: string;
            smallest: string;
        };
        transitions: {
            default: string;
        };
        zIndices: {
            dialog: number;
            popover: number;
            select: number;
            special: number;
            table: number;
            toast: number;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        darkModeSpec: (value: unknown) => {
            [x: string]: unknown;
        };
        desktop: (value: unknown) => {
            [x: string]: unknown;
        };
        desktopX: (value: unknown) => {
            [x: string]: unknown;
        };
        hidden: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => {
            [x: string]: {
                display: string;
            };
        };
        hiddenInline: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => {
            [x: string]: string | {
                display: string;
            };
            display: string;
        };
        hiddenSpecial: (value: "micro" | "retina" | "print") => {
            [x: string]: {
                display: string;
            };
        };
        laptop: (value: unknown) => {
            [x: string]: unknown;
        };
        laptopX: (value: unknown) => {
            [x: string]: unknown;
        };
        lightThemeSpec: (value: unknown) => {
            "@media (prefers-color-scheme: light)": unknown;
        };
        micro: (value: unknown) => {
            [x: string]: unknown;
        };
        phone: (value: unknown) => {
            [x: string]: unknown;
        };
        print: (value: unknown) => {
            [x: string]: unknown;
        };
        retina: (value: unknown) => {
            [x: string]: unknown;
        };
        tablet: (value: unknown) => {
            [x: string]: unknown;
        };
        tabletX: (value: unknown) => {
            [x: string]: unknown;
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
        visibleSpecial: (value: "micro" | "retina" | "print") => {
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
        blueBackground: string;
        blueData: string;
        blueDataAlt: string;
        blueText: string;
        border: string;
        borderTable: string;
        default: string;
        defaultHover: string;
        defaultTable: string;
        greenBackground: string;
        greenData: string;
        greenDataAlt: string;
        greenText: string;
        orangeBackground: string;
        orangeData: string;
        orangeDataAlt: string;
        orangeSelection: string;
        orangeText: string;
        purpleBackground: string;
        purpleData: string;
        purpleDataAlt: string;
        purpleText: string;
        redBackground: string;
        redData: string;
        redDataAlt: string;
        redText: string;
        text: string;
    };
    fontSizes: {
        default: string;
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        small: string;
    };
    fonts: {
        default: string;
        serif: string;
    };
    lineHeights: {
        default: string;
        small: string;
    };
    radii: {
        large: string;
        small: string;
    };
    shadows: {
        large: string;
        small: string;
    };
    space: {
        excess: string;
        large: string;
        larger: string;
        largest: string;
        medium: string;
        none: string;
        small: string;
        smaller: string;
        smallest: string;
    };
    transitions: {
        default: string;
    };
    zIndices: {
        dialog: number;
        popover: number;
        select: number;
        special: number;
        table: number;
        toast: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    darkModeSpec: (value: unknown) => {
        [x: string]: unknown;
    };
    desktop: (value: unknown) => {
        [x: string]: unknown;
    };
    desktopX: (value: unknown) => {
        [x: string]: unknown;
    };
    hidden: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => {
        [x: string]: {
            display: string;
        };
    };
    hiddenInline: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    hiddenSpecial: (value: "micro" | "retina" | "print") => {
        [x: string]: {
            display: string;
        };
    };
    laptop: (value: unknown) => {
        [x: string]: unknown;
    };
    laptopX: (value: unknown) => {
        [x: string]: unknown;
    };
    lightThemeSpec: (value: unknown) => {
        "@media (prefers-color-scheme: light)": unknown;
    };
    micro: (value: unknown) => {
        [x: string]: unknown;
    };
    phone: (value: unknown) => {
        [x: string]: unknown;
    };
    print: (value: unknown) => {
        [x: string]: unknown;
    };
    retina: (value: unknown) => {
        [x: string]: unknown;
    };
    tablet: (value: unknown) => {
        [x: string]: unknown;
    };
    tabletX: (value: unknown) => {
        [x: string]: unknown;
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
    visibleSpecial: (value: "micro" | "retina" | "print") => {
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
            blueBackground: string;
            blueData: string;
            blueDataAlt: string;
            blueText: string;
            border: string;
            borderTable: string;
            default: string;
            defaultHover: string;
            defaultTable: string;
            greenBackground: string;
            greenData: string;
            greenDataAlt: string;
            greenText: string;
            orangeBackground: string;
            orangeData: string;
            orangeDataAlt: string;
            orangeSelection: string;
            orangeText: string;
            purpleBackground: string;
            purpleData: string;
            purpleDataAlt: string;
            purpleText: string;
            redBackground: string;
            redData: string;
            redDataAlt: string;
            redText: string;
            text: string;
        };
        fontSizes: {
            default: string;
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
            small: string;
        };
        fonts: {
            default: string;
            serif: string;
        };
        lineHeights: {
            default: string;
            small: string;
        };
        radii: {
            large: string;
            small: string;
        };
        shadows: {
            large: string;
            small: string;
        };
        space: {
            excess: string;
            large: string;
            larger: string;
            largest: string;
            medium: string;
            none: string;
            small: string;
            smaller: string;
            smallest: string;
        };
        transitions: {
            default: string;
        };
        zIndices: {
            dialog: number;
            popover: number;
            select: number;
            special: number;
            table: number;
            toast: number;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        darkModeSpec: (value: unknown) => {
            [x: string]: unknown;
        };
        desktop: (value: unknown) => {
            [x: string]: unknown;
        };
        desktopX: (value: unknown) => {
            [x: string]: unknown;
        };
        hidden: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => {
            [x: string]: {
                display: string;
            };
        };
        hiddenInline: (value: "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "desktop" | "desktopX" | "wide") => {
            [x: string]: string | {
                display: string;
            };
            display: string;
        };
        hiddenSpecial: (value: "micro" | "retina" | "print") => {
            [x: string]: {
                display: string;
            };
        };
        laptop: (value: unknown) => {
            [x: string]: unknown;
        };
        laptopX: (value: unknown) => {
            [x: string]: unknown;
        };
        lightThemeSpec: (value: unknown) => {
            "@media (prefers-color-scheme: light)": unknown;
        };
        micro: (value: unknown) => {
            [x: string]: unknown;
        };
        phone: (value: unknown) => {
            [x: string]: unknown;
        };
        print: (value: unknown) => {
            [x: string]: unknown;
        };
        retina: (value: unknown) => {
            [x: string]: unknown;
        };
        tablet: (value: unknown) => {
            [x: string]: unknown;
        };
        tabletX: (value: unknown) => {
            [x: string]: unknown;
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
        visibleSpecial: (value: "micro" | "retina" | "print") => {
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
export const fadeIn: {
    (): string;
    name: string;
};
export const fadeOut: {
    (): string;
    name: string;
};
declare const TextSizes: {
    h1: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
        marginBottom: string;
    };
    h2: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
        marginBottom: string;
    };
    h3: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
        marginBottom: string;
    };
    h4: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
        marginBottom: string;
    };
    h5: {
        fontSize: string;
        lineHeight: string;
        marginBottom: string;
    };
    h6: {
        fontSize: string;
        lineHeight: string;
        marginBottom: string;
    };
    label: {
        color: string;
        display: string;
        fontSize: string;
        lineHeight: string;
        marginBottom: string;
    };
    li: {
        fontSize: string;
        lineHeight: string;
        marginBottom: string;
    };
    ol: {
        listStylePosition: string;
        marginBottom: number;
        paddingLeft: string;
    };
    p: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
        marginBottom: string;
    };
    small: {
        display: string;
        fontSize: string;
        lineHeight: string;
        marginBottom: string;
    };
    span: {
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
    strong: {
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
    ul: {
        listStylePosition: string;
        marginBottom: number;
        paddingLeft: string;
    };
};
type IThemeSpacing = keyof typeof theme.space;
interface IAvatar {
    alt?: string;
    colors?: boolean;
    css?: CSS;
    fallback: string;
    src?: string;
    width?: number;
}
interface IBadge {
    block?: boolean;
    children?: ReactNode;
    closable?: boolean;
    copy?: string | number | undefined;
    css?: CSS;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    inline?: IThemeSpacing | "auto";
    link?: boolean;
    loading?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
    small?: boolean;
    theme?: "red" | "orange" | "purple" | "blue" | "green" | "border" | "default" | "alternate";
}
interface IBox {
    children: ReactNode;
    closable?: boolean;
    css?: CSS;
    header?: ReactNode;
    image?: string;
    imageAlt?: ImageProps["alt"];
    imageCTA?: string;
    imageFit?: CSSProperties["objectFit"];
    imageHeight?: string;
    imagePosition?: CSSProperties["objectPosition"];
    imageSizes?: ImageProps["sizes"];
    imageTarget?: "_blank" | "_self";
    loading?: boolean;
    minimal?: boolean;
    theme?: "default" | "success" | "warning" | "error" | "transparent" | "fill";
}
interface IButton extends ComponentPropsWithoutRef<"button"> {
    block?: boolean;
    css?: CSS;
    external?: boolean;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    inline?: IThemeSpacing | "auto";
    loading?: boolean;
    small?: boolean;
    theme?: "default" | "fill" | "minimal" | "solid";
}
interface ICode {
    children: ReactNode;
    css?: CSS;
}
interface IDialog {
    children: ReactNode;
    close?: () => void;
    css?: CSS;
    disabled?: boolean;
    small?: boolean;
    title: string;
    trigger: ReactNode;
}
interface IDivider {
    bottom?: IThemeSpacing;
    css?: CSS;
    top?: IThemeSpacing;
}
interface IField extends ComponentPropsWithRef<"textarea"> {
    copy?: boolean;
    css?: CSS;
    error?: boolean;
    errorMessage?: string;
    loading?: boolean;
    reset?: boolean;
    resetFunction?: () => void;
    submit?: string;
    submitFunction?: (value: string) => void | Promise<void> | unknown;
    submitValid?: (value: string) => boolean;
    success?: boolean;
    successMessage?: string;
    warning?: boolean;
    warningMessage?: string;
    width?: number | string;
}
interface IForm extends ComponentPropsWithRef<"form"> {
    children: ReactNode;
    css?: CSS;
    disabled?: boolean;
    listen?: boolean;
    submit?: string;
    submitFunction: () => void | Promise<void> | unknown;
    submitValid?: boolean;
}
interface IImage extends ImageProps {
    borderRadius?: keyof typeof theme.radii;
    css?: CSS;
    fill?: boolean;
    fillFit?: CSSProperties["objectFit"];
    fillHeight?: string | number;
    fillPosition?: CSSProperties["objectPosition"];
}
interface IInput extends ComponentPropsWithRef<"input"> {
    copy?: boolean;
    css?: CSS;
    error?: boolean;
    errorMessage?: string;
    icon?: ReactNode;
    listen?: boolean;
    loading?: boolean;
    reset?: boolean;
    resetFunction?: () => void;
    reveal?: boolean;
    submit?: string;
    submitFunction?: (value: string) => void | Promise<void> | unknown;
    submitValid?: (value: string) => boolean;
    success?: boolean;
    successMessage?: string;
    warning?: boolean;
    warningMessage?: string;
    width?: number | string;
}
interface ILoading {
    horizontal?: "left" | "right";
    stroke?: string;
    vertical?: "top" | "bottom";
    width?: number | string;
}
interface ILogo {
    css?: CSS;
    height?: number | string;
    inline?: IThemeSpacing | "auto";
    width?: number | string;
}
interface IPlaces extends IInput {
    apiKey: string;
    country?: string | string[];
    handleAutocomplete?: (data: {
        address: string;
        city: string;
        restrictedAddress: string;
        state: string;
    } | null) => void;
    restrict?: boolean;
}
interface IPopover {
    children: ReactNode;
    css?: CSS;
    disabled?: boolean;
    horizontal?: "left" | "right" | "center";
    minimal?: boolean;
    trigger: ReactNode;
    type?: "click" | "hover";
    vertical?: "top" | "bottom";
    width?: number | string;
}
interface IProvider {
    children: ReactNode;
    css?: CSS;
    dark?: boolean;
}
interface ISelect {
    css?: CSS;
    disabled?: boolean;
    filter?: boolean;
    height?: number | string;
    horizontal?: "left" | "right" | "center";
    label?: string;
    last?: boolean;
    loading?: boolean;
    onSelection?: (value: string, label: string) => void;
    options: Array<{
        icon?: ReactNode;
        iconPosition?: "left" | "right";
        label: string;
        value: string;
    }>;
    selection?: string[];
    trigger: ReactNode;
    vertical?: "top" | "bottom";
    width?: number | string;
}
interface IStack {
    align?: CSSProperties["textAlign"];
    as?: keyof JSX.IntrinsicElements;
    bottom?: IThemeSpacing;
    children: ReactNode;
    className?: string;
    css?: CSS;
    direction?: "row" | "column";
    flex?: CSSProperties["alignItems"];
    flexduo?: boolean;
    minimal?: boolean;
    noPrint?: boolean;
    offset?: number;
    offsetDesktop?: number;
    offsetLaptop?: number;
    offsetPhone?: number;
    offsetTablet?: number;
    offsetWide?: number;
    top?: IThemeSpacing;
    width?: number;
    widthDesktop?: number;
    widthLaptop?: number;
    widthPhone?: number;
    widthTablet?: number;
    widthWide?: number;
}
interface ITable {
    bodyChildren?: Array<Array<{
        label?: ReactNode;
        value: string | number;
        width?: string | number;
    }>>;
    collapse?: boolean;
    collapseDisabled?: number[];
    css?: CSS;
    defaultDirection?: "asc" | "desc";
    defaultLimit?: 10 | 25 | 50 | 100 | 200;
    defaultSort?: number;
    filters?: ReactNode;
    headChildren?: Array<string>;
    header?: {
        count?: string | number;
        options?: ReactNode;
        title: string;
    } | null;
    identifier?: string;
    kbd?: boolean;
    loading?: boolean;
    pagination?: boolean;
    restrictLimit?: number;
    rowNumbers?: boolean;
    slim?: boolean;
    sortDisabled?: number[];
    sortable?: boolean;
}
interface IText extends ComponentPropsWithoutRef<"div"> {
    accent?: boolean;
    as?: keyof typeof TextSizes;
    bottom?: IThemeSpacing;
    children: ReactNode;
    css?: CSS;
    highlight?: "red" | "orange" | "purple" | "blue" | "green" | "default" | "alternate";
    inline?: IThemeSpacing | "auto";
    link?: "minimal" | "default" | "alternate";
    override?: keyof typeof TextSizes;
    top?: IThemeSpacing;
}
interface IView {
    bottom?: IThemeSpacing;
    children: ReactNode;
    container?: boolean;
    css?: CSS;
    gradient?: boolean;
    inverted?: boolean;
    noPrint?: boolean;
    top?: IThemeSpacing;
}
interface IIcon {
    css?: CSS;
    forceColor?: keyof typeof theme.colors;
    forceSize?: number;
    icon: ReactNode;
    inline?: IThemeSpacing | "auto";
}
export function Badge({ closable, icon, iconPosition, loading, theme, small, inline, link, block, css, onClick, children, copy, }: IBadge): JSX.Element | null;
export function Avatar({ src, alt, fallback, width, css, colors, }: IAvatar): JSX.Element;
export function Box({ image, imageAlt, imageCTA, imageFit, imageSizes, imageHeight, imagePosition, imageTarget, css, header, loading, theme, children, minimal, closable, }: IBox): JSX.Element | null;
export function Button({ icon, iconPosition, loading, small, theme, disabled, inline, children, block, external, css, onClick, ...rest }: IButton): JSX.Element;
export function Code({ children, css, ...rest }: ICode): JSX.Element;
export function Dialog({ css, trigger, children, title, disabled, small, }: IDialog): JSX.Element;
export function Divider({ top, bottom, css, ...rest }: IDivider): JSX.Element;
export function Field({ copy, disabled, placeholder, width, css, value, onChange, success, successMessage, warning, warningMessage, reset, resetFunction, error, errorMessage, loading, submit, submitFunction, submitValid, rows, cols, }: IField): JSX.Element;
export function Form({ children, css, disabled, listen, ref, submit, submitFunction, submitValid, ...rest }: IForm): JSX.Element;
export function Image({ css, borderRadius, fill, fillFit, fillPosition, fillHeight, quality, ...rest }: IImage): JSX.Element;
export function Icon({ css, inline, forceColor, forceSize, icon }: IIcon): JSX.Element;
export function Input({ copy, icon, ref, type, disabled, placeholder, width, css, value, onChange, success, successMessage, warning, warningMessage, error, errorMessage, reveal, loading, submit, submitFunction, submitValid, listen, reset, resetFunction, }: IInput): JSX.Element;
export function Loading({ width }: ILoading): JSX.Element;
export function LoadingOverlay({ vertical, horizontal, width, }: ILoading): JSX.Element;
export function Logo({ height, width, css, inline, ...rest }: ILogo): JSX.Element;
export function LogoIcon({ height, width, inline, css, ...rest }: ILogo): JSX.Element;
export function Places({ placeholder, country, restrict, apiKey, handleAutocomplete, css, ...rest }: IPlaces): JSX.Element;
export function Popover({ css, trigger, children, type, disabled, horizontal, vertical, width, minimal, }: IPopover): JSX.Element;
export function Provider({ children, css, dark }: IProvider): JSX.Element;
export function Select({ options, css, onSelection, label, disabled, selection, width, height, horizontal, vertical, trigger, loading, last, }: ISelect): JSX.Element;
export function Stack({ direction, align, top, bottom, flex, flexduo, minimal, width, children, offset, widthPhone, offsetPhone, widthTablet, offsetTablet, widthLaptop, offsetLaptop, widthDesktop, offsetDesktop, widthWide, className, offsetWide, css, noPrint, ...rest }: IStack): JSX.Element;
export function Table({ header, filters, headChildren, bodyChildren, css, collapse, collapseDisabled, sortable, sortDisabled, defaultSort, defaultDirection, rowNumbers, slim, loading, pagination, restrictLimit, kbd, defaultLimit, identifier, ...rest }: ITable): JSX.Element;
export function Text({ accent, top, bottom, highlight, inline, as, override, css, children, link, ...rest }: IText): JSX.Element;
export function View({ container, inverted, gradient, top, bottom, css, children, noPrint, }: IView): JSX.Element;

//# sourceMappingURL=index.d.ts.map
