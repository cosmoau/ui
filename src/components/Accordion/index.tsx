import { useState } from "react";

import { Icons } from "../../icons";
import { Button, Text } from "../../index";
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

export default function Accordion({ defaultOpen = [], options }: IAccordion): JSX.Element {
  const [selected, setSelected] = useState<number[]>(defaultOpen);

  const handleToggle = (index: number): void => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  return (
    <AccordionStyled>
      {options.map((option, index) => (
        <AccordionItemStyled key={index}>
          <AccordionHeaderStyled onClick={() => handleToggle(index)}>
            <AccordionTitleStyled>
              <Text as={option.as || "h4"}>{option.title}</Text>
            </AccordionTitleStyled>
            <AccordionIconStyled open={selected.includes(index)}>
              <Icons.CaretDown />
            </AccordionIconStyled>
          </AccordionHeaderStyled>
          <AccordionContentStyled open={selected.includes(index)}>
            <Text>{option.description}</Text>
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
