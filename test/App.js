import { ArrowRight } from 'phosphor-react';

import * as UI from '../src/index.tsx';

import '../fonts.css';

export function App() {
  return (
    <UI.Context switchable>
      <UI.Block theme='alternate' top={7} bottom={7}>
        <UI.Section>
          <UI.Column width={60} offset={20} offsetTablet='0' widthTablet={40} offsetLaptop='0' align='center'>
            <UI.Heading level={2}>Imagine earning more, by doing less</UI.Heading>
            <UI.Heading level={4}>
              We make it happen every day. There are only so many hours in a day and you&apos;re a busy person. We take the load off your shoulders, capture the opportunities and
              deliver you the results you deserve.
            </UI.Heading>
            <UI.Switch />
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
      <UI.Block top={1.5} bottom={6}>
        <UI.Section>
          <UI.Column top={3}>
            <UI.Button
              icon={<ArrowRight />}
              iconPosition='right'
              css={{
                mt: '$7',
              }}>
              heysdsjkfkjsdfjkdsfkjdsjkskjdsjka
            </UI.Button>
            <UI.Button
              icon={<ArrowRight />}
              iconPosition='left'
              css={{
                mt: '$7',
              }}>
              heysdsjkfkjsdfjkdsfkjdsjkskjdsjka
            </UI.Button>
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

      <UI.Cookies token='hey' />
    </UI.Context>
  );
}
