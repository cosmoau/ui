import React, { ReactElement } from 'react';

import { Provider, Stack, View, Table } from '../src/index';

export function App(): ReactElement {
  return (
    <Provider>
      <View inverted container>
        <Stack direction='row' flex='center' top='4'>
          <Stack direction='column'>
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
