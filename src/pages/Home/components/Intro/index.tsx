import {
  IntroContainer,
  IntroContent,
  IntroText,
  IntroTextTitle,
  IntroFeatures,
} from './styles'

import {
  Coffee,
  Package,
  ShoppingCart,
  Timer
} from 'phosphor-react'

import introCoffee from '../../../../assets/intro-coffee.png'
import { FeatureItem } from '../../../../components/FeatureItem'

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <IntroText>
          <IntroTextTitle>
            <h1>
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </p>
          </IntroTextTitle>
          <IntroFeatures>
            <FeatureItem
              color="brandYellowDark"
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <FeatureItem
              color="baseText"
              icon={<Package weight="fill" />}
              text="Embalagem  mantém o café intacto"
            />
            <FeatureItem
              color="brandYellow"
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <FeatureItem
              color="brandPurple"
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </IntroFeatures>
        </IntroText>
        <img src={introCoffee} />
      </IntroContent>

    </IntroContainer>
  )
}