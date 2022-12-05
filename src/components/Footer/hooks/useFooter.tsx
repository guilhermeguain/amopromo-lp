import { useMemo } from 'react'
import { MOBILE_BREAKPOINT } from '@lib/constants'

import { useWindowSize } from '@hooks/useWindowSize'

import { Facebook } from '@assets/icons/Facebook'
import { Twitter } from '@assets/icons/Twitter'
import { Instagram } from '@assets/icons/Instagram'

export const useFooter = () => {
  const { width } = useWindowSize()

  const isMobile = useMemo(() => {
    return width < MOBILE_BREAKPOINT
  }, [width])

  const colors = ['#64BA00', '#68629C', '#FFD012', '#007E47']

  const socialNetworks = [
    { id: 1, label: 'Facebook', icon: Facebook, color: '#3B5998', link: '#' },
    { id: 2, label: 'Twitter', icon: Twitter, color: '#47B2DE', link: '#' },
    {
      id: 3,
      label: 'Instagram',
      icon: Instagram,
      color:
        'linear-gradient(135.91deg, #5B6AD9 10.12%, #954DC0 28.81%, #C33E9F 70.24%, #FBC571 93.66%)',
      link: '#',
    },
  ]

  const tabs = [
    {
      id: 1,
      title: 'Seguros',
      content: (
        <ul>
          <li>
            <a href="#">Seguro Viagem América do Norte</a>
          </li>
          <li>
            <a href="#">Seguro Viagem Europa</a>
          </li>
          <li>
            <a href="#">Seguro Viagem América do Sul</a>
          </li>
          <li>
            <a href="#">Seguro Viagem América Central</a>
          </li>
          <li>
            <a href="#">Seguro Viagem África</a>
          </li>
          <li>
            <a href="#">Seguro Viagem Ásia</a>
          </li>
          <li>
            <a href="#">Seguro Viagem Internacional</a>
          </li>
          <li>
            <a href="#">Seguro Viagem Nacional</a>
          </li>
          <li>
            <a href="#">Seguro Viagem Oceania</a>
          </li>
          <li>
            <a href="#">Seguro Viagem Oriente Médio</a>
          </li>
          <li>
            <a href="#">Seguro Viagem Cruzeiro</a>
          </li>
          <li>
            <a href="#">Seguro de Vida</a>
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      title: 'Quem somos',
      content: (
        <ul>
          <li>
            <a href="#">A empresa</a>
          </li>
          <li>
            <a href="#">Atendimento</a>
          </li>
          <li>
            <a href="#">Afiliados</a>
          </li>
          <li>
            <a href="#">Política de Privacidade</a>
          </li>
          <li>
            <a href="#">Termos de Uso</a>
          </li>
          <li>
            <a href="#">Trabalhe conosco</a>
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      title: 'Seguradoras',
      content: (
        <ul>
          <li>
            <a href="#">Coris</a>
          </li>
          <li>
            <a href="#">Assist Card</a>
          </li>
          <li>
            <a href="#">ITA Travel</a>
          </li>
          <li>
            <a href="#">Universal Assistance</a>
          </li>
          <li>
            <a href="#">Intermac</a>
          </li>
          <li>
            <a href="#">Affinity</a>
          </li>
          <li>
            <a href="#">GTA</a>
          </li>
          <li>
            <a href="#">Assist Seguro Viagem</a>
          </li>
          <li>
            <a href="#">My Travel Assist</a>
          </li>
          <li>
            <a href="#">Vital Card</a>
          </li>
          <li>
            <a href="#">Travel Care</a>
          </li>
        </ul>
      ),
    },
    {
      id: 4,
      title: 'Blog',
      content: (
        <ul>
          <li>
            <a href="#">Dicas de Viagem</a>
          </li>
          <li>
            <a href="#">Intercâmbio</a>
          </li>
          <li>
            <a href="#">Mais lidos</a>
          </li>
          <li>
            <a href="#">Seguro Viagens</a>
          </li>
        </ul>
      ),
    },
  ]

  return {
    isMobile,
    colors,
    socialNetworks,
    tabs,
  }
}
