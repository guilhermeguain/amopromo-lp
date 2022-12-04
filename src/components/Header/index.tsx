import { When } from '@components/shared/When'
import { Content } from '@components/shared/Content'
import { TopBar } from '@components/TopBar'

import { User } from '@assets/icons/User'
import { Caret } from '@assets/icons/Caret'
import { Arrow } from '@assets/icons/Arrow'

import { useHeader } from './hooks/useHeader'

import {
  Container,
  ContainerContent,
  Logo,
  LogoImage,
  MobileButton,
  MobileButtonLabel,
  MobileMenu,
  MobileMenuLink,
  Menu,
  MenuLink,
  MenuButton,
  MenuButtonIcon,
  MenuButtonLabel,
} from './styled'

export const Header = () => {
  const { isOpen, setIsOpen, isMobile, items } = useHeader()

  return (
    <Container>
      <When value={!isMobile}>
        <TopBar />
      </When>
      <Content style={{ flexDirection: 'row' }}>
        <ContainerContent>
          <Logo href="/" title="Seguros Promo">
            <LogoImage
              src="/images/logo-white.svg"
              width="185"
              height="36"
              alt="Seguros Promo"
            />
          </Logo>

          <When value={isMobile}>
            <MobileButton
              onClick={() => {
                setIsOpen((isOpen) => !isOpen)
              }}
            >
              <MobileButtonLabel>Menu</MobileButtonLabel>
              <Caret />
            </MobileButton>
          </When>

          <When value={!isMobile}>
            <>
              <Menu>
                {items.map(({ id, link, label }) => (
                  <MenuLink key={id} href={link}>
                    {label}
                  </MenuLink>
                ))}
              </Menu>
              <MenuButton>
                <MenuButtonIcon>
                  <User />
                </MenuButtonIcon>
                <MenuButtonLabel>Área do cliente</MenuButtonLabel>
                <Arrow />
              </MenuButton>
            </>
          </When>
        </ContainerContent>
      </Content>
      <When value={isMobile && isOpen}>
        <MobileMenu>
          {items.map(({ id, link, label }) => (
            <MobileMenuLink key={id} href={link}>
              {label}
            </MobileMenuLink>
          ))}
        </MobileMenu>
      </When>
    </Container>
  )
}
