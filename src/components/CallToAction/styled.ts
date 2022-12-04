import styled from 'styled-components'

export const Container = styled.div`
  background-image: url('/images/bg-cta.jpg');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-position: center top;
  }
`

export const Body = styled.div`
  padding: 2rem 1rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;

  min-height: calc(100vh);

  @media screen and (min-width: 768px) {
    padding: 4rem 1rem 1rem;

    flex-direction: row;
    justify-content: center;

    gap: 32rem;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;
`

export const ColumnInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 2.25rem;
  }
`

export const Description = styled.p`
  font-size: 0.75rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
    font-weight: 600;
  }
`

export const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
  color: var(--color-secondary);
`

export const PhoneLinkLabel = styled.span``

export const Details = styled.span``
