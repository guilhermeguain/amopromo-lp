import { When } from '@components/shared/When'
import { Content } from '@components/shared/Content'
import { Button } from '@components/shared/Button'

import { useServices } from './hooks/useServices'

import {
  Container,
  Title,
  Description,
  List,
  ListItem,
  ListItemTitle,
  ListItemDescription,
} from './styled'

export const Services = () => {
  const { isMobile, services } = useServices()

  return (
    <Container>
      <Content>
        <>
          <Title>Nossas coberturas</Title>
          <Description>Veja mais detalhes de cada proteção!</Description>
          <List>
            {services.map(({ id, icon: Icon, title, description }) => (
              <ListItem key={id}>
                <Icon />
                <ListItemTitle>{title}</ListItemTitle>
                <ListItemDescription>{description}</ListItemDescription>
                <When value={!isMobile}>
                  <Button variant={'alternative'} onClick={() => {}}>
                    Saiba mais
                  </Button>
                </When>
              </ListItem>
            ))}
          </List>
          <Button onClick={() => {}}>Faça sua cotação</Button>
        </>
      </Content>
    </Container>
  )
}
