import { useState } from "react";

import { Icons } from "../../icons";
import { Button, Icon, Text } from "../../index";
import { IAccordion } from "../../types";

import {
  AccordionCTAStyled,
  AccordionContentStyled,
  AccordionHeaderStyled,
  AccordionIconStyled,
  AccordionItemStyled,
  AccordionStyled,
  AccordionTitleStyled,
} from "./styles";

export default function Accordion({ defaultOpen = null, options }: IAccordion): JSX.Element {
  const [selected, setSelected] = useState<number | null>(defaultOpen);

  const handleToggle = (index: number): void => {
    setSelected(selected === index ? null : index);
  };

  return (
    <AccordionStyled>
      {options.map((option, index) => (
        <AccordionItemStyled key={index}>
          <AccordionHeaderStyled open={selected === index} onClick={() => handleToggle(index)}>
            <AccordionTitleStyled>
              <Text as={option.as || "h4"}>{option.title}</Text>
            </AccordionTitleStyled>
            <AccordionIconStyled open={selected === index}>
              <Icon>
                <Icons.CaretDown />
              </Icon>
            </AccordionIconStyled>
          </AccordionHeaderStyled>
          <AccordionContentStyled open={selected === index}>
            {option.content || <Text>{option.description}</Text>}
            {option.cta && (
              <AccordionCTAStyled>
                {option.cta.map((cta, ctaIndex) => (
                  <a key={ctaIndex} href={cta.url} rel="noopener noreferrer" target="_blank">
                    <Button external={cta.external} inline="small" small>
                      {cta.label}
                    </Button>
                  </a>
                ))}
              </AccordionCTAStyled>
            )}
          </AccordionContentStyled>
        </AccordionItemStyled>
      ))}
    </AccordionStyled>
  );
}
