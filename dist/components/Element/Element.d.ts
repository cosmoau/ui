import { ReactNode } from 'react';
import { DefaultProps } from '../../stitches.config';
export interface Props extends Omit<DefaultProps, 'spacing'> {
    children: ReactNode;
    top?: DefaultProps['spacing'];
    bottom?: DefaultProps['spacing'];
    flexduo?: boolean;
}
export default function Element(props: Props): JSX.Element;
//# sourceMappingURL=Element.d.ts.map