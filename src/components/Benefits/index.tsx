import { Content } from '@components/shared/Content'
import { Button } from '@components/shared/Button'

import { When } from '@components/shared/When'
import { Accordion } from '@components/Accordion'

import { useBenefits } from './hooks/useBenefits'

import { Container, Title, Body, Column, Image } from './styled'

export const Benefits = () => {
  const { isMobile, title, benefits } = useBenefits()

  return (
    <Container>
      <Content>
        <>
          <When value={!isMobile}>
            <Title>{title}</Title>
          </When>
          <Body>
            <Column>
              <Accordion items={benefits} initialTab={isMobile ? 0 : 1} />
            </Column>
            <Column>
              <When value={isMobile}>
                <Title>{title}</Title>
              </When>
              <Image
                src="/images/seguro-de-vida.png"
                alt="Seguro de vida"
                title="Seguro de vida"
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
