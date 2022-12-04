import styled from 'styled-components'

export const Container = styled.section`
  background: url('/images/bg-hero.jpg');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;

  position: relative;
`

export const ContainerOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 80%, #ffffff 100%);
`

export const Body = styled.div`
  padding: 6rem 0 4rem;

  display: flex;
  flex-direction: column;

  min-height: calc(100vh);

  width: 100%;

  position: relative;
  z-index: 10;

  @media screen and (min-width: 768px) {
    padding: 12rem 0 6rem;

    min-height: calc(100vh);
    justify-content: space-between;
  }

  @media screen and (min-width: 1200px) {
    max-width: 50%;
  }
`

export const Main = styled.div`
  margin-bottom: 4rem;

  @media screen and (min-width: 768px) {
    flex: 3;
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

    flex: 1;

    max-width: 60%;
  }
`

export const Description = styled.span`
  margin-bottom: 2rem;

  display: block;
  width: 100%;

  color: #fff;
  font-size: 1rem;

  @media screen and (min-width: 768px) {
    font-size: 1.125rem;
  }
`
