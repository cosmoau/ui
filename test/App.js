import * as UI from '../src/index.tsx';

import '../fonts.css';

export function App() {
  return (
    <UI.Context>
      <UI.Button>Hey</UI.Button>
      <UI.Cookies token='hey' />
    </UI.Context>
  );
}
