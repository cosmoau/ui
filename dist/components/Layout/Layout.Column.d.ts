import { CSS } from '@stitches/react/types/css-util';
import { ReactNode } from 'react';
export interface Props {
    align?: 'left' | 'center' | 'right' | 'justify' | 'initial' | 'inherit';
    bottom?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    children: ReactNode;
    css?: CSS;
    extra?: 'left' | 'right' | 'left-right';
    id?: string;
    minimal?: boolean;
    offset?: number;
    offsetDesktop?: number;
    offsetLaptop?: number;
    offsetPhone?: number;
    offsetTablet?: number;
    offsetWide?: number;
    top?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    width?: number;
    widthDesktop?: number;
    widthLaptop?: number;
    widthPhone?: number;
    widthTablet?: number;
    widthWide?: number;
}
export default function Column({ align, bottom, children, css, extra, id, minimal, offset, offsetDesktop, offsetLaptop, offsetPhone, offsetTablet, offsetWide, top, width, widthDesktop, widthLaptop, widthPhone, widthTablet, widthWide, }: Props): JSX.Element;
//# sourceMappingURL=Layout.Column.d.ts.map