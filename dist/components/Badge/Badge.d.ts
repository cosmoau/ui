import { CSS } from '@stitches/react/types/css-util';
import { ReactNode } from 'react';
export interface Props {
    children: ReactNode;
    css?: CSS;
    dot?: boolean | 'pulse';
    dotColor?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink';
    id?: string;
    inline?: boolean;
    inlineSpacer?: 1 | 2 | 3 | 4 | 5 | 6;
    loader?: boolean;
    shadow?: boolean;
    theme?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink' | 'border';
}
export default function Badge({ children, css, dot, dotColor, id, inline, inlineSpacer, loader, shadow, theme }: Props): JSX.Element;
//# sourceMappingURL=Badge.d.ts.map