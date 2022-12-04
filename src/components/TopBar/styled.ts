import styled from 'styled-components'

export const Container = styled.div`
  background-color: #03341c;
`

export const Body = styled.div`
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    padding: 0.5rem 0;

    flex-direction: row;
  }
`

export const Text = styled.span`
  color: #fff;

  font-size: 13px;
  line-height: 1;
  text-transform: uppercase;
`

export const Links = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 1rem;

  font-size: 16px;
  line-height: 1;
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  text-decoration: none;
`

export const LinkLabel = styled.span`
  color: var(--color-active);
`
