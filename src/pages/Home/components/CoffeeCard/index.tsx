import { ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import { CounterInput } from '../../../../components/CounterInput';
import { CoffeeDTO } from '../../../../dtos/CoffeesDTO'
import { useCart } from '../../../../hooks/useCart';
import { toMoneyFormat } from '../../../../libs/toMoneyFormat';

import {
  CoffeeCardContainer,
  CoffeeImage,
  CoffeeTagsContainer,
  CoffeeTag,
  CoffeeName,
  CoffeeDescription,
  CardFooter,
  AddCartWrapper,
  CoffeePriceInfo,
  CoffeePrice,
  AddCartButton,
} from './styles'

interface CoffeeCardProps {
  coffee: CoffeeDTO;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  const { addCoffeeToCart } = useCart();

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity
    }
    addCoffeeToCart(coffeeToAdd)
  }

  return (
    <CoffeeCardContainer>
      <CoffeeImage src={`/img/coffees/${coffee.photo}`} />
      <CoffeeTagsContainer>
        {coffee.tags.map((tag) => (
          <CoffeeTag key={`${tag}${Math.random()}`}>
            {tag}
          </CoffeeTag>
        ))}
      </CoffeeTagsContainer>

      <CoffeeName>
        {coffee.name}
      </CoffeeName>
      <CoffeeDescription>
        {coffee.description}
      </CoffeeDescription>

      <CardFooter>
        <CoffeePriceInfo>
          <span>R$</span>
          <CoffeePrice>
            {toMoneyFormat(coffee.price)}
          </CoffeePrice>
        </CoffeePriceInfo>

        <AddCartWrapper>
          <CounterInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <AddCartButton
            onClick={handleAddToCart}
          >
            <ShoppingCart weight="fill" size={22} />
          </AddCartButton>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}