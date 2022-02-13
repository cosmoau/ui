import { CSS } from '@stitches/react/types/css-util';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useRef, ReactNode } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { Heading } from '../Typography';

import stitchesShared from './Dropdown.stitches';

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
  width?: number;
}

export default function Submenu({ align = 'left', css, hover, id, options, passKey, trigger, width }: Props): JSX.Element {
  const router = useRouter();
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const path = router?.pathname || '/';

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  const { Wrapper, Trigger, GroupWrapper, ItemWrapper, IconWrapper } = stitchesShared({
    align,
    hover,
    width,
  });

  return (
    <Wrapper css={css} id={id} key={passKey} ref={ref}>
      <Trigger onClickCapture={handleClick}>{trigger}</Trigger>
      {isOpen && (
        <GroupWrapper>
          {options.map(({ value, name, icon }) => (
            <ItemWrapper key={value} className={path === value ? 'active' : ''}>
              <Link href={value} passHref>
                <a>
                  {icon ? (
                    <IconWrapper>
                      {icon}&nbsp;{' '}
                      <Heading
                        level={6}
                        inline
                        css={{
                          opacity: 1,
                        }}>
                        {name}
                      </Heading>
                    </IconWrapper>
                  ) : (
                    <Heading
                      level={6}
                      css={{
                        opacity: 1,
                      }}>
                      {name}
                    </Heading>
                  )}
                </a>
              </Link>
            </ItemWrapper>
          ))}
        </GroupWrapper>
      )}
    </Wrapper>
  );
}
