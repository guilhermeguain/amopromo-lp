import { useMemo } from 'react'
import { MOBILE_BREAKPOINT } from '@lib/constants'

import { useWindowSize } from '@hooks/useWindowSize'

import { Morte } from '@assets/icons/Morte'
import { AssistenciaFuneral } from '@assets/icons/AssistenciaFuneral'
import { Invalidez } from '@assets/icons/Invalidez'
import { Sorteios } from '@assets/icons/Sorteios'

export const useServices = () => {
  const { width } = useWindowSize()

  const isMobile = useMemo(() => {
    return width < MOBILE_BREAKPOINT
  }, [width])

  const services = [
    {
      id: 1,
      icon: Morte,
      title: 'Morte',
      description:
        'Caso a pessoa segurada venha a falecer, seja por causas naturais ou acidentais, a pessoa escolhida como beneficiária recebe uma indenização no valor contratado',
      link: '',
    },
    {
      id: 2,
      icon: Invalidez,
      title: 'Invalidez por acidente',
      description:
        'Caso a pessoa segurada sofra um acidente que a torne permanentemente inválida, seja total ou parcialmente, essa pessoa recebe uma uma indenização no valor contratado',
      link: '',
    },
    {
      id: 3,
      icon: AssistenciaFuneral,
      title: 'Assistência funeral',
      description:
        'No caso do falecimento da pessoa segurada, a pessoa beneficiária recebe assistência para a realização do funeral ou cremação',
      link: '',
    },
    {
      id: 4,
      icon: Sorteios,
      title: 'Sorteios mensais de 10 mil reais',
      description:
        'A pessoa segurada concorre a sorteios de R$10.000 todo mês enquanto continuar com seu o plano ativo  ',
      link: '',
    },
  ]

  return {
    isMobile,
    services,
  }
}
