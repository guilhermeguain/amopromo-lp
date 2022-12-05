import { Content } from '@components/shared/Content'

import { useBottomBar } from './hooks/useBottomBar'

import { Container, Body, Text, Images, Image } from './styled'

export const BottomBar = () => {
  const { images } = useBottomBar()

  return (
    <Container>
      <Content>
        <Body>
          <Text>
            2XT | CNPJ: 73.690.653/0001-13 | Rua dos Timbiras, nº 1.532, 10º
            andar - Belo Horizonte - MG © 2017 Seguros Promo - Emitir Shop | By
            - 2XT Tecnologia
          </Text>
          <Images>
            {images.map(({ id, image, width, height }) => (
              <Image
                key={id}
                src={`/images/${image}.png`}
                alt={image}
                width={width}
                height={height}
              />
            ))}
          </Images>
        </Body>
      </Content>
    </Container>
  )
}
