/// <reference types="react" />
import { DefaultProps } from '../../stitches.config';
export interface Props extends Omit<DefaultProps, 'spacing'> {
    top?: DefaultProps['spacing'];
    bottom?: DefaultProps['spacing'];
    theme?: 'border' | 'borderHover';
}
export default function Divider(props: Props): JSX.Element;
//# sourceMappingURL=Divider.d.ts.map