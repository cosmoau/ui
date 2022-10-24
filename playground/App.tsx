/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ArrowRight } from 'phosphor-react';
import React, { ReactElement } from 'react';

import {
  Provider,
  Stack,
  View,
  Table,
  Badge,
  Button,
  Text,
  Input,
  Box,
  Divider,
  Dropdown,
  Dialog,
  Popover,
} from '../src/index';

export function App(): ReactElement {
  return (
    <Provider locked='light'>
      <View container>
        <Stack direction='row' flex='center' top='4'>
          <Stack direction='column'>
            <Box>
              <Divider bottom='6' top='6' />
              <Text as='h1' bottom='6' override='h6'>
                Airbnb, Stayz, Booking.com and Homes & Villas Management
              </Text>
              <Text as='h2'>
                Make your short-term rental listings work for you, without the hassle
              </Text>
              <Text as='h3'>
                Make your short-term rental listings work for you, without the hassle
              </Text>
              <Text as='h4'>
                Make your short-term rental listings work for you, without the hassle
              </Text>
              <Text as='h5'>
                Make your short-term rental listings work for you, without the hassle
              </Text>
              <Text as='h6'>
                Make your short-term rental listings work for you, without the hassle
              </Text>
              <Text as='p'>
                Make your short-term rental listings work for you, without the hassle
              </Text>
              <Text as='small'>
                Make your short-term rental listings work for you, without the hassle
              </Text>

              <Stack align='center'>
                <Input
                  listen
                  submit='Alert'
                  submitFunction={() => alert('lol')}
                  submitValid
                />
              </Stack>
            </Box>
            <Button ariaLabel='button' icon={<ArrowRight />} iconPosition='right'>
              Button
            </Button>
            <Button ariaLabel='button' icon={<ArrowRight />} iconPosition='right' small>
              Button
            </Button>
            <Dialog
              trigger={
                <Button
                  ariaLabel='button'
                  icon={<ArrowRight />}
                  iconPosition='right'
                  small>
                  Button
                </Button>
              }>
              <Text as='h1'>
                {' '}
                Airbnb, Stayz, Booking.com and Homes & Villas Management Airbnb, Stayz,
                Booking.com and Homes & Villas Management
              </Text>
            </Dialog>
            <Dropdown
              filter
              options={[
                { label: 'Option 1', value: 'option-1' },
                { label: 'Option 2', value: 'option-2' },
                { label: 'Option 3', value: 'option-3' },
              ]}
              trigger={
                <Button ariaLabel='button' icon={<ArrowRight />}>
                  Dropdown Test
                </Button>
              }
            />

            <Button
              ariaLabel='button'
              block
              icon={<ArrowRight />}
              iconPosition='right'
              theme='fill'>
              Button
            </Button>
            <Badge theme='border'>
              Make your short-term rental listings work for you, without the hassle
            </Badge>
            <Table
              bodyChildren={[
                [
                  'John DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn Doe',
                  '32',
                  'United States',
                ],

                ['Jane Doe', '25', 'United States'],
                ['John Doe', '32', 'United States'],
                ['Jane Doe', '25', 'United States'],
                ['Jane Doe', '25', 'United States'],
                ['Jane Doe', '25', 'United States'],
                ['Jane Doe', '25', 'United States'],
                ['Jane Doe', '25', 'United States'],
                ['Jane Doe', '25', 'United States'],
              ]}
              headChildren={['Name', 'Age', 'Country']}
            />
          </Stack>
        </Stack>
      </View>
      <View container inverted>
        <Stack direction='row' flex='center' top='4'>
          <Stack direction='column' width={25}>
            <Box theme='fill'>
              <Divider bottom='6' top='6' />
              <Text accent as='h1'>
                Airbnb, Stayz, Booking.com and Homes & Villas Management
              </Text>
              <Text accent as='h2'>
                Make your short-term rental listings work for you, without the hassle
              </Text>
              <Text as='h3'>
                Make your short-term rental listings work for you, without the hassle
              </Text>
              <Text as='h4'>
                Make your short-term rental listings work for you, without the hassle
              </Text>
              <Text as='h5'>
                Make your short-term rental listings work for you, without the hassle
              </Text>
              <Text as='h6'>
                Make your short-term rental listings work for you, without the hassle
              </Text>
              <Text as='p'>
                Make your short-term rental listings work for you, without the hassle
              </Text>
              <Text as='small'>
                Make your short-term rental listings work for you, without the hassle
              </Text>

              <Stack align='center'>
                <Input
                  listen
                  submit='Alert'
                  submitFunction={() => alert('lol')}
                  submitValid
                />
              </Stack>
            </Box>
            <Button ariaLabel='button' icon={<ArrowRight />} iconPosition='right'>
              Button
            </Button>
            <Popover
              trigger={
                <Button
                  ariaLabel='button'
                  icon={<ArrowRight />}
                  iconPosition='right'
                  small>
                  Popover hover
                </Button>
              }
              type='hover'>
              <Text as='h3'>Test</Text>
            </Popover>
            <Popover
              trigger={
                <Button
                  ariaLabel='button'
                  icon={<ArrowRight />}
                  iconPosition='right'
                  small>
                  Popover hover
                </Button>
              }>
              <Text as='h3'>Test</Text>
            </Popover>
            <Dialog
              trigger={
                <Button
                  ariaLabel='button'
                  icon={<ArrowRight />}
                  iconPosition='right'
                  small>
                  Dialog
                </Button>
              }>
              <Text as='h3'>Test</Text>
            </Dialog>
            <Dropdown
              filter
              options={[
                { label: 'Option 1', value: 'option-1' },
                { label: 'Option 2', value: 'option-2' },
                { label: 'Option 3', value: 'option-3' },
              ]}
              trigger={
                <Button ariaLabel='button' icon={<ArrowRight />}>
                  Dropdown Test
                </Button>
              }
            />

            <Button
              ariaLabel='button'
              block
              icon={<ArrowRight />}
              iconPosition='right'
              theme='fill'>
              Button
            </Button>
            <Badge theme='border'>
              Make your short-term rental listings work for you, without the hassle
            </Badge>
            <Table
              bodyChildren={[
                [
                  'John DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn Doe',
                  '32',
                  'United States',
                ],

                ['Jane Doe', '25', 'United States'],
                ['John Doe', '32', 'United States'],
                ['Jane Doe', '25', 'United States'],
                ['Jane Doe', '25', 'United States'],
                ['Jane Doe', '25', 'United States'],
                ['Jane Doe', '25', 'United States'],
                ['Jane Doe', '25', 'United States'],
                ['Jane Doe', '25', 'United States'],
              ]}
              headChildren={['Name', 'Age', 'Country']}
            />
          </Stack>
        </Stack>
      </View>
    </Provider>
  );
}
