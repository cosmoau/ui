import * as UI from '../src/index.tsx';

import '../fonts.css';

export function App() {
  return (
    <UI.Context>
      <UI.Accordion
        options={[
          {
            content: 'hey',
            heading: 'hey',
            id: 1,
          },
        ]}>
        Hello world!
      </UI.Accordion>
    </UI.Context>
  );
}
