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
  cursor: pointer;
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
  background: ${({ theme }) => theme.colors['brand-yellow-light']};
  color: ${({ theme }) => theme.colors['brand-yellow-dark']};
`