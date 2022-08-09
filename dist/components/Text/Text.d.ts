import { ReactNode } from 'react';
import { DefaultProps } from '../../stitches.config';
export interface Props extends Omit<DefaultProps, 'spacing'> {
    children: ReactNode;
    bold?: boolean;
    accent?: boolean;
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'span';
    top?: DefaultProps['spacing'];
    bottom?: DefaultProps['spacing'];
    inline?: DefaultProps['spacing'] | 'auto';
    link?: 'border' | 'borderHover';
}
export default function Text(props: Props): JSX.Element;
//# sourceMappingURL=Text.d.ts.map