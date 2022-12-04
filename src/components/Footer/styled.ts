import styled, { css } from 'styled-components'

type ContainerDecorationColorProps = {
  color: string
}

type SocialNetworksLinkProps = {
  color: string
}

export const Container = styled.footer`
  margin: 4rem 0 0;
`

export const ContainerDecoration = styled.div`
  display: flex;
`

export const ContainerDecorationColor = styled.div<ContainerDecorationColorProps>`
  flex: 1;
  height: 0.25rem;

  background-color: gray;

  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}
`
export const Body = styled.div`
  padding: 2rem 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const BodySection = styled.div`
  border-bottom: 1px solid var(--color-primary);
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
`

export const BodySectionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Logo = styled.img`
  margin: 1rem auto;

  display: block;
`

export const SocialNetworks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

export const SocialNetworksLink = styled.a<SocialNetworksLinkProps>`
  border-radius: 50%;

  padding: 0.4rem;

  background: gray;

  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `}
`

export const SocialNetworksIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  line-height: 1;
`
export const Title = styled.h4`
  margin-bottom: 0.5rem;

  font-weight: 400;
  text-transform: uppercase;
`

export const Text = styled.span``

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const IconsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`
