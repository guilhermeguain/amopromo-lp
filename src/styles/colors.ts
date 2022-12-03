import { lighten, darken } from 'polished'

export const colors = () => {
  const primaryColor = '#33794A'
  const secondaryColor = '#83AF38'

  return {
    brand: {
      primary: primaryColor,
      secondary: secondaryColor,
    },
    primary: {
      50: lighten(0.25, primaryColor),
      100: lighten(0.2, primaryColor),
      200: lighten(0.15, primaryColor),
      300: lighten(0.1, primaryColor),
      400: lighten(0.05, primaryColor),
      500: primaryColor,
      600: darken(0.05, primaryColor),
      700: darken(0.1, primaryColor),
      800: darken(0.15, primaryColor),
      900: darken(0.2, primaryColor),
    },
    secondary: {
      50: lighten(0.25, secondaryColor),
      100: lighten(0.2, secondaryColor),
      200: lighten(0.15, secondaryColor),
      300: lighten(0.1, secondaryColor),
      400: lighten(0.05, secondaryColor),
      500: secondaryColor,
      600: darken(0.05, secondaryColor),
      700: darken(0.1, secondaryColor),
      800: darken(0.15, secondaryColor),
      900: darken(0.2, secondaryColor),
    },
  }
}
