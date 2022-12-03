import { extendTheme, ThemeOverride } from '@chakra-ui/react'
import { colors } from './colors'

const config: ThemeOverride = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
    },
  },
  colors: { ...colors() },
}

export const theme = extendTheme(config)
