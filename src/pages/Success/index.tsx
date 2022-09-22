import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { FeatureItem } from "../../components/FeatureItem";
import {
  SuccessContainer,
  SuccessContainerTitle,
  SuccessContainerSubTitle,
  OrderInfoContainer,
  OrderInfoContent,
} from "./styles";

export function Success() {
  return (
    <SuccessContainer className="container">
      <div>
        <SuccessContainerTitle>
          Uhu! Pedido confirmado
        </SuccessContainerTitle>
        <SuccessContainerSubTitle>
          Agora é só aguardar que logo o café chegará até você
        </SuccessContainerSubTitle>
      </div>

      <OrderInfoContainer>
        <OrderInfoContent>
          <FeatureItem
            color="brandPurple"
            icon={<MapPin weight="fill" />}
            text={
              <p>
                Entrega em <strong>Rua João Daniel Martinelli</strong>, 102
                <br />
                Farrapos - Porto Alegre, RS
              </p>
            }
          />
          <FeatureItem
            color="brandYellow"
            icon={<Clock weight="fill" />}
            text={
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            }
          />
          <FeatureItem
            color="brandYellowDark"
            icon={<CurrencyDollar weight="fill" />}
            text={
              <p>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </p>
            }
          />
        </OrderInfoContent>
        <img src="/img/success/illustration.png" />
      </OrderInfoContainer>
    </SuccessContainer>
  )
}