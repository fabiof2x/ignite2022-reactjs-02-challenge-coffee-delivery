import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;
`;

export const SuccessContainerTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
  color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  font-weight: 800;
`

export const SuccessContainerSubTitle = styled.div`
  font-size: ${({ theme }) => theme.textSizes["text-regular-l"]};
  color: ${({ theme }) => theme.colors["base-subtitle"]};
`

export const OrderInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const OrderInfoContent = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${({ theme }) => theme.colors["base-background"]};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;