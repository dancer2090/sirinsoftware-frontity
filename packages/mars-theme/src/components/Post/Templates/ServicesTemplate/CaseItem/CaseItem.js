import React, { Fragment } from 'react';
import {
  CaseItemBlock,
  CaseLink,
} from './styles';


const CaseItem = ({ children, className, textBlock = false, src = '' }) => {
  return (
    <CaseItemBlock 
      src={src}
      className={className}
      >
      {
        React.Children.map(children, child => 
          React.cloneElement(child, {})
        )
      }
      <CaseLink href="#">Learn more</CaseLink>
    </CaseItemBlock>
  )
}

export default CaseItem;