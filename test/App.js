import * as UI from '../src/index.tsx';
import '../fonts.css';

export function App() {
  return (
    <UI.Context>
      <UI.Block theme='alternate' bottom={10} top={10}>
        <UI.Section>
          <UI.Column>
            <h1>hey</h1>
          </UI.Column>
        </UI.Section>
      </UI.Block>

      <UI.Cookies token={Math.random()} />
    </UI.Context>
  );
}
