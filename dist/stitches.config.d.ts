/// <reference types="react" />
import type * as Stitches from '@stitches/react';
export declare const breakpoints: {
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
export declare const theme: string & {
    className: string;
    selector: string;
} & {
    colors: {
        baseBody: import("@stitches/react/types/theme").Token<"baseBody", string, "colors", "">;
        base100: import("@stitches/react/types/theme").Token<"base100", string, "colors", "">;
        base200: import("@stitches/react/types/theme").Token<"base200", string, "colors", "">;
        base300: import("@stitches/react/types/theme").Token<"base300", string, "colors", "">;
        base400: import("@stitches/react/types/theme").Token<"base400", string, "colors", "">;
        baseContrast100: import("@stitches/react/types/theme").Token<"baseContrast100", string, "colors", "">;
        baseContrast200: import("@stitches/react/types/theme").Token<"baseContrast200", string, "colors", "">;
        baseContrast300: import("@stitches/react/types/theme").Token<"baseContrast300", string, "colors", "">;
        baseContrast400: import("@stitches/react/types/theme").Token<"baseContrast400", string, "colors", "">;
        red100: import("@stitches/react/types/theme").Token<"red100", string, "colors", "">;
        red200: import("@stitches/react/types/theme").Token<"red200", string, "colors", "">;
        red300: import("@stitches/react/types/theme").Token<"red300", string, "colors", "">;
        red400: import("@stitches/react/types/theme").Token<"red400", string, "colors", "">;
        yellow100: import("@stitches/react/types/theme").Token<"yellow100", string, "colors", "">;
        yellow200: import("@stitches/react/types/theme").Token<"yellow200", string, "colors", "">;
        yellow300: import("@stitches/react/types/theme").Token<"yellow300", string, "colors", "">;
        yellow400: import("@stitches/react/types/theme").Token<"yellow400", string, "colors", "">;
        green100: import("@stitches/react/types/theme").Token<"green100", string, "colors", "">;
        green200: import("@stitches/react/types/theme").Token<"green200", string, "colors", "">;
        green300: import("@stitches/react/types/theme").Token<"green300", string, "colors", "">;
        green400: import("@stitches/react/types/theme").Token<"green400", string, "colors", "">;
        blue100: import("@stitches/react/types/theme").Token<"blue100", string, "colors", "">;
        blue200: import("@stitches/react/types/theme").Token<"blue200", string, "colors", "">;
        blue300: import("@stitches/react/types/theme").Token<"blue300", string, "colors", "">;
        blue400: import("@stitches/react/types/theme").Token<"blue400", string, "colors", "">;
        navy100: import("@stitches/react/types/theme").Token<"navy100", string, "colors", "">;
        navy200: import("@stitches/react/types/theme").Token<"navy200", string, "colors", "">;
        navy300: import("@stitches/react/types/theme").Token<"navy300", string, "colors", "">;
        navy400: import("@stitches/react/types/theme").Token<"navy400", string, "colors", "">;
        purple100: import("@stitches/react/types/theme").Token<"purple100", string, "colors", "">;
        purple200: import("@stitches/react/types/theme").Token<"purple200", string, "colors", "">;
        purple300: import("@stitches/react/types/theme").Token<"purple300", string, "colors", "">;
        purple400: import("@stitches/react/types/theme").Token<"purple400", string, "colors", "">;
        pink100: import("@stitches/react/types/theme").Token<"pink100", string, "colors", "">;
        pink200: import("@stitches/react/types/theme").Token<"pink200", string, "colors", "">;
        pink300: import("@stitches/react/types/theme").Token<"pink300", string, "colors", "">;
        pink400: import("@stitches/react/types/theme").Token<"pink400", string, "colors", "">;
        border100: import("@stitches/react/types/theme").Token<"border100", string, "colors", "">;
        border200: import("@stitches/react/types/theme").Token<"border200", string, "colors", "">;
        border300: import("@stitches/react/types/theme").Token<"border300", string, "colors", "">;
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
        9: import("@stitches/react/types/theme").Token<"9", string, "space", "">;
        10: import("@stitches/react/types/theme").Token<"10", string, "space", "">;
        11: import("@stitches/react/types/theme").Token<"11", string, "space", "">;
        12: import("@stitches/react/types/theme").Token<"12", string, "space", "">;
    };
    fonts: {
        body: import("@stitches/react/types/theme").Token<"body", string, "fonts", "">;
    };
    fontSizes: {
        h1: import("@stitches/react/types/theme").Token<"h1", string, "fontSizes", "">;
        h2: import("@stitches/react/types/theme").Token<"h2", string, "fontSizes", "">;
        h3: import("@stitches/react/types/theme").Token<"h3", string, "fontSizes", "">;
        h4: import("@stitches/react/types/theme").Token<"h4", string, "fontSizes", "">;
        h5: import("@stitches/react/types/theme").Token<"h5", string, "fontSizes", "">;
        h6: import("@stitches/react/types/theme").Token<"h6", string, "fontSizes", "">;
        t1: import("@stitches/react/types/theme").Token<"t1", string, "fontSizes", "">;
        t2: import("@stitches/react/types/theme").Token<"t2", string, "fontSizes", "">;
        t3: import("@stitches/react/types/theme").Token<"t3", string, "fontSizes", "">;
    };
    lineHeights: {
        h1: import("@stitches/react/types/theme").Token<"h1", string, "lineHeights", "">;
        h2: import("@stitches/react/types/theme").Token<"h2", string, "lineHeights", "">;
        h3: import("@stitches/react/types/theme").Token<"h3", string, "lineHeights", "">;
        h4: import("@stitches/react/types/theme").Token<"h4", string, "lineHeights", "">;
        h5: import("@stitches/react/types/theme").Token<"h5", string, "lineHeights", "">;
        h6: import("@stitches/react/types/theme").Token<"h6", string, "lineHeights", "">;
        t1: import("@stitches/react/types/theme").Token<"t1", string, "lineHeights", "">;
        t2: import("@stitches/react/types/theme").Token<"t2", string, "lineHeights", "">;
        t3: import("@stitches/react/types/theme").Token<"t3", string, "lineHeights", "">;
    };
    sizes: {
        1: import("@stitches/react/types/theme").Token<"1", string, "sizes", "">;
        2: import("@stitches/react/types/theme").Token<"2", string, "sizes", "">;
        3: import("@stitches/react/types/theme").Token<"3", string, "sizes", "">;
        4: import("@stitches/react/types/theme").Token<"4", string, "sizes", "">;
        5: import("@stitches/react/types/theme").Token<"5", string, "sizes", "">;
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
    zIndices: {
        dropdown: import("@stitches/react/types/theme").Token<"dropdown", string, "zIndices", "">;
        tooltip: import("@stitches/react/types/theme").Token<"tooltip", string, "zIndices", "">;
        alert: import("@stitches/react/types/theme").Token<"alert", string, "zIndices", "">;
        cookies: import("@stitches/react/types/theme").Token<"cookies", string, "zIndices", "">;
    };
    transitions: {
        1: import("@stitches/react/types/theme").Token<"1", string, "transitions", "">;
    };
    media: {
        phone: import("@stitches/react/types/theme").Token<"phone", string, "media", "">;
        tabletX: import("@stitches/react/types/theme").Token<"tabletX", string, "media", "">;
        tablet: import("@stitches/react/types/theme").Token<"tablet", string, "media", "">;
        laptopX: import("@stitches/react/types/theme").Token<"laptopX", string, "media", "">;
        laptop: import("@stitches/react/types/theme").Token<"laptop", string, "media", "">;
        desktopX: import("@stitches/react/types/theme").Token<"desktopX", string, "media", "">;
        desktop: import("@stitches/react/types/theme").Token<"desktop", string, "media", "">;
        wide: import("@stitches/react/types/theme").Token<"wide", string, "media", "">;
        dark: import("@stitches/react/types/theme").Token<"dark", string, "media", "">;
    };
}, css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").ExoticComponent<any> | import("react").JSXElementConstructor<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
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
    pt: (value: Stitches.ScaleValue<'space'>) => {
        paddingTop: string;
    };
    pb: (value: Stitches.ScaleValue<'space'>) => {
        paddingBottom: string;
    };
    pl: (value: Stitches.ScaleValue<'space'>) => {
        paddingLeft: string;
    };
    pr: (value: Stitches.ScaleValue<'space'>) => {
        paddingRight: string;
    };
    ptb: (value: Stitches.ScaleValue<'space'>) => {
        paddingTop: string;
        paddingBottom: string;
    };
    plr: (value: Stitches.ScaleValue<'space'>) => {
        paddingLeft: string;
        paddingRight: string;
    };
    mt: (value: Stitches.ScaleValue<'space'>) => {
        marginTop: string;
    };
    mb: (value: Stitches.ScaleValue<'space'>) => {
        marginBottom: string;
    };
    ml: (value: Stitches.ScaleValue<'space'>) => {
        marginLeft: string;
    };
    mr: (value: Stitches.ScaleValue<'space'>) => {
        marginRight: string;
    };
    mtb: (value: Stitches.ScaleValue<'space'>) => {
        marginTop: string;
        marginBottom: string;
    };
    mlr: (value: Stitches.ScaleValue<'space'>) => {
        marginLeft: string;
        marginRight: string;
    };
    bt: (value: Stitches.PropertyValue<'color'>) => {
        borderTop: string;
    };
    bb: (value: Stitches.PropertyValue<'color'>) => {
        borderBottom: string;
    };
    bl: (value: Stitches.PropertyValue<'color'>) => {
        borderLeft: string;
    };
    br: (value: Stitches.PropertyValue<'color'>) => {
        borderRight: string;
    };
    ft: (value: Stitches.ScaleValue<'fontSizes' | 'lineHeights'>) => {
        [x: string]: string | {
            fontSize: string;
        };
        fontSize: string;
        lineHeight: string;
    };
    hidden: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
        [x: string]: string | {
            display: string;
        };
        display: string;
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
}>>(...composers: { [K in keyof Composers]: Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ExoticComponent<any> | import("react").JSXElementConstructor<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    };
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]>; } : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[];
    defaultVariants?: "variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]>; } : import("@stitches/react/types/util").WideObject;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, CSS>, styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
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
    pt: (value: Stitches.ScaleValue<'space'>) => {
        paddingTop: string;
    };
    pb: (value: Stitches.ScaleValue<'space'>) => {
        paddingBottom: string;
    };
    pl: (value: Stitches.ScaleValue<'space'>) => {
        paddingLeft: string;
    };
    pr: (value: Stitches.ScaleValue<'space'>) => {
        paddingRight: string;
    };
    ptb: (value: Stitches.ScaleValue<'space'>) => {
        paddingTop: string;
        paddingBottom: string;
    };
    plr: (value: Stitches.ScaleValue<'space'>) => {
        paddingLeft: string;
        paddingRight: string;
    };
    mt: (value: Stitches.ScaleValue<'space'>) => {
        marginTop: string;
    };
    mb: (value: Stitches.ScaleValue<'space'>) => {
        marginBottom: string;
    };
    ml: (value: Stitches.ScaleValue<'space'>) => {
        marginLeft: string;
    };
    mr: (value: Stitches.ScaleValue<'space'>) => {
        marginRight: string;
    };
    mtb: (value: Stitches.ScaleValue<'space'>) => {
        marginTop: string;
        marginBottom: string;
    };
    mlr: (value: Stitches.ScaleValue<'space'>) => {
        marginLeft: string;
        marginRight: string;
    };
    bt: (value: Stitches.PropertyValue<'color'>) => {
        borderTop: string;
    };
    bb: (value: Stitches.PropertyValue<'color'>) => {
        borderBottom: string;
    };
    bl: (value: Stitches.PropertyValue<'color'>) => {
        borderLeft: string;
    };
    br: (value: Stitches.PropertyValue<'color'>) => {
        borderRight: string;
    };
    ft: (value: Stitches.ScaleValue<'fontSizes' | 'lineHeights'>) => {
        [x: string]: string | {
            fontSize: string;
        };
        fontSize: string;
        lineHeight: string;
    };
    hidden: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
        [x: string]: string | {
            display: string;
        };
        display: string;
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
}>>(type: Type, ...composers: { [K in keyof Composers]: Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    };
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]>; } : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[];
    defaultVariants?: "variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]>; } : import("@stitches/react/types/util").WideObject;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, import("@stitches/react/types/css-util").CSS<{}, {
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
    pt: (value: Stitches.ScaleValue<'space'>) => {
        paddingTop: string;
    };
    pb: (value: Stitches.ScaleValue<'space'>) => {
        paddingBottom: string;
    };
    pl: (value: Stitches.ScaleValue<'space'>) => {
        paddingLeft: string;
    };
    pr: (value: Stitches.ScaleValue<'space'>) => {
        paddingRight: string;
    };
    ptb: (value: Stitches.ScaleValue<'space'>) => {
        paddingTop: string;
        paddingBottom: string;
    };
    plr: (value: Stitches.ScaleValue<'space'>) => {
        paddingLeft: string;
        paddingRight: string;
    };
    mt: (value: Stitches.ScaleValue<'space'>) => {
        marginTop: string;
    };
    mb: (value: Stitches.ScaleValue<'space'>) => {
        marginBottom: string;
    };
    ml: (value: Stitches.ScaleValue<'space'>) => {
        marginLeft: string;
    };
    mr: (value: Stitches.ScaleValue<'space'>) => {
        marginRight: string;
    };
    mtb: (value: Stitches.ScaleValue<'space'>) => {
        marginTop: string;
        marginBottom: string;
    };
    mlr: (value: Stitches.ScaleValue<'space'>) => {
        marginLeft: string;
        marginRight: string;
    };
    bt: (value: Stitches.PropertyValue<'color'>) => {
        borderTop: string;
    };
    bb: (value: Stitches.PropertyValue<'color'>) => {
        borderBottom: string;
    };
    bl: (value: Stitches.PropertyValue<'color'>) => {
        borderLeft: string;
    };
    br: (value: Stitches.PropertyValue<'color'>) => {
        borderRight: string;
    };
    ft: (value: Stitches.ScaleValue<'fontSizes' | 'lineHeights'>) => {
        [x: string]: string | {
            fontSize: string;
        };
        fontSize: string;
        lineHeight: string;
    };
    hidden: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => {
        [x: string]: string | {
            display: string;
        };
        display: string;
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
}>>, getCssText: () => string;
export declare const darkTheme: string & {
    className: string;
    selector: string;
} & import("@stitches/react/types/stitches").ThemeTokens<{
    colors: {};
}, "">;
//# sourceMappingURL=stitches.config.d.ts.map