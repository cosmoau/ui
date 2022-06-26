/// <reference types="react" />
import { ImageProps } from 'next/image';
import { DefaultProps } from '../../stitches.config';
interface Props extends DefaultProps, ImageProps {
    borderRadius?: 1 | 2 | 3;
    hover?: boolean;
    fillHeight?: string | number;
}
export default function Image(props: Props): JSX.Element;
export declare const ThreesImage: typeof Image;
export {};
//# sourceMappingURL=Image.d.ts.map