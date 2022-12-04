import styled from 'styled-components'

export const Container = styled.div``

export const Body = styled.div`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const Text = styled.span`
  font-size: 0.75rem;
`

export const Images = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const Image = styled.img``
