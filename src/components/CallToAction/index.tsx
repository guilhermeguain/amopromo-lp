import { Button } from '@components/shared/Button'

import { WhatsApp } from '@assets/icons/WhatsApp'
import { Phone } from '@assets/icons/Phone'

import { useCallToAction } from './hooks/useCallToAction'

import {
  Container,
  Body,
  Column,
  ColumnInner,
  Title,
  Description,
  PhoneLink,
  PhoneLinkLabel,
  Details,
} from './styled'

export const CallToAction = () => {
  const { isDesktop, title, description, buttonText } = useCallToAction()

  return (
    <Container isDesktop={isDesktop}>
      <Body>
        <Column>
          <Title>{title}</Title>
        </Column>
        <Column>
          <ColumnInner>
            <Description>{description}</Description>

            <PhoneLink href="tel:99999999999">
              <Phone color="#83AF38" size={24} />
              <PhoneLinkLabel>(99) 99999.9999</PhoneLinkLabel>
            </PhoneLink>

            <Details>
              Atendemos pelo telefone de seg. a sex. das 9h às 17h
            </Details>

            <Button
              icon={<WhatsApp />}
              fontSize={isDesktop ? 'small' : 'x-small'}
            >
              {buttonText}
            </Button>
          </ColumnInner>
        </Column>
      </Body>
    </Container>
  )
}
