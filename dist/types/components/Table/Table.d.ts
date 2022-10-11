import { ReactNode } from 'react';
export interface Props {
    headChildren?: Array<string>;
    bodyChildren: Array<Array<ReactNode | string>>;
    sort?: boolean;
}
export default function Table(props: Props): JSX.Element;
//# sourceMappingURL=Table.d.ts.map