import { Content } from '@components/shared/Content'
import { Button } from '@components/shared/Button'

import {
  Container,
  ContainerOverlay,
  Body,
  Main,
  Title,
  Meta,
  Description,
} from './styled'

export const Hero = () => {
  return (
    <Container>
      <ContainerOverlay />
      <Content style={{ alignItems: 'flex-start' }}>
        <Body>
          <Main>
            <Title>Tranquilidade para viver mais</Title>
          </Main>
          <Meta>
            <Description>
              Viva mais e melhor com os benefícios que um seguro de vida te
              oferece
            </Description>
            <Button>Faça sua cotação</Button>
          </Meta>
        </Body>
      </Content>
    </Container>
  )
}
