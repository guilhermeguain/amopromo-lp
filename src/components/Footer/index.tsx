import { When } from '@components/shared/When'
import { Content } from '@components/shared/Content'

import { Button } from '@components/shared/Button'
import { Accordion } from '@components/Accordion'
import { PaymentMethods } from '@components/PaymentMethods'
import { BottomBar } from '@components/BottomBar'

import { SmartPhoneNew } from '@assets/icons/SmartPhoneNew'
import { WhatsApp } from '@assets/icons/WhatsApp'
import { Help } from '@assets/icons/Help'
import { Email } from '@assets/icons/Email'

import { useFooter } from './hooks/useFooter'

import {
  Container,
  ContainerDecoration,
  ContainerDecorationColor,
  Body,
  BodySection1,
  BodySection2,
  BodySection3,
  BodySectionGroup1,
  BodySectionGroup2,
  BodySectionGroup2Inner,
  BodySectionGroup3,
  Logo,
  SocialNetworks,
  SocialNetworksText,
  SocialNetworksLink,
  SocialNetworksIcon,
  Title,
  Buttons,
  Menus,
  MenusItem,
  MenusItemTitle,
} from './styled'

export const Footer = () => {
  const { isMobile, colors, socialNetworks, tabs } = useFooter()

  return (
    <Container>
      <ContainerDecoration>
        {colors.map((color, index) => (
          <ContainerDecorationColor key={index} color={color} />
        ))}
      </ContainerDecoration>
      <Content>
        <Body>
          <BodySection1>
            <Logo
              src="/images/logo.png"
              alt="Seguros Promo"
              width="127"
              height="22"
            />
            <SocialNetworks>
              <When value={!isMobile}>
                <SocialNetworksText>Acompanhe a gente:</SocialNetworksText>
              </When>
              {socialNetworks.map(({ id, label, icon: Icon, color, link }) => (
                <SocialNetworksLink
                  key={id}
                  href={link}
                  color={color}
                  title={label}
                >
                  <SocialNetworksIcon>
                    <Icon />
                  </SocialNetworksIcon>
                </SocialNetworksLink>
              ))}
            </SocialNetworks>
          </BodySection1>

          <BodySection2>
            <BodySectionGroup1>
              <When value={isMobile}>
                <Accordion
                  items={tabs}
                  variant="footer"
                  initialTab={isMobile ? 1 : 0}
                />
              </When>
              <When value={!isMobile}>
                <Menus>
                  {tabs.map(({ id, title, content }) => (
                    <MenusItem key={id}>
                      <MenusItemTitle>{title}</MenusItemTitle>
                      {content}
                    </MenusItem>
                  ))}
                </Menus>
              </When>
            </BodySectionGroup1>

            <BodySectionGroup2>
              <BodySectionGroup2Inner>
                <Title>Central de vendas:</Title>
                <Buttons>
                  <Button
                    variant={isMobile ? 'footer' : 'link'}
                    icon={
                      <SmartPhoneNew color={isMobile ? '#fff' : '#33794A'} />
                    }
                  >
                    (31) 4000-1667
                  </Button>
                  <Button
                    variant={isMobile ? 'footer' : 'link'}
                    icon={
                      <WhatsApp
                        size={26}
                        color={isMobile ? '#fff' : '#33794A'}
                      />
                    }
                  >
                    (31) 98204-2542
                  </Button>
                </Buttons>
              </BodySectionGroup2Inner>
              <BodySectionGroup2Inner>
                <Title>Atendimento:</Title>
                <Buttons>
                  <Button
                    variant={isMobile ? 'footer' : 'link'}
                    icon={
                      <SmartPhoneNew color={isMobile ? '#fff' : '#33794A'} />
                    }
                  >
                    (31) 4000-1667
                  </Button>
                  <Button
                    variant={isMobile ? 'footer' : 'link'}
                    icon={isMobile ? <></> : <Help />}
                  >
                    Central de Ajuda
                  </Button>
                  <When value={isMobile}>
                    <Button
                      variant={isMobile ? 'footer' : 'link'}
                      icon={<Email color={isMobile ? '#fff' : '#33794A'} />}
                      fontSize="small"
                    >
                      atendimento@segurospromo.com.br
                    </Button>
                  </When>
                </Buttons>
              </BodySectionGroup2Inner>
            </BodySectionGroup2>
          </BodySection2>

          <BodySection3>
            <BodySectionGroup3>
              <PaymentMethods />
            </BodySectionGroup3>
          </BodySection3>
        </Body>
      </Content>
      <BottomBar />
    </Container>
  )
}
