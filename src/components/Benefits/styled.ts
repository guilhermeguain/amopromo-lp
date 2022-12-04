import styled from 'styled-components'

export const Container = styled.div`
  margin: 2rem 0;
`

export const Title = styled.h2`
  margin-bottom: 4.25rem;

  font-size: 2.25rem;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;

  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 6rem;
  }
`

export const Column = styled.div`
  margin-bottom: 2rem;

  flex: 1;
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`
