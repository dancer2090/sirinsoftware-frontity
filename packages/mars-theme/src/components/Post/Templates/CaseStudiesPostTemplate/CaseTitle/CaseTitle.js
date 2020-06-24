import React from 'react'
import {
  Title,
  Icon
} from './styles';

const CaseTitle = ({ className, children, nameSvg }) => {
  return (
    <Title className={className}>
      <Icon name={nameSvg}/>
      <span>{children}</span>
    </Title>
  )
}

export default CaseTitle;
