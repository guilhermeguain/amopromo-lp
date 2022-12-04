import { Content } from '@components/shared/Content'
import { Button } from '@components/shared/Button'

import { Accordion } from '@components/Accordion'

import { useBenefits } from './hooks/useBenefits'

import { Container, Title, Body, Column, Image } from './styled'

export const Benefits = () => {
  const { benefits } = useBenefits()

  return (
    <Container>
      <Content>
        <>
          <Title>Mas por que ter um seguro de vida?</Title>
          <Body>
            <Column>
              <Accordion items={benefits} />
            </Column>
            <Column>
              <Image
                src="/images/seguro-de-vida.png"
                alt="Seguro de vida"
                width="499"
                height="262"
              />
            </Column>
          </Body>
          <Button onClick={() => {}}>Faça sua cotação</Button>
        </>
      </Content>
    </Container>
  )
}
