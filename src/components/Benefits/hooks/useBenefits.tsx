import { useMemo } from 'react'
import { MOBILE_BREAKPOINT } from '@lib/constants'

import { useWindowSize } from '@hooks/useWindowSize'

export const useBenefits = () => {
  const { width } = useWindowSize()

  const isMobile = useMemo(() => {
    return width < MOBILE_BREAKPOINT
  }, [width])

  const title = isMobile
    ? 'Por que ter um seguro de vida?'
    : 'Mas por que ter um seguro de vida?'

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

  const benefits = [
    {
      id: 1,
      title: 'Custo-benefício',
      content: mockupContent,
    },
    {
      id: 2,
      title: 'Segurança financeira',
      content: mockupContent,
    },
    {
      id: 3,
      title: 'Proteção financeira aos dependentes e ao cônjuge',
      content: mockupContent,
    },
    {
      id: 4,
      title: 'Tranquilidade para o segurado',
      content: mockupContent,
    },
    {
      id: 5,
      title: 'Garantias nas horas em que você mais precisar',
      content: mockupContent,
    },
  ]

  return {
    isMobile,
    title,
    benefits,
  }
}
