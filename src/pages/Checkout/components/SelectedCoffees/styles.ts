import styled from "styled-components";
import { BaseCardStyle } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  gap: 0.75rem;
`;

export const SelectedCoffeesTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.textSizes["title-title-xs"]};
  color: ${({ theme }) => theme.colors["base-subtitle"]};
  font-weight: 700;
`

export const DetailsContainer = styled(BaseCardStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`;

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ConfirmationItem = styled.p`
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
  color: ${({ theme }) => theme.colors["base-text"]};
`;

export const ConfirmationAmount = styled.p`
  font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
  color: ${({ theme }) => theme.colors["base-text"]};
`;

export const TotalItem = styled.p`
  font-size: ${({ theme }) => theme.textSizes["text-bold-l"]};
  color: ${({ theme }) => theme.colors["base-subtitle"]};
  font-weight: 700;
`;

export const TotalAmount = styled.p`
  font-size: ${({ theme }) => theme.textSizes["text-bold-l"]};
  color: ${({ theme }) => theme.colors["base-subtitle"]};
  font-weight: 700;
`;

export const ConfirmationButton = styled.button`
  cursor: pointer;
  padding: 0.75rem 2.8rem;
  color: ${({ theme }) => theme.colors["base-white"]};
  font-weight: 700;
  background: ${({ theme }) => theme.colors["brand-yellow"]};
  font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
  border: none;
  border-radius: 6px;
  margin-top: 0.7rem;
  text-transform: uppercase;
  transition: 0.4s;
  line-height: 1.3rem;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
`;
