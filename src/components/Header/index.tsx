import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import {
  HeaderContainer,
  Location,
  Cart,
  ActionsContainer,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <ActionsContainer>
        <Location>
          <MapPin size={20} weight="fill" />
          Brasília, DF
        </Location>
        <Cart>
          <ShoppingCart size={20} weight="fill" />
        </Cart>
      </ActionsContainer>
    </HeaderContainer>)
}