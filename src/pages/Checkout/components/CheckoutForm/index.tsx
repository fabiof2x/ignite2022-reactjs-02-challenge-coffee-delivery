import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
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
  PaymentFormError,
} from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function CheckoutForm() {
  const { register, formState, setValue, getValues } = useFormContext();
  const { errors } = formState as unknown as ErrorsType;
  const [paymentMethod, setPaymentMethod] = useState<string>("")
  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  useEffect(() => {
    setValue('paymentMethod', paymentMethod)
  }, [paymentMethod])

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
          <Input
            type="number"
            className="cep"
            placeholder="CEP"
            {...register("cep")}
            error={errors.cep?.message}
          />

          <Input
            type="text"
            className="street"
            placeholder="Rua"
            {...register("street")}
            error={errors.street?.message}
          />

          <Input
            type="number"
            placeholder="Número"
            {...register("number")}
            error={errors.number?.message}
          />

          <Input
            type="text"
            className="complement"
            placeholder="Complemento"
            {...register("complement")}
            error={errors.complement?.message}
            rightText="Opcional"
          />

          <Input
            type="text"
            placeholder="Bairro"
            {...register("district")}
            error={errors.district?.message}
          />

          <Input
            type="text"
            placeholder="Cidade"
            {...register("city")}
            error={errors.city?.message}
          />

          <Input
            type="text"
            placeholder="UF"
            {...register("uf")}
            error={errors.uf?.message}
          />
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
            value="credit"
            title="Cartão de Crédito"
            selected={paymentMethod === 'credit'}
          >
            <CreditCard size={16} />
            Cartão de Crédito
          </PaymentFormButton>
          <PaymentFormButton
            value="debit"
            title="Cartão de Débito"
            selected={paymentMethod === 'debit'}
          >
            <Bank size={16} />
            Cartão de Débito
          </PaymentFormButton>
          <PaymentFormButton
            value="money"
            title="Dinheiro"
            selected={paymentMethod === 'money'}
          >
            <Money size={16} />
            Dinheiro
          </PaymentFormButton>
          {paymentMethodError && <PaymentFormError>{paymentMethodError}</PaymentFormError>}
        </PaymentFormContainer>
      </FormCardContainer>

    </CheckOutFormContainer>
  )
}