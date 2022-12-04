import { When } from '@components/shared/When'

import { Chevron } from '@assets/icons/Chevron'

import { useAccordion } from './hooks/useAccordion'

import {
  AccordionContainer,
  AccordionItem,
  AccordionItemHeader,
  AccordionItemHeaderTitle,
  AccordionItemHeaderIcon,
  AccordionItemBody,
} from './styled'

import { AccordionProps } from './types'

export const Accordion = ({
  items,
  variant,
  initialTab = 1,
}: AccordionProps) => {
  const { activeTab, setActiveTab } = useAccordion({ initialTab })

  return (
    <AccordionContainer>
      {items.map(({ id, title, content }) => (
        <AccordionItem variant={variant} key={id}>
          <AccordionItemHeader
            onClick={() => {
              setActiveTab((activeTab) => (activeTab !== id ? id : 0))
            }}
          >
            <AccordionItemHeaderTitle>{title}</AccordionItemHeaderTitle>
            <AccordionItemHeaderIcon isActive={activeTab === id}>
              <Chevron />
            </AccordionItemHeaderIcon>
          </AccordionItemHeader>
          <When value={true}>
            <AccordionItemBody isActive={activeTab === id}>
              {content}
            </AccordionItemBody>
          </When>
        </AccordionItem>
      ))}
    </AccordionContainer>
  )
}
