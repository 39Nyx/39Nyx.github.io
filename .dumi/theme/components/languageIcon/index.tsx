import React from 'react'
import { PnpmIcon } from './pnpm/index'
import { YarnIcon } from './yarn/index'
import { NpmIcon } from './npm/index'
import styled from "styled-components";

const iconMap: any = {
  pnpm: PnpmIcon,
  yarn: YarnIcon,
  npm: NpmIcon
}

export const LabelWrapperStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-inline-end: 8px;
  }
`;

interface LanguageIconProps {
  name: string
}


export const LanguageIcon: React.FC<LanguageIconProps> = (props) => {
  if (iconMap[props.name]) {
    const IconComponent = iconMap[props.name]
    return (
      <LabelWrapperStyle>
        <IconComponent/>
        { props.name }
      </LabelWrapperStyle>
    )
  }
  return (
    <LabelWrapperStyle>
      { props.name }
    </LabelWrapperStyle>
  )
}
