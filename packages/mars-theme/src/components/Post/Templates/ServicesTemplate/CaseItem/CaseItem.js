import React from 'react';
import {
  CaseItemBlock,
  CaseLink,
} from './styles';


const CaseItem = ({
  children, className, textBlock = false, src = '', link = '#',
}) => (
  <CaseItemBlock
    src={src}
    className={className}
    link={link}
  >
    {
        React.Children.map(children, (child) => React.cloneElement(child, {}))
      }
    <CaseLink link={link}>Learn more</CaseLink>
  </CaseItemBlock>
);

export default CaseItem;
