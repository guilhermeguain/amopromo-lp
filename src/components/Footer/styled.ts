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

  width: 100%;
`

export const BodySection = styled.div`
  border-bottom: 1px solid var(--color-primary);
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const BodySection1 = styled.div`
  border-bottom: 1px solid var(--color-primary);
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const BodySection2 = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;

  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const BodySection3 = styled.div`
  border-bottom: 1px solid var(--color-primary);
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;

  @media screen and (min-width: 768px) {
    margin-top: 2rem;
    padding-bottom: 0;

    flex-direction: row;
  }
`

export const BodySectionGroup1 = styled.div`
  border-top: 1px solid var(--color-primary);
  padding-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (min-width: 768px) {
    border-top: 0;
    padding-top: 0;

    flex: 1;
  }
`

export const BodySectionGroup2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`

export const BodySectionGroup2Inner = styled.div`
  display: flex;
  flex-direction: column;
`

export const BodySectionGroup3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Logo = styled.img`
  margin: 1rem auto 0;

  display: block;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`

export const SocialNetworks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const SocialNetworksText = styled.span`
  text-transform: uppercase;
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

export const Title = styled.strong`
  margin-bottom: 0.5rem;

  font-weight: 400;
  text-transform: uppercase;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Menus = styled.div`
  display: flex;
  flex-flow: row wrap;

  gap: 1rem;

  @media screen and (min-width: 1200px) {
    flex-flow: row nowrap;
  }
`

export const MenusItem = styled.div`
  width: calc(50% - 0.5rem);

  ul {
    list-style: none;

    a {
      font-size: 0.875rem;

      text-decoration: none;
      color: var(--color-gray);

      &:hover {
        text-decoration: underline;
        color: var(--color-secondary);
      }
    }
  }

  @media screen and (min-width: 768px) {
    &:nth-child(1) {
      order: 3;
    }

    &:nth-child(2) {
      order: 1;
    }

    &:nth-child(3) {
      order: 2;
    }

    &:nth-child(4) {
      order: 4;
    }
  }

  @media screen and (min-width: 1200px) {
    width: initial;
    flex: 1;
  }
`

export const MenusItemTitle = styled.strong`
  margin-bottom: 0.5rem;

  font-weight: 400;
  text-transform: uppercase;

  display: block;
`
