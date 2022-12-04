import { Facebook } from '@assets/icons/Facebook'
import { Twitter } from '@assets/icons/Twitter'
import { Instagram } from '@assets/icons/Instagram'

export const useFooter = () => {
  const colors = ['#64BA00', '#68629C', '#FFD012', '#007E47']

  const socialNetworks = [
    { id: 1, icon: Facebook, color: '#3B5998', link: '#' },
    { id: 2, icon: Twitter, color: '#47B2DE', link: '#' },
    {
      id: 3,
      icon: Instagram,
      color:
        'linear-gradient(135.91deg, #5B6AD9 10.12%, #954DC0 28.81%, #C33E9F 70.24%, #FBC571 93.66%)',
      link: '#',
    },
  ]

  const mockupContent = (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      sollicitudin luctus malesuada. Curabitur vestibulum sagittis iaculis.
      Phasellus quis lobortis neque, mattis viverra augue. Etiam bibendum, sem
      vel faucibus finibus, ante dui finibus urna, sed gravida nisi lectus ac
      metus. Sed consequat lacinia nisl. Morbi in arcu risus. Phasellus pulvinar
      sed odio at scelerisque. Mauris.
    </>
  )

  const tabs = [
    {
      id: 1,
      title: 'Seguros',
      content: (
        <ul>
          <li>Seguro Viagem América do Norte</li>
          <li>Seguro Viagem Europa</li>
          <li>Seguro Viagem América do Sul</li>
          <li>Seguro Viagem América Central</li>
          <li>Seguro Viagem África</li>
          <li>Seguro Viagem Ásia</li>
          <li>Seguro Viagem Internacional</li>
          <li>Seguro Viagem Nacional</li>
          <li>Seguro Viagem Oceania</li>
          <li>Seguro Viagem Oriente Médio</li>
          <li>Seguro Viagem Cruzeiro</li>
          <li>Seguro de Vida</li>
        </ul>
      ),
    },
    {
      id: 2,
      title: 'Quem somos',
      content: mockupContent,
    },
    {
      id: 3,
      title: 'Seguradoras',
      content: mockupContent,
    },
    {
      id: 4,
      title: 'Blog',
      content: mockupContent,
    },
  ]

  console.log(tabs)

  return {
    colors,
    socialNetworks,
    tabs,
  }
}
