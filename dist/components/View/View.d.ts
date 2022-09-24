/** @format */
import { ReactNode } from 'react';
import { DefaultProps } from '../../stitches.config';
export interface Props extends Omit<DefaultProps, 'spacing'> {
    children: ReactNode;
    container?: boolean;
    top?: DefaultProps['spacing'];
    bottom?: DefaultProps['spacing'];
    inverted?: boolean;
}
export default function View(props: Props): JSX.Element;
//# sourceMappingURL=View.d.ts.map