import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Accordion } from "../src/index";

describe('Accordion', () => {
    it('mounts without errors', () => {
        const options = [
            {
                description: 'Test Description',
                title: 'Test Title',
            },
        ];

        // Render the Accordion component
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { getByText } = render(<Accordion options={options} />);

        // Check if the title of the accordion item is present in the document
        expect(getByText('Test Title')).toBeInTheDocument();
    });
});
