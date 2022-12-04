import { useMemo } from 'react'
import { MOBILE_BREAKPOINT, DESKTOP_BREAKPOINT } from '@lib/constants'

import { useWindowSize } from '@hooks/useWindowSize'

export const useCallToAction = () => {
  const { width } = useWindowSize()

  const isMobile = useMemo(() => {
    return width < MOBILE_BREAKPOINT
  }, [width])

  const isDesktop = useMemo(() => {
    return width > DESKTOP_BREAKPOINT
  }, [width])

  const title = isMobile
    ? 'Ainda tem dúvidas sobre seguro de vida?'
    : 'Ainda não sabe qual seguro contratar?'

  const description = isMobile
    ? 'Entre em contato e receba uma consultoria personalizada gratuitamente'
    : 'Ligue pra gente e receba uma consultoria personalizada gratuitamente!'

  const buttonText = isMobile
    ? 'Também respondemos pelo Whatsapp!'
    : 'Se preferir, entre em contato pelo Whatsapp'

  return {
    isMobile,
    isDesktop,
    title,
    description,
    buttonText,
  }
}
