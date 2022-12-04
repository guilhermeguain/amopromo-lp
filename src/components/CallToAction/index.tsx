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
  const { title, buttonText } = useCallToAction()

  return (
    <Container>
      <Body>
        <Column>
          <Title>{title}</Title>
        </Column>
        <Column>
          <ColumnInner>
            <Description>
              Ligue pra gente e receba uma consultoria personalizada
              gratuitamente!
            </Description>
            <PhoneLink href="tel:99999999999">
              <Phone color="#83AF38" size={24} />
              <PhoneLinkLabel>(99) 99999.9999</PhoneLinkLabel>
            </PhoneLink>
            <Button icon={<WhatsApp />}>{buttonText}</Button>
          </ColumnInner>
          <Details>
            Atendemos pelo telefone de seg. a sex. das 9h às 17h
          </Details>
        </Column>
      </Body>
    </Container>
  )
}
