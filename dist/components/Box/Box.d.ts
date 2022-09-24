/** @format */
import { ReactNode } from 'react';
import { DefaultProps } from '../../stitches.config';
export interface Props extends DefaultProps {
    children: ReactNode;
    loading?: boolean;
    image?: string;
    imageCTA?: string;
    imageHeight?: string;
    imageTarget?: '_blank' | '_self';
    imagePosition?: 'top' | 'bottom' | 'center';
    imageAlt?: string;
    hover?: boolean;
    theme?: 'default' | 'success' | 'warning' | 'error' | 'transparent' | 'fill';
}
export default function Box(props: Props): JSX.Element;
//# sourceMappingURL=Box.d.ts.map