import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FeatureItem } from "../../components/FeatureItem";
import { PAYMENT_METHODS } from "../../constants/PAYMENT_METHODS";
import { OrderData } from "../Checkout";
import {
  SuccessContainer,
  SuccessContainerTitle,
  SuccessContainerSubTitle,
  OrderInfoContainer,
  OrderInfoContent,
} from "./styles";

interface LocationType {
  state: OrderData;
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/")
    }
  }, [])

  if (!state) return <></>;

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
                Entrega em <strong>{state.street}</strong>, {state.number}
                <br />
                {state.district} - {state.city}, {state.uf}
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
                <strong>{PAYMENT_METHODS[state.paymentMethod]}</strong>
              </p>
            }
          />
        </OrderInfoContent>
        <img src="/img/success/illustration.png" />
      </OrderInfoContainer>
    </SuccessContainer>
  )
}