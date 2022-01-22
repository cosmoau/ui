import React from 'react';

import { Loading } from '../Loading';

export interface Props {
  data: number;
}

function Money({ data }: Props): JSX.Element {
  if (data === undefined) return <Loading />;
  else if (isNaN(data)) return <Loading />;
  else return <>${Math.round(data).toLocaleString()}.00 </>;
}
export default Money;
