import { Trash } from "phosphor-react";
import { CounterInput } from "../../../../components/CounterInput";
import { CartItem } from "../../../../contexts/CartContext"
import { useCart } from "../../../../hooks/useCart";
import { toMoneyFormat } from "../../../../libs/toMoneyFormat";
import {
  ActionsContainer,
  SelectedCoffeeImage,
  SelectedCoffeeName,
  RemoveButton,
  SelectedCoffeesCardContainer,
  SelectedCoffeesCardContent,
  SelectedCoffeePrice
} from "./styles";

interface SelectedCoffeesCardProps {
  coffee: CartItem;
}

export function SelectedCoffeesCard({ coffee }: SelectedCoffeesCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase")
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease")
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity;

  const formatedPrice = toMoneyFormat(coffeeTotal);

  return (
    <SelectedCoffeesCardContainer>
      <SelectedCoffeesCardContent>
        <SelectedCoffeeImage src={`/img/coffees/${coffee.photo}`} />
        <div>
          <SelectedCoffeeName>{coffee.name}</SelectedCoffeeName>
          <ActionsContainer>
            <CounterInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <RemoveButton
              type="button"
              onClick={handleRemove}
            >
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </SelectedCoffeesCardContent>
      <SelectedCoffeePrice>R$ {formatedPrice}</SelectedCoffeePrice>
    </SelectedCoffeesCardContainer>
  )
}