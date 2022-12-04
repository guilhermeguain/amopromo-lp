import { ReactElement, CSSProperties } from 'react'
import { Container } from './styled'

type ContentProps = {
  children: ReactElement
  style?: CSSProperties
}

export const Content = ({ children, style, ...rest }: ContentProps) => {
  return (
    <Container style={style} {...rest}>
      {children}
    </Container>
  )
}
