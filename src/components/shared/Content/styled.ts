import { CSSProperties } from 'react'
import styled from 'styled-components'

type ContainerProps = {
  style?: CSSProperties
}

export const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  padding: 0 1rem;

  max-width: var(--content-width);

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex: 1;
`
