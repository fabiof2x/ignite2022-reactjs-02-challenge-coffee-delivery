import { SelectedCoffeesCard } from "../SelectedCoffeesCard";
import {
  ConfirmationSectionContainer,
  DetailsContainer,
  SelectedCoffeesContainer,
  SelectedCoffeesTitle,
  ConfirmationItem,
  ConfirmationAmount,
  TotalItem,
  TotalAmount,
  ConfirmationButton,
} from "./styles";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <SelectedCoffeesTitle>
        Cafés selecionados
      </SelectedCoffeesTitle>

      <DetailsContainer>
        <SelectedCoffeesCard />
        <SelectedCoffeesCard />
        <SelectedCoffeesCard />

        <ConfirmationSectionContainer>
          <div>
            <ConfirmationItem>Total de itens</ConfirmationItem>
            <ConfirmationAmount>R$ 9,90</ConfirmationAmount>
          </div>
          <div>
            <ConfirmationItem>Entrega</ConfirmationItem>
            <ConfirmationAmount>R$ 3,50</ConfirmationAmount>
          </div>
          <div>
            <TotalItem>Total</TotalItem>
            <TotalAmount>R$ 33,20</TotalAmount>
          </div>
          <ConfirmationButton>Confirmar Pedido</ConfirmationButton>
        </ConfirmationSectionContainer>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}