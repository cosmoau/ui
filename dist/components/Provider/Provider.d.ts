import { ReactNode } from 'react';
import { DefaultProps } from '../../stitches.config';
export interface Props extends DefaultProps {
    children: ReactNode | ReactNode[];
    default?: 'dark' | 'light';
    locked?: 'dark' | 'light';
    trigger?: any;
    triggerActive?: any;
}
export default function Provider(props: Props): JSX.Element;
export declare const ThemeProvider: typeof Provider;
export declare function ProviderToggle(props: Omit<Props, 'children'>): JSX.Element;
//# sourceMappingURL=Provider.d.ts.map