import { Content } from '@components/shared/Content'
import { Button } from '@components/shared/Button'

import {
  Container,
  Body,
  Column,
  Image,
  Title,
  List,
  ListItem,
  ListItemPrefix,
  ListItemText,
  Description,
} from './styled'

export const Featured = () => {
  return (
    <Container>
      <Content>
        <Body>
          <Column>
            <Image
              src="/images/devices.png"
              width="672"
              height="555"
              alt="Planos personalizados e sem burocracia"
            />
          </Column>
          <Column>
            <Title>Planos personalizados e sem burocracia</Title>
            <List>
              <ListItem>
                <ListItemPrefix>1.</ListItemPrefix>
                <ListItemText>Informe seus dados</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemPrefix>2.</ListItemPrefix>
                <ListItemText>
                  Descubra o plano ideal para o seu perfil
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemPrefix>3.</ListItemPrefix>
                <ListItemText>
                  Escolha sua forma de pagamento e contrate 100% online
                </ListItemText>
              </ListItem>
            </List>
            <Description>
              Pronto! Agora você e sua família têm todos os benefícios de viver
              com segurança total
            </Description>
            <Button>Faça sua cotação</Button>
          </Column>
        </Body>
      </Content>
    </Container>
  )
}
