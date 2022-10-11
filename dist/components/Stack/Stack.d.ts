import { ReactNode } from 'react';
import { DefaultProps } from '../../stitches.config';
export interface Props extends Omit<DefaultProps, 'spacing'> {
    children: ReactNode;
    direction?: 'row' | 'column';
    flex?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
    align?: 'left' | 'center' | 'right' | 'justify' | 'initial' | 'inherit';
    minimal?: boolean;
    offset?: number;
    offsetDesktop?: number;
    offsetLaptop?: number;
    offsetPhone?: number;
    offsetTablet?: number;
    offsetWide?: number;
    width?: number;
    widthDesktop?: number;
    widthLaptop?: number;
    widthPhone?: number;
    widthTablet?: number;
    widthWide?: number;
    top?: DefaultProps['spacing'];
    bottom?: DefaultProps['spacing'];
    flexduo?: boolean;
}
export default function Stack(props: Props): JSX.Element;
export declare const Element: typeof Stack;
//# sourceMappingURL=Stack.d.ts.map