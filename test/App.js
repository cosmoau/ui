import * as UI from '../src/index.tsx';

import '../fonts.css';

export function App() {
  return (
    <UI.Context>
      <UI.Block top={1.5} bottom={6}>
        <UI.Section>
          <UI.Column top={3}>
            <UI.Badge
              theme='border'
              shadow
              css={{
                mt: '$12',
              }}>
              hey
            </UI.Badge>
            <UI.Heading
              level={1}
              css={{
                hidden: 'tablet',
              }}>
              Heading One - lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
            </UI.Heading>
            <UI.Heading
              level={2}
              css={{
                phone: {
                  opacity: 0.4,
                  fontStyle: 'italic',
                },
              }}>
              Heading Two - lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
            </UI.Heading>
            <UI.Heading level={3}>
              Heading Three - lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
            </UI.Heading>
            <UI.Heading level={4}>
              Heading Four - lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
            </UI.Heading>
            <UI.Heading level={5}>
              Heading Five - lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
            </UI.Heading>
            <UI.Heading level={6}>
              Heading Six - lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
            </UI.Heading>
            <UI.Text level={1}>
              Text One - lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
            </UI.Text>
            <UI.Text level={2}>
              Text Two - lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
            </UI.Text>
            <UI.Text level={3}>
              Text Three - lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
            </UI.Text>
            <UI.Tooltip passKey='lol' trigger='lol'>
              sadfdsg
            </UI.Tooltip>
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
                <UI.Heading level={5} inline inlineSpacer={2}>
                  Product
                </UI.Heading>
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
              hover
              trigger={
                <UI.Heading level={5} inline>
                  Product
                </UI.Heading>
              }
            />
          </UI.Column>
        </UI.Section>
      </UI.Block>

      <UI.Cookies token='hey' />
    </UI.Context>
  );
}
