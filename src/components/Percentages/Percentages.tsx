import type * as Stitches from '@stitches/react';
import { TrendDown, TrendUp } from 'phosphor-react';
import React from 'react';

import { styled } from '../../stitches.config';
import { Badge } from '../Badge';
import Loading from '../Loading/Loading';
import { Heading } from '../Typography';

export interface Props {
  css?: Stitches.CSS;
  id?: string;
  numberA: number;
  numberB: number;
  showDollarDifference?: boolean;
  toFixed?: number;
  trendDirection?: 'up' | 'down';
}

export default function Percentages({
  css,
  id,
  numberA,
  numberB,
  showDollarDifference = false,
  toFixed = 1,
  trendDirection = 'up',
}: Props): JSX.Element {
  const [isLoading, setIsLoading] = React.useState(true as boolean);
  const [value, setValue] = React.useState(0 as any);
  const [difference, setDifference] = React.useState(0 as any);
  const [differenceDirection, setDifferenceDirection] = React.useState('up' as 'up' | 'down');

  React.useEffect(() => {
    const mathPercentage = ((numberA - numberB) / numberB) * 100;
    const mathDifference = numberA - numberB;

    setValue(mathPercentage.toFixed(toFixed));
    setDifference(mathDifference.toFixed(toFixed));
    setIsLoading(false);

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
      setIsLoading(true);
    };
  }, [numberA, numberB, toFixed, trendDirection]);

  const Wrapper = styled('div', {
    display: 'inherit',
    position: 'relative',
    width: '100%',
    height: '100%',
  });

  return (
    <Wrapper css={css} id={id}>
      {isLoading ? (
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
    </Wrapper>
  );
}
