import { useMemo } from 'react'
import { MOBILE_BREAKPOINT } from '@lib/constants'

import { useWindowSize } from '@hooks/useWindowSize'

export const useFeatured = () => {
  const { width } = useWindowSize()

  const isMobile = useMemo(() => {
    return width < MOBILE_BREAKPOINT
  }, [width])

  return {
    isMobile,
  }
}
