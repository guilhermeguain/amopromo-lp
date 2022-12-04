import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem 0;

  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 4rem 0;

    background-color: #f8f8f8;
  }
`

export const Title = styled.h2`
  font-size: 1.5rem;

  @media screen and (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 3.375rem;
  }
`

export const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.875rem;
`

export const List = styled.div`
  margin: 2rem 0;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media screen and (min-width: 768px) {
    flex-flow: row wrap;
  }
`

export const ListItem = styled.div`
  border-radius: 8px;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  align-items: center;
  text-align: center;
  flex: 1;

  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);

  @media screen and (min-width: 768px) {
    flex: initial;
    width: calc(50% - 0.625rem);
  }

  @media screen and (min-width: 1200px) {
    flex: 1;
    width: auto;
  }
`

export const ListItemTitle = styled.h3`
  color: var(--color-primary);
`

export const ListItemDescription = styled.p`
  flex: 1;

  font-size: 0.875rem;
  color: var(--color-gray-secondary);
`
