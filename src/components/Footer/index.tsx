import { Button } from '@components/shared/Button'
import { Accordion } from '@components/Accordion'
import { BottomBar } from '@components/BottomBar'

import { SmartPhone } from '@assets/icons/SmartPhone'
import { WhatsApp } from '@assets/icons/WhatsApp'
import { Email } from '@assets/icons/Email'

import { MasterCard } from '@assets/icons/MasterCard'
import { Visa } from '@assets/icons/Visa'
import { AmericanExpress } from '@assets/icons/AmericanExpress'
import { Elo } from '@assets/icons/Elo'
import { DinersClub } from '@assets/icons/DinersClub'
import { Hipercard } from '@assets/icons/Hipercard'

import { Boleto } from '@assets/icons/Boleto'
import { DescontoTag } from '@assets/icons/DescontoTag'

import { BancoDoBrasil } from '@assets/icons/BancoDoBrasil'
import { Bradesco } from '@assets/icons/Bradesco'
import { Itau } from '@assets/icons/Itau'
import { Santander } from '@assets/icons/Santander'
import { BancoOriginal } from '@assets/icons/BancoOriginal'
import { BancoInter } from '@assets/icons/BancoInter'
import { BancoBs2 } from '@assets/icons/BancoBs2'

import { Pix } from '@assets/icons/Pix'

import { useFooter } from './hooks/useFooter'

import {
  Container,
  ContainerDecoration,
  ContainerDecorationColor,
  Body,
  BodySection,
  BodySectionGroup,
  Logo,
  SocialNetworks,
  SocialNetworksLink,
  SocialNetworksIcon,
  Title,
  Text,
  Buttons,
  IconsList,
} from './styled'

export const Footer = () => {
  const { colors, socialNetworks, tabs } = useFooter()

  return (
    <Container>
      <ContainerDecoration>
        {colors.map((color, index) => (
          <ContainerDecorationColor key={index} color={color} />
        ))}
      </ContainerDecoration>
      <Body>
        <BodySection>
          <Logo
            src="/images/logo.png"
            alt="Seguros Promo"
            width="127"
            height="22"
          />
          <SocialNetworks>
            {socialNetworks.map(({ id, icon: Icon, color, link }) => (
              <SocialNetworksLink key={id} href={link} color={color}>
                <SocialNetworksIcon>
                  <Icon />
                </SocialNetworksIcon>
              </SocialNetworksLink>
            ))}
          </SocialNetworks>
        </BodySection>
        <BodySection>
          <BodySectionGroup>
            <Title>Central de vendas:</Title>
            <Buttons>
              <Button variant="footer" icon={<SmartPhone />}>
                (31) 4000-1667
              </Button>
              <Button variant="footer" icon={<WhatsApp />}>
                (31) 98204-2542
              </Button>
            </Buttons>
          </BodySectionGroup>
          <BodySectionGroup>
            <Title>Atendimento:</Title>
            <Buttons>
              <Button variant="footer" icon={<SmartPhone />}>
                (31) 4000-1667
              </Button>
              <Button variant="footer">Central de Ajuda</Button>
              <Button variant="footer" icon={<Email />} fontSize="small">
                atendimento@segurospromo.com.br
              </Button>
            </Buttons>
          </BodySectionGroup>
        </BodySection>
        <BodySection>
          <BodySectionGroup>
            <Accordion items={tabs} variant="footer" />
          </BodySectionGroup>
          <BodySectionGroup>
            <Title>Formas de pagamento:</Title>
            <Text>Crédito em até 12 vezes</Text>
            <IconsList>
              <MasterCard />
              <Visa />
              <AmericanExpress />
              <Elo />
              <DinersClub />
              <Hipercard />
            </IconsList>
            <Text>Boleto bancário</Text>
            <IconsList>
              <Boleto />
              <DescontoTag />
            </IconsList>
            <Text>Transferência bancária</Text>
            <IconsList>
              <BancoDoBrasil />
              <Bradesco />
              <Itau />
              <Santander />

              <BancoOriginal />
              <BancoInter />
              <BancoBs2 />
            </IconsList>
            <Text>Pagamento com pix</Text>
            <IconsList>
              <Pix />
            </IconsList>
          </BodySectionGroup>
        </BodySection>
      </Body>
      <BottomBar />
    </Container>
  )
}
