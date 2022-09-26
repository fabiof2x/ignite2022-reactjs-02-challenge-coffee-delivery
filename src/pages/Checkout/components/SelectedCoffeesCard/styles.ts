import styled from "styled-components";

export const SelectedCoffeesCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
`

export const SelectedCoffeesCardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const SelectedCoffeeImage = styled.img`
  width: 4rem;
  height: 4rem;
`

export const SelectedCoffeeName = styled.p``

export const SelectedCoffeePrice = styled.p`
  align-self: flex-start;
  font-weight: 700;
`

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`

export const RemoveButton = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors["base-text"]};
  background: ${({ theme }) => theme.colors["base-button"]};
  font-size: 0.75rem;
  height: 100%;
  border: none;
  padding: 0 0.5rem;
  border-radius: 6px;
  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }
`