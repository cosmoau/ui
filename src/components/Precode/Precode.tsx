import classNames from 'classnames';
import React from 'react';

import { Column } from '../Column';
import { Section } from '../Section';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  language?: string;
  children: React.ReactNode;
}
function Precode({ className, style, label, language, children }: Props): JSX.Element {
  // todo - add syntax highlighting

  return (
    <div
      className={classNames('Precode', {
        [`${className}`]: className,
      })}
      style={style}
    >
      {label && (
        <Section minimal>
          <Column base={60} phone={60}>
            <label>{label}</label>
          </Column>
          <Column base={40} phone={40}>
            <label style={{ opacity: 0.4 }}>{language}</label>
          </Column>
        </Section>
      )}

      <pre>{children}</pre>
    </div>
  );
}
export default Precode;
