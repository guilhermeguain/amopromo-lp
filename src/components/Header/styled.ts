import styled from 'styled-components'

export const Container = styled.header`
  justify-content: space-between;

  background-color: var(--color-primary);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`

export const ContainerContent = styled.div`
  padding: 0.75rem 0;

  display: flex;
  flex: 1;

  justify-content: space-between;
  align-items: center;

  font-weight: 500;

  @media screen and (min-width: 768px) {
    padding: 1.5rem 0;
  }
`

export const Logo = styled.a`
  line-height: 1;
`

export const LogoImage = styled.img``

export const MobileButton = styled.button`
  border: none;

  background: transparent;

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

export const MobileMenu = styled.div`
  padding: 0.5rem 1rem;

  display: flex;
  flex-direction: column;

  background-color: #fff;
`

export const MobileMenuLink = styled.a`
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: transparent;
  padding: 8px 0px;

  text-decoration: none;

  color: var(--color-primary);

  & ~ a {
    border-top: 1px solid #ccd1d6;
  }

  &:hover {
    border-color: var(--color-active);
  }
`

export const Menu = styled.nav`
  display: flex;

  gap: 1rem;
`

export const MenuLink = styled.a`
  border-width: 1px;
  border-style: solid;
  border-radius: 0.25rem;
  border-color: transparent;
  padding: 0.5rem 1rem;

  text-decoration: none;

  color: #fff;

  &:hover {
    border-color: var(--color-active);
  }
`

export const MenuButton = styled.a`
  border-width: 1px;
  border-style: solid;
  border-radius: 0.25rem;
  border-color: transparent;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  cursor: pointer;

  &:hover {
    border-color: var(--color-active);
  }
`

export const MenuButtonIcon = styled.span`
  border-radius: 4px;
  padding: 0 0.25rem;

  background: #fff;
  line-height: 1;
`

export const MenuButtonLabel = styled.span`
  color: #fff;
`
