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
          bb: '$dark300',
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
          bb: '$dark300',
        }}>
        <UI.Section alignment='stretch'>
          <UI.Column>
            <UI.Heading level={2} bottom={1}>
              Accordion
            </UI.Heading>
            <UI.Heading level={4} bottom={3}>
              A vertically stacked set of interactive headings that each reveal an associated section of content.
            </UI.Heading>
            <div>
              <UI.Badge
                theme='red'
                dot='pulse'
                css={{
                  mb: '$2',
                  mr: '$1',
                }}>
                Todo - Animation on expand
              </UI.Badge>
              <UI.Badge
                theme='yellow'
                dot='pulse'
                css={{
                  mb: '$2',
                  mr: '$1',
                }}>
                Todo - Improve appearance, particularly animating chevron
              </UI.Badge>
              <UI.Badge
                theme='navy'
                dot='pulse'
                css={{
                  mb: '$2',
                }}>
                Todo - Add support for icon in heading
              </UI.Badge>
            </div>
            <UI.Card
              border
              css={{
                mt: '$2',
              }}>
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
          bb: '$dark300',
        }}>
        <UI.Section>
          <UI.Column base={50} offset={25}>
            <UI.Heading level={2} bottom={1}>
              ActiveLink
            </UI.Heading>
            <UI.Heading level={4} bottom={3}>
              A link that is active when the user is on the page it links to.
            </UI.Heading>
            <div>
              <UI.Badge
                theme='yellow'
                dot='pulse'
                css={{
                  mb: '$2',
                }}>
                Todo - the fuck going on with the margin?
              </UI.Badge>
            </div>
            <UI.Card
              border
              css={{
                mt: '$2',
              }}>
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
        <UI.Section>
          <UI.Column>
            <UI.Heading level={2} bottom={1}>
              Alert
            </UI.Heading>
            <UI.Heading level={4} bottom={3}>
              A modal with a required callback, typically confirm or cancel.
            </UI.Heading>
            <div>
              <UI.Badge
                theme='red'
                dot='pulse'
                css={{
                  mb: '$2',
                }}>
                Todo - onclick (ref) action is applying to the entire card
              </UI.Badge>
            </div>
            <UI.Card
              border
              css={{
                mt: '$2',
              }}>
              <UI.Alert
                trigger={<UI.Button icon={<HardDrive size={25} />}>Save changes</UI.Button>}
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
      <UI.Block
        inner
        top={4}
        bottom={4}
        css={{
          bb: '$dark300',
        }}>
        <UI.Section>
          <UI.Column>
            <UI.Heading level={2} bottom={1}>
              Badge
            </UI.Heading>
            <UI.Heading level={4} bottom={3}>
              A small badge that can be used to values or a status. Can be used in any context.
            </UI.Heading>
            <UI.Card border>
              <UI.Badge dot='pulse' dotColor='red' theme='border' pulse>
                Hey
              </UI.Badge>
            </UI.Card>
          </UI.Column>
        </UI.Section>
      </UI.Block>
      <UI.Block
        inner
        top={4}
        bottom={4}
        css={{
          bb: '$dark300',
        }}>
        <UI.Section>
          <UI.Column>
            <UI.Heading level={2} bottom={1}>
              Button
            </UI.Heading>
            <UI.Heading level={4} bottom={3}>
              A button that can be used in any context.
            </UI.Heading>
            <UI.Card border>
              <UI.Button theme='red' css={{ mr: '$2' }}>
                Hey
              </UI.Button>
              <UI.Button theme='yellow' css={{ mr: '$2' }}>
                Hey
              </UI.Button>
              <UI.Button theme='green' css={{ mr: '$2' }}>
                Hey
              </UI.Button>
              <UI.Button theme='blue' css={{ mr: '$2' }}>
                Hey
              </UI.Button>
              <UI.Button theme='navy' css={{ mr: '$2' }}>
                Hey
              </UI.Button>
              <UI.Button theme='purple' css={{ mr: '$2' }}>
                Hey
              </UI.Button>
              <UI.Button theme='pink' css={{ mr: '$2' }}>
                Hey
              </UI.Button>
            </UI.Card>
          </UI.Column>
        </UI.Section>
      </UI.Block>
      <UI.Block
        inner
        top={4}
        bottom={4}
        css={{
          bb: '$dark300',
        }}>
        <UI.Section>
          <UI.Column>
            <UI.Heading level={2} bottom={3}>
              🔥 Tasks
            </UI.Heading>
            <UI.Card border>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Todo - Ensure order of props (ie, classname, css, id) and that no named classes are passed (ie .Card)
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Todo - Double check Block component
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Todo - Migrate checkbox and add test docs
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Todo - Double check Column component
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Todo - Migrate Cookies and discontinue use of Nookies (find native solution)
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Todo - Migrate Dropdown and add test docs
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Todo - Add support for icons and heading to Dropdown (and submenu)
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Todo - Setup global to be wrapped around app with https://github.com/pacocoursey/next-themes
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Todo - Migrate input, setup clearable, password, improve date input (see cosmo.pirsch.io)
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Todo - Create Tab component, which is essentially a big button with optional heading, heading opacity
                  low unless on hover - acting as a conceal with an active state. See
                  https://cosmo.pirsch.io/?domain=cosmogroup.io
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Committ and release cheatsheet (CONTRIBUTION.MD)
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Add support for numeral.js within Money
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Migrate percentages
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Migrate precode
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Migrate submenu (merge within Dropdown?)
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Migrate Tooltip, set option for hover or click to open
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Todo Migrate slide to flexible width modal called Prompt
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Migrate Textarea
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Create search component, using Prompt and Input and triggered by enter or KMD (maybe?)
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Add support for `link` to Typography component
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Migrate all typography css to the new typography component
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Setup dark mode and find way to trigger from global
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  https://www.npmjs.com/package/eslint-plugin-jsx-a11y
                </UI.Badge>
              </div>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Improve badge padding and/or line height - way to thin
                </UI.Badge>
              </div>
            </UI.Card>
          </UI.Column>
        </UI.Section>
      </UI.Block>
    </UI.Global>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
