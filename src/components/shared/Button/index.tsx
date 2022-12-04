import { Container } from './styled'

import { ButtonProps } from './types'

export const Button = ({ children, icon, ...rest }: ButtonProps) => {
  return (
    <Container {...rest}>
      <>
        {icon}
        {children}
      </>
    </Container>
  )
}
