import { CSS } from '@stitches/react/types/css-util';
import { ReactNode } from 'react';
export interface Props {
    bottom?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    children: ReactNode;
    css?: CSS;
    id?: string;
    inner?: boolean;
    theme?: 'dark' | 'alternate' | 'light';
    top?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
export default function Block({ bottom, children, css, id, inner, theme, top }: Props): JSX.Element;
//# sourceMappingURL=Layout.Block.d.ts.map