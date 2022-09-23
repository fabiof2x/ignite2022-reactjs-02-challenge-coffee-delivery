import { useCart } from "../../../../hooks/useCart";
import { toMoneyFormat } from "../../../../libs/toMoneyFormat";
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

const DELIVERY_PRICE = 3.5;

export function SelectedCoffees() {
  const { cartItems,
    cartItemsTotal,
    cartQuantity,
  } = useCart();

  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = toMoneyFormat(cartItemsTotal);
  const formattedDeliveryPrice = toMoneyFormat(DELIVERY_PRICE);
  const formattedCartTotal = toMoneyFormat(cartTotal);

  return (
    <SelectedCoffeesContainer>
      <SelectedCoffeesTitle>
        Cafés selecionados
      </SelectedCoffeesTitle>

      <DetailsContainer>
        {cartItems.map((item) => (
          <SelectedCoffeesCard
            key={item.id}
            coffee={item}
          />
        ))}

        <ConfirmationSectionContainer>
          <div>
            <ConfirmationItem>Total de itens</ConfirmationItem>
            <ConfirmationAmount>R$ {formattedItemsTotal}</ConfirmationAmount>
          </div>
          <div>
            <ConfirmationItem>Entrega</ConfirmationItem>
            <ConfirmationAmount>R$ {formattedDeliveryPrice}</ConfirmationAmount>
          </div>
          <div>
            <TotalItem>Total</TotalItem>
            <TotalAmount>R$ {formattedCartTotal}</TotalAmount>
          </div>
          <ConfirmationButton disabled={cartQuantity <= 0}>Confirmar Pedido</ConfirmationButton>
        </ConfirmationSectionContainer>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}