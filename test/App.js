import * as React from 'react';

import * as UI from '../src/index.tsx';
import '../fonts.css';

export function App() {
  const [beds, setBeds] = React.useState(1);

  function handleBeds(content) {
    setBeds(content.target.value);
  }

  const inputs = <UI.Input value={beds} onChange={handleBeds} />;

  return (
    <UI.Context>
      <UI.Element>{inputs}</UI.Element>
    </UI.Context>
  );
}
