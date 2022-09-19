import styled from "styled-components";

export const CheckoutContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const BaseCardStyle = styled.div`
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px;
`;