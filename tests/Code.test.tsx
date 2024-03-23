import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Code } from "../src/index";

describe('Code', () => {
    it('mounts without errors', () => {
        const codeText = 'const example = "Hello, World!";';

        // Render the Code component
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { getByText } = render(<Code>{codeText}</Code>);

        // Check if the code text is present in the document
        expect(getByText(codeText)).toBeInTheDocument();

        // Check if the copy button is present in the document
        expect(getByText('Copy')).toBeInTheDocument();
    });
});
