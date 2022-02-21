import * as React from 'react';

import * as UI from '../src/index.tsx';

import '../fonts.css';

export function App() {
  return (
    <UI.Context>
      <UI.Block bottom={10} theme='alternate' top={10}>
        <UI.Section>
          <UI.Column></UI.Column>
        </UI.Section>
      </UI.Block>
    </UI.Context>
  );
}
