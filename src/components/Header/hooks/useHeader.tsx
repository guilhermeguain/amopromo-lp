import { useMemo, useState } from 'react'
import { DESKTOP_BREAKPOINT } from '@lib/constants'

import { useWindowSize } from '@hooks/useWindowSize'

export const useHeader = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { width } = useWindowSize()

  const isMobile = useMemo(() => {
    return width < DESKTOP_BREAKPOINT
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
    isOpen,
    setIsOpen,
    isMobile,
    items,
  }
}
