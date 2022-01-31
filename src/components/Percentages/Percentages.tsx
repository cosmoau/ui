import { TrendDown, TrendUp } from 'phosphor-react';
import React from 'react';

import { styled } from '../../Theme';
import { Badge } from '../Badge';
import Loading from '../Loading/Loading';
import { Heading } from '../Typography';

export interface Props {
  numberA: number;
  numberB: number;
  toFixed?: number;
  trendDirection?: 'up' | 'down';
  showDollarDifference?: boolean;
}

export default function Percentages({
  numberA,
  numberB,
  toFixed = 1,
  trendDirection = 'up',
  showDollarDifference = false,
}: Props): JSX.Element {
  const [loading, setLoading] = React.useState(true as boolean);
  const [value, setValue] = React.useState(0 as any);
  const [difference, setDifference] = React.useState(0 as any);
  const [differenceDirection, setDifferenceDirection] = React.useState('up' as 'up' | 'down');

  React.useEffect(() => {
    const mathPercentage = ((numberA - numberB) / numberB) * 100;
    const mathDifference = numberA - numberB;

    setValue(mathPercentage.toFixed(toFixed));
    setDifference(mathDifference.toFixed(toFixed));
    setLoading(false);

    if (mathDifference > 0) {
      if (trendDirection === 'up') {
        setDifferenceDirection('up');
      } else {
        setDifferenceDirection('down');
      }
    } else {
      if (trendDirection === 'up') {
        setDifferenceDirection('down');
      } else {
        setDifferenceDirection('up');
      }
    }

    return () => {
      setLoading(true);
    };
  }, [numberA, numberB, toFixed, trendDirection]);

  const PercentagesWrapper = styled('div', {
    display: 'inherit',
    position: 'relative',
    width: '100%',
    height: '100%',
  });

  return (
    <PercentagesWrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Badge theme={differenceDirection === 'up' ? 'green' : 'yellow'}>
            {differenceDirection === 'up' ? <TrendUp /> : <TrendDown />}
            &nbsp;{value}%
          </Badge>
          {showDollarDifference ? (
            <Heading
              level={6}
              css={{
                pt: '$1',
                opacity: 0.5,
              }}>
              ${difference.toLocaleString()}
            </Heading>
          ) : null}
        </>
      )}
    </PercentagesWrapper>
  );
}
