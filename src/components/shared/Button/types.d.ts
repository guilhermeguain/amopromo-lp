import { ReactElement, ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'alternative' | 'link' | 'footer'
  icon?: ReactElement
  fontSize?: 'regular' | 'small' | 'x-small'
  children: ReactElement | string
}
