/* eslint-disable no-alert */
import { HardDrive } from 'phosphor-react';
import React from 'react';
import ReactDOM from 'react-dom';

import * as UI from '../src/index.tsx';

import '../src/stitches.config';
import '../src/styles/index.scss';

export default function App() {
  return (
    <UI.Global>
      <UI.Block
        inner
        top={2}
        bottom={2}
        css={{
          bb: 2,
        }}>
        <UI.Section alignment='center'>
          <UI.Column baseWidth={50} phoneWidth={50}>
            <UI.Heading
              level={5}
              css={{
                fontWeight: 'bold',
              }}>
              Cosmo UI Playground
            </UI.Heading>
          </UI.Column>
          <UI.Column baseWidth={50} phoneWidth={50} align='right'>
            <UI.Heading level={5} align='right' inline inlineSpacer={1}>
              <UI.ActiveLink href='/' activeClassName='active'>
                Home
              </UI.ActiveLink>
            </UI.Heading>
            <UI.Heading level={5} align='right' inline>
              <UI.ActiveLink href='/fake' activeClassName='active'>
                Other
              </UI.ActiveLink>
            </UI.Heading>
          </UI.Column>
        </UI.Section>
      </UI.Block>
      <UI.Block
        inner
        top={4}
        bottom={4}
        css={{
          bb: 2,
        }}>
        <UI.Section alignment='stretch'>
          <UI.Column>
            <UI.Heading level={2} bottom={1}>
              Accordion
            </UI.Heading>
            <UI.Heading level={4} bottom={3}>
              A vertically stacked set of interactive headings that each reveal an associated section of content.
            </UI.Heading>
            <UI.Card border>
              <UI.Accordion
                options={[
                  {
                    id: 1,
                    heading: 'Heading One',
                    content: 'Content One',
                  },
                  {
                    id: 2,
                    heading: 'Heading Two',
                    content: 'Content Two',
                  },
                ]}
              />
            </UI.Card>
          </UI.Column>
        </UI.Section>
      </UI.Block>
      <UI.Block
        inner
        top={4}
        bottom={4}
        css={{
          bb: 2,
        }}>
        <UI.Section alignment='center'>
          <UI.Column base={50} offset={25}>
            <UI.Heading level={2} bottom={1}>
              ActiveLink
            </UI.Heading>
            <UI.Heading level={4} bottom={3}>
              A link that is active when the user is on the page it links to.
            </UI.Heading>
            <UI.Card border>
              <UI.Heading level={5} inline inlineSpacer={3}>
                <UI.ActiveLink href='/' activeClassName='active'>
                  Home
                </UI.ActiveLink>
              </UI.Heading>
              <UI.Heading level={5} inline>
                <UI.ActiveLink href='/fake' activeClassName='active'>
                  Other
                </UI.ActiveLink>
              </UI.Heading>
            </UI.Card>
          </UI.Column>
        </UI.Section>
      </UI.Block>
      <UI.Block
        inner
        top={4}
        bottom={4}
        css={{
          bb: 2,
        }}>
        <UI.Section alignment='center'>
          <UI.Column>
            <UI.Heading level={2} bottom={1}>
              Alert
            </UI.Heading>
            <UI.Heading level={4} bottom={3}>
              A modal with a required callback, typically confirm or cancel.
            </UI.Heading>
            <UI.Card border>
              <UI.Alert
                trigger={
                  <UI.Button>
                    <HardDrive size={25} />
                    &nbsp;Save changes
                  </UI.Button>
                }
                title='Are you sure?'
                description='This action cannot be undone. This will permanently delete your account and remove your data from our servers.'
                cancel='Cancel'
                action={
                  <UI.Button theme='red' bolded small onClick={() => alert('yay')}>
                    Go for it
                  </UI.Button>
                }></UI.Alert>
            </UI.Card>
          </UI.Column>
        </UI.Section>
      </UI.Block>
    </UI.Global>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
