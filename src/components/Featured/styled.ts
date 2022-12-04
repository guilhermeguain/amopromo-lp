import styled from 'styled-components'

export const Container = styled.section`
  margin: 2rem 0;
`

export const Body = styled.div`
  padding: 2rem 0;

  max-width: 100%;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  &:nth-child(1) {
    flex: 3;
  }

  &:nth-child(2) {
    flex: 2;
  }

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`

export const Title = styled.h2`
  font-size: 1.5rem;

  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 3.375rem;
  }
`

export const List = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ListItem = styled.li`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  font-size: 1rem;

  @media screen and (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.625rem;
  }
`

export const ListItemPrefix = styled.span`
  min-width: 32px;

  font-size: 32px;
  font-weight: 700;
  line-height: 1;

  color: var(--color-secondary);
`

export const ListItemText = styled.span``

export const Description = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.875rem;

  text-align: center;

  color: var(--color-secondary);
`
