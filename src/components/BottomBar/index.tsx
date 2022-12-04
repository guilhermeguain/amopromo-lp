import { Content } from '@components/shared/Content'

import { Container, Body, Text, Images, Image } from './styled'

export const BottomBar = () => {
  const images = [
    { id: 1, image: 'bottom-ssl', width: 50, height: 22 },
    { id: 2, image: 'bottom-iata', width: 57, height: 37 },
    { id: 3, image: 'bottom-abav', width: 99, height: 32 },
    { id: 4, image: 'bottom-brasil', width: 51, height: 37 },
  ]

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
