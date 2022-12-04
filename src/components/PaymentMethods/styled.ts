import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`

export const Group = styled.div``

export const SubTitle = styled.strong`
  margin-bottom: 0.5rem;

  font-weight: 600;
  text-transform: uppercase;

  flex: 1;

  display: block;
`

export const Text = styled.span`
  margin-bottom: 0.5rem;

  display: block;
`

export const IconsList = styled.div`
  margin-bottom: 1rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`
