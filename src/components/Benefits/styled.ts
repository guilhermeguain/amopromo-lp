import styled from 'styled-components'

export const Container = styled.div`
  margin: 2rem 0;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 4.25rem;

    font-size: 2.25rem;
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;

  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 6rem;
  }
`

export const Column = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  &:nth-child(2) {
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 2rem;

    flex-direction: column;
  }
`

export const Image = styled.img`
  margin-bottom: 2rem;

  max-width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`
