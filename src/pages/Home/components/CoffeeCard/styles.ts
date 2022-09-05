import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: ${({ theme }) => theme.colors["base-card"]};
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 6px 36px 6px 36px;
  padding: 0 1.25rem 1.25rem 1.25rem;
  display: flex;
`;

export const CoffeeImage = styled.img`
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
`

export const CoffeeTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
`;

export const CoffeeTag = styled.span`
  background: ${({ theme }) => theme.colors["brand-yellow-light"]};
  color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  font-size: ${({ theme }) => theme.textSizes["components-tag"]};
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
`

export const CoffeeName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.textSizes["title-title-s"]};
  color: ${({ theme }) => theme.colors["base-subtitle"]};
  font-weight: 700;
`;

export const CoffeeDescription = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
  color: ${({ theme }) => theme.colors["base-label"]};
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CoffeePriceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  span {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`
export const CoffeePrice = styled.div`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.textSizes['title-title-m']};
  color: ${({ theme }) => theme.colors["base-text"]};
`

export const AddCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.375rem;
  height: 2.375rem;
  border: none;
  background: ${({ theme }) => theme.colors["brand-purple-dark"]};
  color: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px;
  margin-left: 0.3rem;
  transition: background-color 0.4s;

  &:hover {
    background: ${({ theme }) => theme.colors["brand-purple"]};
  }
`

export const AddCartWrapper = styled.div`
  width: 7.5rem;
`;