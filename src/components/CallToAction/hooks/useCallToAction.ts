import { useMemo } from 'react'
import { MOBILE_BREAKPOINT } from '@lib/constants'

import { useWindowSize } from '@hooks/useWindowSize'

export const useCallToAction = () => {
  const { width } = useWindowSize()

  const isMobile = useMemo(() => {
    return width < MOBILE_BREAKPOINT
  }, [width])

  const title = isMobile
    ? 'Ainda tem dúvidas sobre seguro de vida?'
    : 'Ainda não sabe qual seguro contratar?'

  const buttonText = isMobile
    ? 'Também respondemos pelo Whatsapp!'
    : 'Se preferir, entre em contato pelo Whatsapp'

  return {
    title,
    buttonText,
  }
}
