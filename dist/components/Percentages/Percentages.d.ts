/// <reference types="react" />
import { CSS } from '@stitches/react/types/css-util';
export interface Props {
    css?: CSS;
    id?: string;
    numberA: number;
    numberB: number;
    showDollarDifference?: boolean;
    toFixed?: number;
    trendDirection?: 'up' | 'down';
}
export default function Percentages({ css, id, numberA, numberB, showDollarDifference, toFixed, trendDirection }: Props): JSX.Element;
//# sourceMappingURL=Percentages.d.ts.map