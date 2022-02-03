import * as UI from '../src/index.tsx';

import '../fonts.css';

export function App() {
  return (
    <UI.Context>
      <UI.Button>Hello world!</UI.Button>
    </UI.Context>
  );
}
