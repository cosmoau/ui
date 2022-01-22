/* eslint-disable no-alert */
import { HardDrive } from 'phosphor-react';
import React from 'react';
import ReactDOM from 'react-dom';

import * as UI from '../src/index.tsx';

import '../src/styles/index.scss';

export default function App() {
  return (
    <>
      <UI.Main inner className='top-2 bottom-2 border-bottom'>
        <UI.Section alignment='center'>
          <UI.Column base={50} phone={33}>
            <h5 className='bolded'>Cosmo UI Playground</h5>
          </UI.Column>
          <UI.Column base={50} phone={66} className='right'>
            <h5 className='inline-spacer'>
              <UI.ActiveLink href='/' activeClassName='active'>
                Home
              </UI.ActiveLink>
            </h5>
            <h5 className='inline'>
              <UI.ActiveLink href='/fake' activeClassName='active'>
                Other
              </UI.ActiveLink>
            </h5>
          </UI.Column>
        </UI.Section>
      </UI.Main>
      <UI.Main inner className='top-4 bottom-4 border-bottom'>
        <UI.Section alignment='center'>
          <UI.Column base={50} offset={25}>
            <h2>Accordion</h2>
            <h4 className='bottom-3'>
              A vertically stacked set of interactive headings that each reveal an associated section of content.
            </h4>
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
      </UI.Main>
      <UI.Main inner className='top-4 bottom-4 border-bottom'>
        <UI.Section alignment='center'>
          <UI.Column base={50} offset={25}>
            <h2>ActiveLink</h2>
            <h4 className='bottom-3'>A link that is active when the user is on the page it links to.</h4>
            <UI.Card border>
              <h5>
                <UI.ActiveLink href='/' activeClassName='active'>
                  Home
                </UI.ActiveLink>
              </h5>
              <h5>
                <UI.ActiveLink href='/fake' activeClassName='active'>
                  Other
                </UI.ActiveLink>
              </h5>
            </UI.Card>
          </UI.Column>
        </UI.Section>
      </UI.Main>
      <UI.Main inner className='top-4 bottom-4 border-bottom'>
        <UI.Section alignment='center'>
          <UI.Column base={50} offset={25}>
            <h2>Alert</h2>
            <h4 className='bottom-3'>A modal with a required callback, typically confirm or cancel.</h4>
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
      </UI.Main>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
