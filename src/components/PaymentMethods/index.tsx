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

import { Container, Group, SubTitle, Text, IconsList } from './styled'

export const PaymentMethods = () => {
  return (
    <Container>
      <SubTitle>Formas de pagamento:</SubTitle>
      <Group>
        <Text>Crédito em até 12 vezes</Text>
        <IconsList>
          <MasterCard />
          <Visa />
          <AmericanExpress />
          <Elo />
          <DinersClub />
          <Hipercard />
        </IconsList>
      </Group>
      <Group>
        <Text>Boleto bancário</Text>
        <IconsList>
          <Boleto />
          <DescontoTag />
        </IconsList>
      </Group>
      <Group>
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
      </Group>
      <Group>
        <Text>Pagamento com pix</Text>
        <IconsList>
          <Pix />
        </IconsList>
      </Group>
    </Container>
  )
}
