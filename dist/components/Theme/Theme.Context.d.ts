import { CSS } from '@stitches/react/types/css-util';
import { ReactNode } from 'react';
import { theme as defaultTheme } from '../../stitches.config';
export interface Props {
    children: ReactNode;
    css?: CSS;
    switchable?: boolean;
    theme?: typeof defaultTheme;
}
export default function Context({ children, css, switchable, theme }: Props): JSX.Element;
//# sourceMappingURL=Theme.Context.d.ts.map