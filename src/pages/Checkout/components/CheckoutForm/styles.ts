import styled from "styled-components";
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { CARD_HEADER_ICON_COLORS } from "../../../../constants/CARD_HEADER_ICON_COLORS";
import { BaseCardStyle } from "../../styles";

export const CheckOutFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`

export const CheckOutFormTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.textSizes["title-title-xs"]};
  color: ${({ theme }) => theme.colors["base-subtitle"]};
  font-weight: 700;
`

export const FormCardContainer = styled(BaseCardStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

interface FormCardHeaderProps {
  color: keyof typeof CARD_HEADER_ICON_COLORS
}

export const FormCardHeader = styled.div<FormCardHeaderProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${({ theme, color }) => theme.colors[CARD_HEADER_ICON_COLORS[color]]};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }
`

export const FormCardHeaderTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
  color: ${({ theme }) => theme.colors["base-subtitle"]};
`

export const FormCardHeaderSubTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
  color: ${({ theme }) => theme.colors["base-text"]};
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  input {
    height: 2.625rem;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors["base-button"]};
    background: ${({ theme }) => theme.colors["base-input"]};
    outline: none;
    transition: 0.4s;
    
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: 0.75rem;
    padding: 0 0.75rem;

    &:focus {
      border-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors["base-label"]}
    }
  }

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`

export const PaymentFormContainer = styled(ToggleGroup.Root)`
  display: flex;
  gap: 0.75rem;
`

interface PaymentFormButtonProps {
  selected: boolean;
}

export const PaymentFormButton = styled(ToggleGroup.Item) <PaymentFormButtonProps>`
  cursor: pointer;
  padding: 0 1rem;
  
  background: ${({ theme, selected }) => selected ? theme.colors["brand-purple-light"] : theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["base-text"]};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid;
  border-color: ${({ theme, selected }) => selected ? theme.colors["brand-purple"] : theme.colors["base-button"]};
  transition: 0.4s;
  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }
  &:hover {
    background: ${({ theme, selected }) => selected ? theme.colors["brand-purple-light"] : theme.colors["base-hover"]};

  }
  user-select: none;
`