import { ReactNode } from 'react';
import { DefaultProps } from '../../stitches.config';
export interface Props extends DefaultProps {
    children: ReactNode | ReactNode[];
}
export default function Provider(props: Props): JSX.Element;
export declare const ThemeProvider: typeof Provider;
export declare function ProviderToggle(css: Props['css']): JSX.Element;
//# sourceMappingURL=Provider.d.ts.map