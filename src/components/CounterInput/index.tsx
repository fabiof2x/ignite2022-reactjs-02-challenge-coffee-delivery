import { Minus, Plus } from "phosphor-react";
import { CounterInputContainer, IconWrapper } from "./styles";

export function CounterInput() {
  return (
    <CounterInputContainer>
      <IconWrapper>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={0} />
      <IconWrapper>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </CounterInputContainer>
  )
}