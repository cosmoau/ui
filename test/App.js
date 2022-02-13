import * as UI from '../src/index.tsx';

import '../fonts.css';

export function App() {
  function handleSubmit(value) {
    // eslint-disable-next-line no-alert
    alert(value);
  }
  return (
    <UI.Context>
      <UI.Block theme='alternate' bottom={6}>
        <UI.Section>
          <UI.Column width={50} extra='right'>
            <UI.Input placeholder='Search' onSubmit={handleSubmit} submit='yay' copy />
          </UI.Column>
          <UI.Column width={50} extra='left'>
            <UI.Badge theme='navy'>
              {' '}
              Heading Two - lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
            </UI.Badge>
          </UI.Column>
        </UI.Section>
      </UI.Block>
      <UI.Block theme='alternate' bottom={6}>
        <UI.Section>
          <UI.Column width={50}>
            <UI.Badge theme='navy'>
              {' '}
              Heading Two - lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
            </UI.Badge>
          </UI.Column>
          <UI.Column width={50}>
            <UI.Badge theme='navy'>
              {' '}
              Heading Two - lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
            </UI.Badge>
          </UI.Column>
        </UI.Section>
      </UI.Block>
      <UI.Block top={6} bottom={6}>
        <UI.Section>
          <UI.Column top={3} align='center'>
            <UI.Badge theme='green' dot='pulse'>
              <UI.Element
                css={{
                  visible: 'phone',
                }}>
                Phone
              </UI.Element>
              <UI.Element
                css={{
                  visible: 'tabletX',
                }}>
                Tablet
              </UI.Element>
              <UI.Element
                css={{
                  visible: 'laptopX',
                }}>
                Laptop
              </UI.Element>
              <UI.Element
                css={{
                  visible: 'desktopX',
                }}>
                Desktop
              </UI.Element>
              <UI.Element
                css={{
                  visible: 'wide',
                }}>
                Wide
              </UI.Element>
            </UI.Badge>

            <UI.Heading level={1}>
              Heading One - lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
            </UI.Heading>
            <UI.Heading level={2}>
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
            <UI.Heading level={5} bottom={6}>
              Heading Five - lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
            </UI.Heading>
            <UI.Badge theme='border' shadow dot='pulse' dotPulse>
              ehwhjwhjefd
            </UI.Badge>
            <UI.Heading level={6} top={6}>
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

      <UI.Cookies token={Math.random()} />
    </UI.Context>
  );
}
