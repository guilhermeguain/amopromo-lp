import { useMemo } from 'react'
import { MOBILE_BREAKPOINT } from '@lib/constants'

import { useWindowSize } from '@hooks/useWindowSize'

export const useHeader = () => {
  const { width } = useWindowSize()

  const isMobile = useMemo(() => {
    return width < MOBILE_BREAKPOINT
  }, [width])

  const items = [
    { id: 1, link: '#', label: 'Seguro de Vida' },
    { id: 2, link: '#', label: 'Multi-trip' },
    { id: 3, link: '#', label: 'Atendimento' },
    { id: 4, link: '#', label: 'FAQ' },
    { id: 5, link: '#', label: 'Afiliados' },
    { id: 6, link: '#', label: 'Blog' },
  ]

  return {
    items,
    isMobile,
  }
}
