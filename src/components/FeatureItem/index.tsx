import { ReactNode } from 'react'
import { FEATURE_ITEM_COLORS } from '../../constants/FEATURE_ITEM_COLORS';


import {
  FeatureItemContainer,
  FeatureItemIcon,
  FeatureItemText,
} from './styles'

interface FeatureItemProps {
  color: keyof typeof FEATURE_ITEM_COLORS;
  icon: ReactNode;
  text: String | ReactNode;
}

export function FeatureItem({ color, icon, text }: FeatureItemProps) {
  return (
    <FeatureItemContainer>
      <FeatureItemIcon color={color}>
        {icon}
      </FeatureItemIcon>
      <FeatureItemText>
        {text}
      </FeatureItemText>
    </FeatureItemContainer>
  )
}