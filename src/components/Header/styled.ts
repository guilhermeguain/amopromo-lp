import styled from 'styled-components'

export const Container = styled.header`
  justify-content: space-between;

  background-color: var(--color-primary);

  position: relative;
  z-index: 10;
`

export const ContainerContent = styled.div`
  padding: 24px 0;

  display: flex;
  flex: 1;

  justify-content: space-between;
  align-items: center;

  font-weight: 500;
`

export const Logo = styled.a``

export const LogoImage = styled.img``

export const MobileButton = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
`

export const MobileButtonLabel = styled.span`
  color: #fff;
  font-weight: 600;
`

export const Menu = styled.nav`
  display: flex;

  gap: 1rem;
`

export const MenuLink = styled.a`
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: transparent;
  padding: 8px 16px;

  text-decoration: none;

  color: #fff;

  &:hover {
    border-color: var(--color-active);
  }
`

export const MenuButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const MenuButtonIcon = styled.span`
  border-radius: 4px;
  padding: 2.75px 6px;

  background: #fff;
  line-height: 1;
`

export const MenuButtonLabel = styled.span`
  color: #fff;
`
