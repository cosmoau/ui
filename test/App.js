import * as UI from '../src/index.tsx';

import '../fonts.css';
import { Moon } from 'phosphor-react';

export function App() {
  function handleSubmit(value) {
    // eslint-disable-next-line no-alert
    alert(value);
  }
  return (
    <UI.Context>
      <UI.Block theme='alternate' bottom={10} top={10}>
        <UI.Section>
          <UI.Column
            width={50}
            css={{
              br: '$border300',
            }}>
            <UI.Element>
              <UI.Input icon={<Moon />} />
            </UI.Element>
            <UI.Element>
              <UI.Input type='number' />
            </UI.Element>
            <UI.Element>
              <UI.Textarea />
            </UI.Element>
          </UI.Column>
          <UI.Column
            width={50}
            css={{
              br: '$border300',
            }}>
            <UI.Input copy />
          </UI.Column>
        </UI.Section>
      </UI.Block>

      <UI.Cookies token={Math.random()} />
    </UI.Context>
  );
}
