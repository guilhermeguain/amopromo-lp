import { Flex, Image } from '@chakra-ui/react'

import { Content } from '@components/shared/Content'

import { useHeader } from './hooks/useHeader'

export const Header = () => {
  const { logo } = useHeader()

  return (
    <Flex bg="brand.primary">
      <Content direction="row" alignItems="center" py={2}>
        <Image src={logo} h="36px" alt="Seguros Promo" />
      </Content>
    </Flex>
  )
}
