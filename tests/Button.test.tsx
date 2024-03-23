import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from "../src/index";

describe('Button', () => {
    it('mounts without errors', () => {
        const buttonText = 'Test Button';

        // Render the Button component
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { getByText } = render(<Button>{buttonText}</Button>);

        // Check if the button text is present in the document
        expect(getByText(buttonText)).toBeInTheDocument();
    });
});
