import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 6.5rem;
`

export const ActionsContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const BaseHeaderButton = styled.button`
  display: flex;
  border: 0;
  gap: 0.25rem;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`

export const Location = styled(BaseHeaderButton)`
  background: ${({ theme }) => theme.colors["brand-purple-light"]};
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  color: ${({ theme }) => theme.colors['brand-purple-dark']};

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }
`

export const Cart = styled(BaseHeaderButton)`
  cursor: pointer;
  background: ${({ theme }) => theme.colors['brand-yellow-light']};
  color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  position: relative;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 9999px;
    top: calc(-1.25rem/2);
    right: calc(-1.25rem/2);
    color: ${({ theme }) => theme.colors['base-white']};
    font-size: 0.75rem;
    font-weight: 700;
    background: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`