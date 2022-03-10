import { CSS } from '@stitches/react/types/css-util';
import { useRouter } from 'next/router';
import React, { useState, useRef, ReactNode } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { Heading } from '../Typography';

import DropdownStyles from './Dropdown.styles';

export interface Props {
  align?: 'left' | 'right' | 'center';
  css?: CSS;
  hover?: boolean;
  id?: string;
  options: Array<{
    icon?: ReactNode;
    name: string;
    value: string;
  }>;
  passKey: string;
  trigger: ReactNode;
  width?: number | string;
}

const { Wrapper, TriggerWrapper, GroupWrapper, ItemWrapper, IconWrapper } = DropdownStyles();

export default function Submenu({ align = 'left', css, hover, id, options, passKey, trigger, width }: Props): JSX.Element {
  const router = useRouter();
  const ref = useRef(null);
  const [isShown, setIsShown] = useState(false as boolean);

  const path = router?.pathname || '/';

  const handleClick = (): void => {
    setIsShown(!isShown);
  };

  const handleNavigate = (value: string): void => {
    router.push(value);
    setIsShown(false);
  };

  useOnClickOutside(ref, () => {
    setIsShown(false);
  });

  return (
    <Wrapper css={css} id={id} key={passKey} ref={ref}>
      <TriggerWrapper hover={hover} onClickCapture={handleClick}>
        {trigger}
      </TriggerWrapper>
      {isShown && (
        <GroupWrapper
          animation={isShown}
          css={{
            minWidth: width || '15rem',
            maxWidth: width || '80rem',
            left: align === 'left' ? '0' : 'auto',
            right: align === 'right' ? '0' : 'auto',
          }}>
          {options.map(({ value, name, icon }) => (
            <ItemWrapper className={path === value ? 'active' : ''} key={value}>
              <a onClick={() => handleNavigate(value)}>
                {icon ? (
                  <IconWrapper>
                    {icon}&nbsp;{' '}
                    <Heading
                      css={{
                        opacity: 1,
                      }}
                      inline
                      level={6}>
                      {name}
                    </Heading>
                  </IconWrapper>
                ) : (
                  <Heading
                    css={{
                      opacity: 1,
                    }}
                    level={6}>
                    {name}
                  </Heading>
                )}
              </a>
            </ItemWrapper>
          ))}
        </GroupWrapper>
      )}
    </Wrapper>
  );
}
