import { CSS } from '@stitches/react/types/css-util';
import { LinkProps } from 'next/link';
import { ReactNode } from 'react';
export interface Props extends LinkProps {
    children: ReactNode;
    css?: CSS;
    cssActive?: CSS;
    cssInactive?: CSS;
    hover?: boolean;
    id?: string;
}
export default function Active({ children, css, cssActive, cssInactive, hover, href, id, ...props }: Props): JSX.Element;
//# sourceMappingURL=Typography.Active.d.ts.map