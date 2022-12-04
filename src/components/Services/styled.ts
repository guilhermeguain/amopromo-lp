import styled from 'styled-components'

export const Container = styled.div`
  padding: 4rem 0;

  text-align: center;

  @media screen and (min-width: 768px) {
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
    flex-direction: row;
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
`

export const ListItemTitle = styled.h3`
  color: var(--color-primary);
`

export const ListItemDescription = styled.p`
  flex: 1;

  font-size: 0.875rem;
  color: var(--color-gray-secondary);
`
