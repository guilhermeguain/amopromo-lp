import { Content } from '@components/shared/Content'

import { Container, Body, Text, Links, Link, LinkLabel } from './styled'

import { useTopBar } from './hooks/useTopBar'

export const TopBar = () => {
  const { contacts } = useTopBar()

  return (
    <>
      <Container>
        <Content style={{ flexDirection: 'row' }}>
          <Body>
            <Text>Central de vendas:</Text>
            <Links>
              {contacts.map(({ id, icon: Icon, link, label }) => (
                <Link key={id} href={link}>
                  <Icon />
                  <LinkLabel>{label}</LinkLabel>
                </Link>
              ))}
            </Links>
          </Body>
        </Content>
      </Container>
    </>
  )
}
