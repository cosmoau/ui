import numeral from 'numeral';
import React from 'react';

import { Loading } from '../Loading';

export interface Props {
  data: number;
  numerals?: boolean;
  format?: string;
}

export default function Money({ data, numerals = false, format = '0.0a' }: Props): JSX.Element {
  const [loading, setLoading] = React.useState(true as boolean);
  const [value, setValue] = React.useState(0 as any);

  React.useEffect(() => {
    if (numerals) {
      setValue(numeral(data).format(format));
    } else {
      setValue(data.toLocaleString());
    }
    setLoading(false);

    return () => {
      setLoading(true);
    };
  }, [data, numerals, format]);

  return <>{loading ? <Loading /> : <>${value}</>}</>;
}
