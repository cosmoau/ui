import { CSS } from '@stitches/react/types/css-util';
import { ReactNode } from 'react';
export interface Props {
    align?: 'left' | 'center' | 'right' | 'justify' | 'initial' | 'inherit';
    bottom?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    children: ReactNode;
    css?: CSS;
    id?: string;
    top?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
export default function Element({ align, bottom, children, css, id, top }: Props): JSX.Element;
//# sourceMappingURL=Layout.Element.d.ts.map