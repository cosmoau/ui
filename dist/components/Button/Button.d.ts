import { CSS } from '@stitches/react/types/css-util';
import { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    css?: CSS;
    icon?: JSX.Element;
    iconPosition?: 'left' | 'right';
    id?: string;
    inline?: boolean;
    inlineSpacer?: 1 | 2 | 3 | 4 | 5 | 6;
    loader?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    theme?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink' | 'transparent' | 'dark';
}
export default function Button({ children, css, icon, iconPosition, id, inline, inlineSpacer, loader, onClick, theme, ...props }: Props): JSX.Element;
//# sourceMappingURL=Button.d.ts.map