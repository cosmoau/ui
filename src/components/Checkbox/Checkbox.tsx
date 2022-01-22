import classNames from 'classnames';
import { Check, Circle } from 'phosphor-react';
import React, { useState } from 'react';

import { Button } from '../Button';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

function Checkbox({ className, style, children }: Props): JSX.Element {
  const [checkedValue, setCheckedValue] = useState(false);

  function handleCheckedValue() {
    if (checkedValue === false) {
      setCheckedValue(true);
    } else {
      setCheckedValue(false);
    }
  }
  return (
    <div
      className={classNames('Checkbox', {
        [`${className}`]: className,
      })}
      onClick={() => handleCheckedValue()}
      key={Math.random()}
      style={style}>
      <Button>{checkedValue === false ? <Circle color='rgba(0,0,0,0.033)' /> : <Check />}</Button>
      <label>
        <div className='inline'>{children}</div>
      </label>
    </div>
  );
}
export default Checkbox;
