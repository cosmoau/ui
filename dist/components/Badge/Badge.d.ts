/** @format */
import { ReactNode } from 'react';
import { DefaultProps } from '../../stitches.config';
export interface Props extends Omit<DefaultProps, 'spacing'> {
    children: ReactNode;
    loading?: boolean;
    theme?: 'red' | 'orange' | 'pink' | 'purple' | 'blue' | 'green' | 'border' | 'borderHover';
    onClick?: any;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    inline?: DefaultProps['spacing'] | 'auto';
    dot?: boolean | 'pulse';
    dotColor?: 'red' | 'orange' | 'pink' | 'purple' | 'blue' | 'green' | 'borderHover';
}
export default function Badge(props: Props): JSX.Element;
//# sourceMappingURL=Badge.d.ts.map