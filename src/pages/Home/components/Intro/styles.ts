import styled from 'styled-components';
import introBG from '../../../../assets/intro-bg.png'

export const IntroContainer = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 34rem;
  background: ${() => `url(${introBG}) no-repeat center`};
  background-size: cover;
`;

export const IntroContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  filter: none;
`

export const IntroText = styled.div`
`

export const IntroTextTitle = styled.div`
  h1 {
    font-family: ${({ theme }) => theme.fonts.title};;
    font-size: ${({ theme }) => theme.textSizes["title-title-xl"]};
    color: ${({ theme }) => theme.colors["base-title"]};
    font-weight: 800;
    line-height: 3.875rem;
  }
  p {
    margin-top: 1rem;
    font-family: ${({ theme }) => theme.fonts.regular};;
    font-size: ${({ theme }) => theme.textSizes["text-regular-l"]};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`
export const IntroFeatures = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`