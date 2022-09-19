import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useState } from "react";
import {
  CheckOutFormContainer,
  CheckOutFormTitle,
  FormCardContainer,
  FormCardHeader,
  FormCardHeaderTitle,
  FormCardHeaderSubTitle,
  AddressFormContainer,
  PaymentFormContainer,
  PaymentFormButton,
} from "./styles";

export function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState<string>("")

  return (
    <CheckOutFormContainer>
      <CheckOutFormTitle>Complete seu pedido</CheckOutFormTitle>

      <FormCardContainer>
        <FormCardHeader color="brandYellowDark">
          <MapPinLine size={22} />
          <div>
            <FormCardHeaderTitle>Endereço de Entrega</FormCardHeaderTitle>
            <FormCardHeaderSubTitle>Informe o endereço onde deseja receber seu pedido</FormCardHeaderSubTitle>
          </div>
        </FormCardHeader>

        <AddressFormContainer>
          <input type="number" className="cep" placeholder="CEP" />
          <input type="text" className="street" placeholder="Rua" />
          <input type="number" placeholder="Número" />
          <input type="text" className="complement" placeholder="Complemento" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </AddressFormContainer>
      </FormCardContainer>

      <FormCardContainer>
        <FormCardHeader color="brandPurple">
          <CurrencyDollar size={22} />
          <div>
            <FormCardHeaderTitle>Pagamento</FormCardHeaderTitle>
            <FormCardHeaderSubTitle>O pagamento é feito na entrega. Escolha a forma que deseja pagar</FormCardHeaderSubTitle>
          </div>
        </FormCardHeader>

        <PaymentFormContainer
          type='single'
          value={paymentMethod}
          onValueChange={setPaymentMethod}
        >
          <PaymentFormButton
            value="0"
            title="Cartão de Crédito"
            selected={paymentMethod === '0'}
          >
            <CreditCard size={16} />
            Cartão de Crédito
          </PaymentFormButton>
          <PaymentFormButton
            value="1"
            title="Cartão de Débito"
            selected={paymentMethod === '1'}
          >
            <Bank size={16} />
            Cartão de Débito
          </PaymentFormButton>
          <PaymentFormButton
            value="2"
            title="Dinheiro"
            selected={paymentMethod === '2'}
          >
            <Money size={16} />
            Dinheiro
          </PaymentFormButton>
        </PaymentFormContainer>
      </FormCardContainer>

    </CheckOutFormContainer>
  )
}