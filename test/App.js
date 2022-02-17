import * as React from 'react';

import * as UI from '../src/index.tsx';
import '../fonts.css';

export function App() {
  const [beds, setBeds] = React.useState(1);

  return (
    <UI.Context>
      <h1>{beds}</h1>
      <UI.Input value={beds} onBlur={(e) => setBeds(e.target.value)} onChange={(e) => setBeds(e.target.value)} type='password' reveal reset key='test' />
    </UI.Context>
  );
}
