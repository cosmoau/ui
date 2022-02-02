/* eslint-disable no-alert */
import { HardDrive, MapPinLine } from 'phosphor-react';
import React, { useState } from 'react';

import * as UI from '../src/index.tsx';
import '../fonts.css';

export default function App() {
  const [active, setActive] = useState('demo1');
  const [activeLabel, setActiveLabel] = useState('Demo 1');

  function handleOptions(value, name) {
    setActive(value);
    setActiveLabel(name);
  }

  return (
    <UI.Context>
      <UI.Cookies token={Math.random()} />

      <UI.Block
        inner
        top={2}
        bottom={2}
        css={{
          bb: '$border200',
        }}>
        <UI.Section alignment='center'>
          <UI.Column baseWidth={50} phoneWidth={50}>
            <UI.Heading
              level={5}
              inline
              inlineSpacer={2}
              css={{
                fontWeight: 'bold',
              }}>
              Cosmo UI Playground
            </UI.Heading>
            <UI.Switch />
          </UI.Column>
          <UI.Column baseWidth={50} phoneWidth={50} align='right'>
            <UI.Heading level={5} align='right' inline inlineSpacer={1}>
              <UI.Active href='/'>Home</UI.Active>
            </UI.Heading>
            <UI.Heading level={5} align='right' inline>
              <UI.Active href='/about'>Other</UI.Active>
            </UI.Heading>
          </UI.Column>
        </UI.Section>
      </UI.Block>
      <UI.Block
        inner
        top={4}
        bottom={4}
        css={{
          bb: '$border200',
        }}>
        <UI.Section alignment='stretch'>
          <UI.Column>
            <UI.Heading level={2}>Typography</UI.Heading>
          </UI.Column>
        </UI.Section>
      </UI.Block>
      <UI.Block
        inner
        top={4}
        bottom={4}
        css={{
          bb: '$border200',
        }}>
        <UI.Section alignment='stretch'>
          <UI.Column>
            <UI.Heading level={2}>Accordion</UI.Heading>
            <UI.Heading level={4}>
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
          bb: '$border200',
        }}>
        <UI.Section>
          <UI.Column base={50} offset={25}>
            <UI.Heading level={2}>Active</UI.Heading>
            <UI.Heading level={4}>A link that is active when the user is on the page it links to.</UI.Heading>
            <div>
              <UI.Badge
                theme='red'
                dot='pulse'
                css={{
                  mb: '$2',
                  mr: '$1',
                }}>
                Todo - Move to Typography as a component called Link
              </UI.Badge>
            </div>
            <UI.Card
              border
              css={{
                mt: '$2',
              }}>
              <UI.Heading level={5} align='right' inline inlineSpacer={2}>
                <UI.Active href='/s'>Here</UI.Active>
              </UI.Heading>
              <UI.Heading level={5} align='right' inline>
                <UI.Active href='/about'>Other</UI.Active>
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
          bb: '$border200',
        }}>
        <UI.Section>
          <UI.Column>
            <UI.Heading level={2}>Alert</UI.Heading>
            <UI.Heading level={4}>A modal with a required callback, typically confirm or cancel.</UI.Heading>
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
          bb: '$border200',
        }}>
        <UI.Section>
          <UI.Column>
            <UI.Heading level={2}>Badge</UI.Heading>
            <UI.Heading level={4}>
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
          bb: '$border200',
        }}>
        <UI.Section>
          <UI.Column>
            <UI.Heading level={2}>Button</UI.Heading>
            <UI.Heading level={4}>A button that can be used in any context.</UI.Heading>
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
        theme='dark'
        top={4}
        bottom={4}
        css={{
          bb: '$border200',
        }}>
        <UI.Section>
          <UI.Column>
            <UI.Heading level={2}>Card</UI.Heading>
            <UI.Heading level={4}>
              A card is used for any content that needs to be grouped together in a single area.
            </UI.Heading>
            <UI.Card border theme='navy'>
              <UI.Heading level={5}>Card, with border</UI.Heading>
            </UI.Card>
          </UI.Column>
        </UI.Section>
      </UI.Block>
      <UI.Block
        inner
        top={4}
        bottom={4}
        css={{
          bb: '$border200',
        }}>
        <UI.Section>
          <UI.Column>
            <UI.Heading level={2}>Checkbox</UI.Heading>
            <UI.Heading level={4}>A checkbox that can be used in any context, singularly.</UI.Heading>
            <UI.Card border theme='navy'>
              <UI.Checkbox checked>Check me</UI.Checkbox>
              <UI.Checkbox>Check me</UI.Checkbox>
              <UI.Checkbox disabled>
                <UI.Heading level={5}>Check me</UI.Heading>
              </UI.Checkbox>
            </UI.Card>
          </UI.Column>
        </UI.Section>
      </UI.Block>
      <UI.Block
        inner
        top={4}
        bottom={4}
        css={{
          bb: '$border200',
        }}>
        <UI.Section>
          <UI.Column align='right'>
            <UI.Heading level={2}>Dropdown</UI.Heading>
            <UI.Heading level={4}>A dropdown that can be used in any context.</UI.Heading>
            <UI.Card
              border
              css={{
                textAlign: 'center',
              }}>
              <div
                style={{
                  textAlign: 'center',
                }}>
                <UI.Dropdown
                  options={[
                    {
                      name: 'Demo 1',
                      value: 'demo1',
                    },
                    {
                      name: 'Demo 2',
                      value: 'demo2',
                    },
                    {
                      name: 'Demo 3',
                      value: 'demo3',
                    },
                  ]}
                  label={activeLabel}
                  actions={handleOptions}
                  align='center'
                  passKey='keys3'
                />
              </div>
            </UI.Card>
          </UI.Column>
        </UI.Section>
      </UI.Block>
      <UI.Block
        inner
        top={4}
        bottom={4}
        css={{
          bb: '$border200',
        }}>
        <UI.Section>
          <UI.Column>
            <UI.Heading level={2}>Dialog</UI.Heading>
            <UI.Heading level={4}>A modal with completely optional content and function.</UI.Heading>
            <UI.Card
              border
              css={{
                mt: '$2',
              }}>
              <UI.Dialog
                trigger={<UI.Button icon={<HardDrive size={25} />}>Open</UI.Button>}
                title='Are you sure?'
                description='This action cannot be undone. This will permanently delete your account and remove your data from our servers.'>
                <UI.Heading level={1}>Heyyyy</UI.Heading>
              </UI.Dialog>
            </UI.Card>
          </UI.Column>
        </UI.Section>
      </UI.Block>
      <UI.Block
        inner
        top={4}
        bottom={4}
        css={{
          bb: '$border200',
        }}>
        <UI.Section>
          <UI.Column>
            <UI.Heading level={2}>Input</UI.Heading>
            <UI.Heading level={4}>A input that can be used in any context.</UI.Heading>
            <UI.Card border>
              <UI.Input
                name='password'
                type='password'
                reveal
                size='large'
                loader
                copy
                submit
                reset
                icon={<MapPinLine size={22} />}
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
          bb: '$border200',
        }}>
        <UI.Section>
          <UI.Column>
            <UI.Heading level={2}>Percentages</UI.Heading>
            <UI.Heading level={4}>
              A simple formatter to show percentage differences without the clunky code.
            </UI.Heading>
            <UI.Card border>
              <UI.Percentages numberA={222225.22} numberB={503444656} showDollarDifference toFixed={5} />
            </UI.Card>
          </UI.Column>
        </UI.Section>
      </UI.Block>

      <UI.Block
        inner
        top={4}
        bottom={4}
        css={{
          bb: '$border200',
        }}>
        <UI.Section>
          <UI.Column>
            <UI.Heading level={2}>Tooltip</UI.Heading>
            <UI.Heading level={4}>A tooltip that can be used in any context.</UI.Heading>
            <UI.Card border>
              <UI.Tooltip type='hover' trigger={<UI.Button>Open</UI.Button>} passKey='33333'>
                lorem ipsum
              </UI.Tooltip>
            </UI.Card>
          </UI.Column>
        </UI.Section>
      </UI.Block>
      <UI.Block
        inner
        top={4}
        bottom={4}
        css={{
          bb: '$border200',
        }}>
        <UI.Section>
          <UI.Column>
            <UI.Heading level={2}>Textarea</UI.Heading>
            <UI.Heading level={4}>A restricted textarea.</UI.Heading>
            <UI.Card border>
              <UI.Textarea copy />
            </UI.Card>
          </UI.Column>
        </UI.Section>
      </UI.Block>
      <UI.Block
        inner
        top={4}
        bottom={4}
        css={{
          bb: '$border200',
        }}>
        <UI.Section>
          <UI.Column>
            <UI.Heading level={2}>Submenu</UI.Heading>
            <UI.Heading level={4}>A submenu.</UI.Heading>
            <UI.Card border>
              <UI.Submenu
                trigger={<UI.Button icon={<HardDrive size={25} />}>Open</UI.Button>}
                options={[
                  {
                    name: 'Demo 1',
                    value: '/demo1',
                    icon: <HardDrive size={25} />,
                  },
                  {
                    name: 'Demo 2',
                    value: '/demo2',
                  },
                  {
                    name: 'Demo 3',
                    value: '/demo3',
                  },
                ]}
                header={
                  <UI.Heading level={5}>
                    {activeLabel} ({active})
                  </UI.Heading>
                }
                passKey='keys2'
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
          bb: '$border200',
        }}>
        <UI.Section>
          <UI.Column>
            <UI.Heading level={2}>🔥 Tasks</UI.Heading>
            <UI.Card border>
              <div>
                <UI.Badge
                  theme='border'
                  dot='pulse'
                  dotColor='yellow'
                  css={{
                    mb: '$2',
                  }}>
                  Alphabetical ordering of prop types
                </UI.Badge>
              </div>
            </UI.Card>
          </UI.Column>
        </UI.Section>
      </UI.Block>
    </UI.Context>
  );
}
