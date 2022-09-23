import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { useCart } from '../../hooks/useCart'
import {
  HeaderContainer,
  Location,
  Cart,
  ActionsContainer,
} from './styles'

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer className="container">
      <NavLink to='/'>
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <ActionsContainer>
        <Location>
          <MapPin size={20} weight="fill" />
          Brasília, DF
        </Location>
        <NavLink to='/checkout'>
          <Cart>
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <ShoppingCart size={20} weight="fill" />
          </Cart>
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>)
}