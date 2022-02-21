import { CSS } from '@stitches/react/types/css-util';
import { ReactNode } from 'react';
export interface Props {
    border?: boolean;
    children: ReactNode;
    css?: CSS;
    extra?: boolean;
    id?: string;
    image?: ReactNode;
    imageHeight?: string;
    loader?: boolean;
    minimal?: boolean;
    theme?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink' | 'transparent';
}
export default function Card({ css, extra, id, theme, loader, border, image, imageHeight, minimal, children }: Props): JSX.Element;
//# sourceMappingURL=Card.d.ts.map