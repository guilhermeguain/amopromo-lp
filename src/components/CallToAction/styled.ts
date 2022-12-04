import styled, { css } from 'styled-components'

type ContainerProps = {
  isDesktop?: boolean
}

export const Container = styled.div<ContainerProps>`
  background-image: url('/images/bg-cta-mobile.jpg');
  background-color: lightgoldenrodyellow;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;

  ${(props) =>
    props.isDesktop &&
    css`
      background-image: url('/images/bg-cta.jpg');
    `}

  @media screen and (min-width: 768px) {
    background-position: center 40%;
  }
`

export const Body = styled.div`
  padding: 2rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;

  min-height: calc(100vh - 63px);

  @media screen and (min-width: 1200px) {
    padding: 4rem 4rem 1rem;

    flex-direction: row;
    justify-content: center;

    gap: 24rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 4rem 12rem 1rem;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  &:nth-child(2) {
    flex: 1;
  }

  @media screen and (min-width: 1200px) {
    flex: 1;
  }
`

export const ColumnInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
  flex: 1;
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
    font-weight: 700;
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

export const Details = styled.span`
  font-size: 0.75rem;
  text-align: center;

  display: flex;
  flex: 1;

  @media screen and (min-width: 1200px) {
    order: 10;

    align-items: flex-end;
  }
`
