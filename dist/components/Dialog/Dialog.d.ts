/** @format */
import { ReactNode } from 'react';
import { DefaultProps } from '../../stitches.config';
export interface Props extends DefaultProps {
    children: ReactNode;
    trigger: ReactNode;
    locked?: boolean;
}
export default function Dialog(props: Props): JSX.Element;
//# sourceMappingURL=Dialog.d.ts.map