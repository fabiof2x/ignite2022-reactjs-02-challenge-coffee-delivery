import { CoffeeDTO } from '../../../../dtos/CoffeesDTO'
import { CoffeeCard } from '../CoffeeCard'
import {
  CoffeeListContainer,
  CoffeeListTitle,
  CoffeeListItems,
} from './styles'

interface CoffeeListProps {
  coffees: CoffeeDTO[];
}

export function CoffeeList({ coffees }: CoffeeListProps) {
  return (
    <CoffeeListContainer className="container">
      <CoffeeListTitle>
        Nossos cafés
      </CoffeeListTitle>
      <CoffeeListItems>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeListItems>
    </CoffeeListContainer>
  )
}