import { ReactElement, ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'alternative' | 'footer'
  icon?: ReactElement
  fontSize?: 'regular' | 'small'
  children: ReactElement | string
}
