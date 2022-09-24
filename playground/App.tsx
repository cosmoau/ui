import { ArrowRight } from 'phosphor-react';
import React, { ReactElement } from 'react';

import { Provider, Stack, View, Table, Badge, Button, Text, Input, Box, ProviderToggle, Divider } from '../src/index';

export function App(): ReactElement {
  return (
    <Provider>
      <View container>
        <Stack direction='row' flex='center' top='4'>
          <Stack direction='column' width={25}>
            <Box>
              <Divider bottom='6' top='6' />
              <Text as='h1'>Airbnb, Stayz, Booking.com and Homes & Villas Management</Text>
              <Text as='h2'>Make your short-term rental listings work for you, without the hassle</Text>
              <Text as='h3'>Make your short-term rental listings work for you, without the hassle</Text>
              <Text as='h4'>Make your short-term rental listings work for you, without the hassle</Text>
              <Text as='h5'>Make your short-term rental listings work for you, without the hassle</Text>
              <Text as='h6'>Make your short-term rental listings work for you, without the hassle</Text>
              <Text as='p'>Make your short-term rental listings work for you, without the hassle</Text>
              <Text as='small'>Make your short-term rental listings work for you, without the hassle</Text>
              <ProviderToggle trigger={<Button ariaLabel='Toggle'>Toggle</Button>} />
              <Stack align='center'>
                <Input />
              </Stack>
            </Box>
            <Button ariaLabel='button' icon={<ArrowRight />} iconPosition='right'>
              Button
            </Button>
            <Button ariaLabel='button' icon={<ArrowRight />} iconPosition='right' small>
              Button
            </Button>
            <Button ariaLabel='button' block icon={<ArrowRight />} iconPosition='right'>
              Button
            </Button>
            <Stack flexduo>
              <Button>Test 1</Button>
              <Button>Test 2</Button>
            </Stack>
            <Badge theme='border'>Make your short-term rental listings work for you, without the hassle</Badge>
            <Table
              bodyChildren={[
                ['John DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn Doe', '32', 'United States'],

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
