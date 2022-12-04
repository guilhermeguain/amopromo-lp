import styled from 'styled-components'

export const Container = styled.section`
  background: url('/images/bg-hero.jpg');
  background-repeat: no-repeat;
  background-position: 60% 0%;
  background-size: cover;
`

export const ContainerOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: -5px;
  left: 0;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 80%, #ffffff 100%);

  @media screen and (min-width: 768px) {
    background: linear-gradient(180deg, transparent 80%, #ffffff 100%);
  }
`

export const Body = styled.div`
  padding: 2rem 0;

  display: flex;
  flex-direction: column;

  min-height: calc(100vh - 91px);

  width: 100%;

  position: relative;
  z-index: 10;

  @media screen and (min-width: 768px) {
    padding: 5rem 0;

    min-height: calc(100vh - 122px);

    max-width: 50%;
  }
`

export const Main = styled.div`
  flex: 1;

  @media screen and (min-width: 768px) {
    flex: 20;
  }
`

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  flex: 1;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const Description = styled.span`
  margin-bottom: 2rem;

  display: block;

  color: #fff;
  font-size: 1rem;

  @media screen and (min-width: 768px) {
    font-size: 1.125rem;
  }
`
