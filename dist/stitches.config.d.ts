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
        h1: import("@stitches/react/types/theme").Token<"h1", string, "space", "">;
        h2: import("@stitches/react/types/theme").Token<"h2", string, "space", "">;
        h3: import("@stitches/react/types/theme").Token<"h3", string, "space", "">;
        h4: import("@stitches/react/types/theme").Token<"h4", string, "space", "">;
        h5: import("@stitches/react/types/theme").Token<"h5", string, "space", "">;
        h6: import("@stitches/react/types/theme").Token<"h6", string, "space", "">;
        t1: import("@stitches/react/types/theme").Token<"t1", string, "space", "">;
        t2: import("@stitches/react/types/theme").Token<"t2", string, "space", "">;
        t3: import("@stitches/react/types/theme").Token<"t3", string, "space", "">;
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
}, css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").ExoticComponent<any> | ((props: any) => import("react").ReactElement<any, any>) | (new (props: any) => import("react").Component<any, any, any>) | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
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
}>>(...composers: { [K in keyof Composers]: Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ExoticComponent<any> | ((props: any) => import("react").ReactElement<any, any>) | (new (props: any) => import("react").Component<any, any, any>) ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    };
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: (string & Record<never, never>) | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]>; } : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[];
    defaultVariants?: "variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: (string & Record<never, never>) | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]>; } : import("@stitches/react/types/util").WideObject;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, CSS>, styled: <Type extends "symbol" | "object" | "clipPath" | "filter" | "mask" | "marker" | "br" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "small" | "ruby" | "table" | import("@stitches/react/types/util").Function | "button" | "meter" | "textarea" | "style" | "progress" | "text" | "sub" | "circle" | "embed" | "pre" | "caption" | "menu" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "canvas" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menuitem" | "meta" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "q" | "rp" | "rt" | "s" | "samp" | "slot" | "script" | "section" | "select" | "source" | "span" | "strong" | "summary" | "sup" | "template" | "tbody" | "td" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "textPath" | "tspan" | "use" | "view" | import("react").ComponentClass<any, any> | import("react").FunctionComponent<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentClass<any, any> | import("react").FunctionComponent<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
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
}>>(type: Type, ...composers: { [K in keyof Composers]: Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentClass<any, any> | import("react").FunctionComponent<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    };
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: (string & Record<never, never>) | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]>; } : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[];
    defaultVariants?: "variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: (string & Record<never, never>) | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]>; } : import("@stitches/react/types/util").WideObject;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, import("@stitches/react/types/css-util").CSS<{}, {
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