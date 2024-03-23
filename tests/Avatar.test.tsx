import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Avatar } from "../src/index";

describe('Avatar', () => {
    it('mounts without errors', () => {
        const fallbackText = 'AB';

        // Render the Avatar component without a source image
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { getByText } = render(<Avatar fallback={fallbackText} />);

        // Check if the fallback text is present in the document
        expect(getByText(fallbackText)).toBeInTheDocument();
    });
});
