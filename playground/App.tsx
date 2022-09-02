import React, { ReactElement } from 'react';

import { Provider, Stack, View, Table, Badge, Button, Text } from '../src/index';

export function App(): ReactElement {
  return (
    <Provider>
      <View container>
        <Stack direction='row' flex='center' top='4'>
          <Stack direction='column'>
            <Text as='h1'>Airbnb, Stayz, Booking.com and Homes & Villas Management</Text>
            <Text as='h2'>No technical setup required.</Text>
            <Text as='h3'>No technical setup required.</Text>
            <Text as='h4'>No technical setup required.</Text>
            <Text as='h5'>No technical setup required.</Text>
            <Text as='h6'>No technical setup required.</Text>
            <Text as='p'>No technical setup required.</Text>
            <Text as='small'>No technical setup required.</Text>

            <Button ariaLabel='button'>Button</Button>
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
            />
          </Stack>
        </Stack>
      </View>
    </Provider>
  );
}
