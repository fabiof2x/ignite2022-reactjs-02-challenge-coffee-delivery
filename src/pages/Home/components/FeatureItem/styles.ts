import styled from 'styled-components'
import { FEATURE_ITEM_COLORS } from '../../../../constants/FEATURE_ITEM_COLORS'

export const FeatureItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
interface FeatureIconProps {
  color: keyof typeof FEATURE_ITEM_COLORS
}

export const FeatureItemIcon = styled.div<FeatureIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background: ${({ theme, color }) => theme.colors[FEATURE_ITEM_COLORS[color]]};
  color: ${({ theme }) => theme.colors["base-white"]};
`

export const FeatureItemText = styled.div`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
  color: ${({ theme }) => theme.colors["base-text"]};
`