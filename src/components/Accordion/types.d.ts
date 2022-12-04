import { ReactElement } from 'react'

export type ItemProps = {
  id: number
  title: string
  content: ReactElement
}

export type AccordionProps = {
  items: ItemProps[]
  variant?: 'default' | 'footer'
  initialTab?: number
}
