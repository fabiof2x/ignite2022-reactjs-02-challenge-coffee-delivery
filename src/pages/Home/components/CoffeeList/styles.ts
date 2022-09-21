import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  margin-top: 2rem;
`;

export const CoffeeListTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
  color: ${({ theme }) => theme.colors["base-subtitle"]};
  font-weight: 800;
`

export const CoffeeListItems = styled.div`
  margin-top: 3.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
`;