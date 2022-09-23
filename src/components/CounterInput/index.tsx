import { Minus, Plus } from "phosphor-react";
import { CounterInputContainer, IconWrapper } from "./styles";

interface CounterInputProps {
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
}

export function CounterInput({
  onIncrease,
  onDecrease,
  quantity
}: CounterInputProps) {
  return (
    <CounterInputContainer>
      <IconWrapper type="button" disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper type="button" onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </CounterInputContainer>
  )
}