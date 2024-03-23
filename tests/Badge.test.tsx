import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Badge } from "../src/index";

describe('Badge', () => {
    it('mounts without errors', () => {
        const badgeText = 'Test Badge';

        // Render the Badge component
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { getByText } = render(<Badge>{badgeText}</Badge>);

        // Check if the badge text is present in the document
        expect(getByText(badgeText)).toBeInTheDocument();
    });
});
