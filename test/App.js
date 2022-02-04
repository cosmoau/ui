import * as UI from '../src/index.tsx';

import '../fonts.css';

export function App() {
  return (
    <UI.Context>
      <UI.Block theme='alternate' top={1.5} bottom={6}>
        <UI.Section>
          <UI.Column align='left'>
            <UI.Submenu
              id='plans1'
              passKey='plans1'
              options={[
                {
                  name: 'Plans',
                  value: '/plans',
                },
                {
                  name: 'Services',
                  value: '/services',
                },
                {
                  name: 'Estimates',
                  value: '/evaluate',
                },
                {
                  name: 'Partnerships',
                  value: '/partnerships',
                },
              ]}
              trigger={
                <>
                  <UI.Heading level={5} inline inlineSpacer={2}>
                    Product
                  </UI.Heading>
                </>
              }
            />
          </UI.Column>
          <UI.Column top={3}>
            <UI.Textarea copy />
            <UI.Input copy />
          </UI.Column>
        </UI.Section>
      </UI.Block>
      <UI.Block top={6} bottom={6}>
        <UI.Section>
          <UI.Column align='center'>
            <UI.Submenu
              id='plans1'
              passKey='plans1'
              align='center'
              options={[
                {
                  name: 'Plans',
                  value: '/plans',
                },
                {
                  name: 'Services',
                  value: '/services',
                },
                {
                  name: 'Estimates',
                  value: '/evaluate',
                },
                {
                  name: 'Partnerships',
                  value: '/partnerships',
                },
              ]}
              trigger={
                <>
                  <UI.Heading level={5} inline inlineSpacer={2}>
                    Product
                  </UI.Heading>
                </>
              }
            />
            <UI.Submenu
              id='plans1'
              passKey='plans1'
              align='right'
              options={[
                {
                  name: 'Plans',
                  value: '/plans',
                },
                {
                  name: 'Services',
                  value: '/services',
                },
                {
                  name: 'Estimates',
                  value: '/evaluate',
                },
                {
                  name: 'Partnerships',
                  value: '/partnerships',
                },
              ]}
              trigger={
                <>
                  <UI.Heading level={5} inline>
                    Product
                  </UI.Heading>
                </>
              }
            />
          </UI.Column>
        </UI.Section>
      </UI.Block>

      <UI.Cookies token='hey' />
    </UI.Context>
  );
}
