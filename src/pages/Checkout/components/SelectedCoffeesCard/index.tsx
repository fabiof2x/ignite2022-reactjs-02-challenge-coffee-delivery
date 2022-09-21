import { Trash } from "phosphor-react";
import { CounterInput } from "../../../../components/CounterInput";
import {
  ActionsContainer,
  SelectedCoffeeImage,
  SelectedCoffeeName,
  RemoveButton,
  SelectedCoffeesCardContainer,
  SelectedCoffeesCardContent,
  SelectedCoffeePrice
} from "./styles";

export function SelectedCoffeesCard() {
  return (
    <SelectedCoffeesCardContainer>
      <SelectedCoffeesCardContent>
        <SelectedCoffeeImage src={`/img/coffees/tradicional.png`} />
        <div>
          <SelectedCoffeeName>Expresso Tradicional</SelectedCoffeeName>
          <ActionsContainer>
            <CounterInput />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </SelectedCoffeesCardContent>
      <SelectedCoffeePrice>R$ 9,90</SelectedCoffeePrice>
    </SelectedCoffeesCardContainer>
  )
}